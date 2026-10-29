/**
 * ============================================================================
 * FIREBASE-SERVICE.JS - CAMADA DE DADOS E INFRAESTRUTURA FIREBASE (MATHLINGO v3.5)
 * ============================================================================
 * Responsabilidade: Abstrair chamadas do Firebase Auth e Cloud Firestore.
 * Garante resiliência, sincronização de perfil e fallback offline para convidados.
 */

(function (window) {
    'use strict';

    class FirebaseService {
        constructor() {
            this.auth = null;
            this.db = null;
            this.initialized = false;
        }

        /**
         * Inicializa as instâncias do Firebase Auth e Firestore
         */
        init() {
            if (typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) {
                console.warn("[FirebaseService] SDK do Firebase ausente ou não configurado.");
                return false;
            }
            try {
                this.auth = firebase.auth();
                this.db = firebase.firestore();
                this.initialized = true;
                console.log("🔥 [FirebaseService] Inicializado com sucesso.");
                return true;
            } catch (error) {
                console.error("[FirebaseService] Erro ao inicializar SDK:", error);
                return false;
            }
        }

        /**
         * Monitora alterações no estado de autenticação
         * @param {Function} callback (user, loggedIn) => void
         */
        onAuthStateChanged(callback) {
            if (!this.initialized && !this.init()) {
                callback(null, false);
                return;
            }

            this.auth.onAuthStateChanged(async (firebaseUser) => {
                if (firebaseUser) {
                    try {
                        const userData = await this.loadUserData(firebaseUser.uid, firebaseUser);
                        // O 3º argumento permite ao auth.js ler a claim de papel.
                        callback(userData, true, firebaseUser);
                    } catch (err) {
                        console.error("[FirebaseService] Erro ao carregar perfil do usuário:", err);
                        callback(null, false, null);
                    }
                } else {
                    callback(null, false, null);
                }
            });
        }

        /**
         * Allowlist de perfil (falhas 2–3): campos de privilégio nunca vêm do
         * cliente. Aplica-se antes de gravar e também na leitura defensiva.
         * Nota (decisão R5): `xp` é gravável pelo cliente via game.addXP, por
         * isso NÃO está na lista negada das regras.
         * R26: `rede`/`municipio` são lidos do documento, mas NUNCA escritos
         * pelo cliente — com `{ paraEscrita: true }` a escrita os descarta
         * (o servidor é quem os define).
         */
        sanitizeProfile(data, opcoes) {
            if (!data || typeof data !== 'object' || Array.isArray(data)) return {};

            const paraEscrita = Boolean(opcoes && opcoes.paraEscrita);
            const limpo = {};
            const tem = (campo) => Object.prototype.hasOwnProperty.call(data, campo);
            const comoTexto = (valor) => (typeof valor === 'string' ? valor : String(valor));

            for (const campo of [
                'name', 'fullName', 'serie', 'turma', 'matricula', 'matriculaHash',
                'lastActivity', 'theme', 'rede', 'municipio'
            ]) {
                if (tem(campo) && data[campo] !== null && data[campo] !== undefined) {
                    limpo[campo] = comoTexto(data[campo]);
                }
            }

            if (tem('photoURL')) {
                limpo.photoURL = typeof data.photoURL === 'string' ? data.photoURL : null;
            }

            if (tem('xp')) {
                const xp = parseInt(data.xp, 10);
                limpo.xp = Number.isFinite(xp) && xp > 0 ? xp : 0;
            }

            if (tem('streak')) {
                const streak = parseInt(data.streak, 10);
                limpo.streak = Number.isFinite(streak) && streak > 0 ? streak : 0;
            }

            if (Array.isArray(data.completedLessons)) {
                limpo.completedLessons = data.completedLessons.filter((id) => typeof id === 'string' && id);
            }

            if (Array.isArray(data.badges)) {
                limpo.badges = data.badges.filter((id) => typeof id === 'string' && id);
            }

            if (data.desempenho && typeof data.desempenho === 'object' && !Array.isArray(data.desempenho)) {
                limpo.desempenho = data.desempenho;
            }

            if (tem('progressoV2')) {
                limpo.progressoV2 = data.progressoV2 === true ||
                    data.progressoV2 === 'true' ||
                    data.progressoV2 === 'sim';
            }

            if (paraEscrita) {
                // R26: saveProgress reenvia o perfil lido (que traz rede e
                // municipio); eles não podem voltar na escrita.
                delete limpo.rede;
                delete limpo.municipio;
                // §5.10 / R29: matrícula em claro NUNCA vai ao documento (só
                // `matriculaHash`). Defesa em profundidade: mesmo que o
                // chamador reenvie o perfil lido de um doc legado, não sai.
                delete limpo.matricula;
            }

            return limpo;
        }

        /**
         * Monta o perfil em memória a partir do documento já sanitizado. O
         * e-mail nunca é lido do Firestore: vem do Auth.
         */
        _perfilPublico(uid, dados, firebaseUser) {
            const auth = firebaseUser || {};
            return {
                uid: uid,
                email: auth.email || dados.email || "",
                name: dados.name || auth.displayName || "Estudante",
                fullName: dados.fullName,
                photoURL: dados.photoURL || auth.photoURL || null,
                xp: typeof dados.xp === 'number' ? dados.xp : 0,
                serie: dados.serie || dados.turma || "EF06",
                turma: dados.turma,
                rede: dados.rede,
                municipio: dados.municipio,
                matricula: dados.matricula,
                matriculaHash: dados.matriculaHash,
                completedLessons: Array.isArray(dados.completedLessons) ? dados.completedLessons : [],
                // R24: sem isto o perfil reconstruído perde a flag e a
                // migração one-time volta a rodar a cada login.
                progressoV2: dados.progressoV2 === true,
                streak: typeof dados.streak === 'number' ? dados.streak : 0,
            };
        }

        /**
         * Carrega dados do usuário no Firestore ou cria perfil inicial
         * @param {string} uid ID do usuário
         * @param {Object} firebaseUser Objeto de usuário retornado pelo Auth
         */
        async loadUserData(uid, firebaseUser = null) {
            if (!this.initialized) throw new Error("Firebase Service não inicializado");

            const userRef = this.db.collection('users').doc(uid);
            const doc = await userRef.get();

            if (doc.exists) {
                // Leitura defensiva: documento legado pode trazer campos de
                // privilégio (role/isTeacher) que jamais viram estado do app.
                return this._perfilPublico(uid, this.sanitizeProfile(doc.data()), firebaseUser);
            }

            const novo = {
                uid: uid,
                email: firebaseUser ? firebaseUser.email : "",
                name: (firebaseUser && firebaseUser.displayName) ? firebaseUser.displayName : "Estudante",
                photoURL: firebaseUser ? firebaseUser.photoURL : null,
                xp: 0,
                serie: "EF06",
                completedLessons: [],
                streak: 0,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };
            await userRef.set(novo);
            return this._perfilPublico(uid, novo, firebaseUser);
        }

        /**
         * Persiste dados atualizados do usuário no Firestore com merge seguro
         * @param {string} uid ID do usuário
         * @param {Object} data Dados parciais a salvar
         */
        async saveUserData(uid, data) {
            if (!this.initialized || !uid) return false;
            try {
                // A allowlist roda antes do set: nada fora do perfil público
                // chega ao Firestore (falha 2 — escrita arbitrária). R26:
                // rede/municipio ficam de fora da escrita (só o servidor os define).
                const cleanData = this.sanitizeProfile(data, { paraEscrita: true });
                cleanData.updatedAt = firebase.firestore.FieldValue.serverTimestamp();

                await this.db.collection('users').doc(uid).set(cleanData, { merge: true });
                return true;
            } catch (err) {
                console.error("[FirebaseService] Falha ao salvar no Firestore:", err);
                return false;
            }
        }

        /**
         * Login com Provedor Google (Pop-up)
         */
        async loginWithGoogle() {
            if (!this.initialized) throw new Error("Firebase Service não disponível");
            const provider = new firebase.auth.GoogleAuthProvider();
            return await this.auth.signInWithPopup(provider);
        }

        /**
         * Login com E-mail e Senha
         */
        async loginWithEmail(email, password) {
            if (!this.initialized) throw new Error("Firebase Service não disponível");
            return await this.auth.signInWithEmailAndPassword(email, password);
        }

        /**
         * Cadastro com E-mail e Senha
         */
        async registerWithEmail(email, password) {
            if (!this.initialized) throw new Error("Firebase Service não disponível");
            return await this.auth.createUserWithEmailAndPassword(email, password);
        }

        /**
         * Realiza Logout
         */
        async logout() {
            if (this.initialized && this.auth) {
                await this.auth.signOut();
            }
            localStorage.removeItem('mathlingo_guest');
            console.log("🔥 [FirebaseService] Sessão encerrada.");
        }

        /**
         * Gera perfil temporário local para modo Visitante (Offline/Guest)
         */
        createGuestUser() {
            return {
                uid: 'guest_' + Date.now(),
                email: 'visitante@mathlingo.local',
                name: 'Visitante',
                photoURL: null,
                xp: 0,
                serie: 'Geral',
                completedLessons: [],
                streak: 0,
                isGuest: true
            };
        }
    }

    window.firebaseService = new FirebaseService();
})(window);

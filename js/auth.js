/**
 * JS/AUTH.JS
 * Gerencia a autenticação e dados.
 * Define a variável global 'auth'.
 */
var auth = {
    user: null, // Armazena usuário atual

    init: function () {
        if (typeof firebase === 'undefined' || !firebase.apps.length) {
            console.error("[Auth] SDK do Firebase ausente.");
            return;
        }

        firebase.auth().onAuthStateChanged(async (firebaseUser) => {
            let isLoggedIn = false;
            let userData = null;

            if (firebaseUser) {
                console.log("[Auth] Usuário detectado:", firebaseUser.email);
                try {
                    userData = await this.loadUserData(firebaseUser);
                    this.user = userData;
                    
                    // Sincroniza com o App
                    if (window.app) {
                        app.state.userProgress = userData;
                    }
                    if (window.game) {
                        game.syncProgress(userData); // Checa ofensiva
                    }

                    isLoggedIn = true;
                } catch (error) {
                    console.error("[Auth] Erro ao carregar perfil:", error);
                    this.logout();
                    return;
                }
            } else {
                console.log("[Auth] Nenhum usuário conectado.");
                this.user = null;
            }

            // Dispara evento para o App saber que mudou
            const event = new CustomEvent('auth-change', {
                detail: { user: userData, loggedIn: isLoggedIn }
            });
            window.dispatchEvent(event);
        });
    },

    login: function () {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                console.log("Google Login Sucesso:", result.user.email);
                // O onAuthStateChanged vai lidar com o resto
            })
            .catch(err => {
                console.error("[Auth] Erro Google:", err);
                alert("Erro ao conectar com Google: " + err.message);
            });
    },

    loginEmail: function (email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },

    registerEmail: async function (email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    },

    logout: function () {
        firebase.auth().signOut();
        localStorage.removeItem('mathlingo_guest');
        this.user = null;
        console.log("[Auth] Logout realizado.");
    },

    loadUserData: async function (firebaseUser) {
        const db = firebase.firestore();
        const userRef = db.collection('users').doc(firebaseUser.uid);
        const doc = await userRef.get();

        if (doc.exists) {
            const dadosBrutos = doc.data();
            // Normalização de dados antigos
            const serieNormalizada = dadosBrutos.serie || dadosBrutos.série || dadosBrutos.turma || "6º Ano EF";
            
            return {
                ...dadosBrutos,
                serie: serieNormalizada,
                uid: firebaseUser.uid
            };
        } else {
            // Cria novo usuário
            const newUser = {
                uid: firebaseUser.uid,
                email: firebaseUser.email,
                name: firebaseUser.displayName || "Estudante", // Padronizado para 'name'
                photoURL: firebaseUser.photoURL, // Padronizado para 'photoURL'
                xp: 0,
                serie: "6º Ano EF",
                completedLessons: [],
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };
            await userRef.set(newUser);
            return newUser;
        }
    },

    saveUserData: async function (data) {
        const currentUser = firebase.auth().currentUser;
        if (!currentUser) return;

        const realUid = currentUser.uid;
        try {
            const cleanData = JSON.parse(JSON.stringify(data));
            delete cleanData.isGuest; // Não salva flag de visitante
            cleanData.uid = realUid;
            
            await firebase.firestore().collection('users').doc(realUid).set(cleanData, { merge: true });
            this.user = cleanData;
        } catch (e) {
            console.error("[Auth] Erro ao salvar:", e);
        }
    }
};
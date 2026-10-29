/**
 * ============================================================================
 * AUTH.JS - CONTROLLER DE AUTENTICAÇÃO (MATHLINGO v3.5)
 * ============================================================================
 * Responsabilidade: Gerenciar eventos de autenticação, integrar FirebaseService
 * com o estado reativo (model.state) e notificar o app.
 */

/**
 * Papel efetivo da sessão (falha 1 / §5.10). Preenchido SÓ a partir das claims
 * do token (`getIdTokenResult()`): `role` e o recorte territorial
 * `rede`/`municipio` (R27). Sem claim o papel é 'aluno' — nunca "Professor"
 * por série e nunca o `role` do documento (que não é lido pelo perfil).
 * `null` significa "sessão ainda não resolvida" (pré-login/logout).
 */
var Session = {
    role: null
};

/**
 * Monta o objeto de sessão a partir das claims do token.
 * @param {Object} [firebaseUser] Usuário do Auth (se omitido, usa currentUser).
 * @returns {Promise<{role: string, rede: (string|null), municipio: (string|null)}>}
 */
async function resolverSessao(firebaseUser) {
    var conta = firebaseUser;
    if (!conta && typeof firebase !== 'undefined' && firebase.auth) {
        conta = firebase.auth().currentUser;
    }

    var claims = null;
    if (conta && typeof conta.getIdTokenResult === 'function') {
        try {
            var token = await conta.getIdTokenResult();
            claims = token && token.claims ? token.claims : null;
        } catch (erro) {
            console.warn("[Auth] Não foi possível ler as claims da sessão:", erro);
        }
    }

    var papelDaClaim = claims && typeof claims.role === 'string' ? claims.role : '';

    return {
        role: papelDaClaim || 'aluno',
        rede: (claims && claims.rede) || null,
        municipio: (claims && claims.municipio) || null
    };
}

var auth = {
    user: null,

    init: function () {
        if (typeof firebaseService === 'undefined') {
            console.error("[Auth] FirebaseService ausente.");
            return;
        }

        firebaseService.onAuthStateChanged(async (userData, loggedIn, firebaseUser) => {
            if (loggedIn && userData) {
                console.log("[Auth] Sessão ativa para:", userData.email || userData.name);
                this.user = userData;
                // Resolvido ANTES do dispatch de auth-change (que só acontece
                // depois deste await): o teacher.js reavalia a permissão já com
                // role/rede/municipio das claims, nunca com a sessão "vazia".
                Session.role = await resolverSessao(firebaseUser);

                if (window.model) {
                    model.setState({ userProgress: userData });
                }
                if (window.app) {
                    app.state.userProgress = userData;
                }
                if (window.game && typeof game.syncProgress === 'function') {
                    game.syncProgress(userData);
                }
            } else {
                console.log("[Auth] Nenhum usuário conectado via Firebase.");
                this.user = null;
                Session.role = null;
            }

            const event = new CustomEvent('auth-change', {
                detail: { user: this.user, loggedIn: Boolean(this.user), role: Session.role }
            });
            window.dispatchEvent(event);
        });
    },

    login: async function () {
        try {
            await firebaseService.loginWithGoogle();
        } catch (err) {
            console.error("[Auth] Erro ao logar com Google:", err);
            if (window.ui && ui.showToast) {
                ui.showToast("Erro ao conectar com Google: " + err.message, "error");
            }
        }
    },

    loginEmail: function (email, password) {
        return firebaseService.loginWithEmail(email, password);
    },

    registerEmail: function (email, password) {
        return firebaseService.registerWithEmail(email, password);
    },

    logout: async function () {
        await firebaseService.logout();
        this.user = null;
        Session.role = null;
        if (window.model) {
            model.setState({ userProgress: null });
        }
        if (window.app) {
            app.state.userProgress = null;
            app.navigate("login");
        }
    },

    saveUserData: async function (data) {
        if (!this.user || !this.user.uid) return;
        const success = await firebaseService.saveUserData(this.user.uid, data);
        if (success) {
            this.user = { ...this.user, ...data };
            if (window.model) {
                model.setState({ userProgress: this.user });
            }
        }
    }
};
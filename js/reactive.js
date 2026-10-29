/**
 * ============================================================================
 * REACTIVE.JS - MODEL & RECTIVE STATE MANAGEMENT (MATHLINGO v3.5)
 * ============================================================================
 * Responsabilidade: Armazenar o estado global reativo (model.state)
 * e notificar inscritos (listeners) quando ocorrerem mutações.
 */

(function (window) {
    'use strict';

    const LISTENERS = new Set();

    const initialState = {
        currentView: "loading",
        currentFilter: "Todos",
        currentSubject: null,
        currentMode: null,
        currentCourse: null,
        currentLevel: null,
        userProgress: null,
        authMode: 'login',
        arena: {
            activeQuestions: [],
            currentIndex: 0,
            score: 0,
            streak: 0
        },
        ui: {
            isLoading: false
        },
        settings: {
            soundEnabled: true,
            theme: 'light'
        }
    };

    // Handler de Proxy para Mutações Profundas
    function createReactiveProxy(target, notify) {
        return new Proxy(target, {
            get(obj, prop) {
                const val = Reflect.get(obj, prop);
                if (val !== null && typeof val === 'object' && !(val instanceof Date)) {
                    return createReactiveProxy(val, notify);
                }
                return val;
            },
            set(obj, prop, value) {
                const oldVal = obj[prop];
                if (oldVal === value) return true;
                const result = Reflect.set(obj, prop, value);
                notify(prop, value, oldVal);
                return result;
            }
        });
    }

    class ReactiveModel {
        constructor() {
            this._rawState = { ...initialState };
            this.state = createReactiveProxy(this._rawState, this._notify.bind(this));
        }

        /**
         * Inscreve uma função para escutar mudanças no estado global
         * @param {Function} callback (state, prop, value) => void
         * @returns {Function} Função para cancelar a inscrição (unsubscribe)
         */
        subscribe(callback) {
            if (typeof callback === 'function') {
                LISTENERS.add(callback);
            }
            return () => LISTENERS.delete(callback);
        }

        /**
         * Atualiza parcialmente o estado global de forma segura
         * @param {Object|Function} updater Objeto parcial ou função de atualização
         */
        setState(updater) {
            const updates = typeof updater === 'function' ? updater(this.state) : updater;
            if (updates && typeof updates === 'object') {
                Object.assign(this.state, updates);
            }
        }

        /**
         * Notifica todos os listeners sobre uma mutação de estado
         */
        _notify(prop, value, oldVal) {
            LISTENERS.forEach(listener => {
                try {
                    listener(this.state, prop, value, oldVal);
                } catch (err) {
                    console.error("[ReactiveModel] Erro em listener:", err);
                }
            });
        }
    }

    window.model = new ReactiveModel();
    console.log("⚡ [Model] Sistema de Estado Reativo inicializado com sucesso.");

})(window);

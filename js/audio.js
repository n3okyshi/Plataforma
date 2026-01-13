/**
 * ============================================================================
 * AUDIO.JS - ENGINE DE ÁUDIO PROCEDURAL (WEB AUDIO API)
 * ============================================================================
 * Sintetizador de efeitos sonoros em tempo real (No-Assets).
 * * ARQUITETURA DE SINAL:
 * [Oscillator] ----> [GainNode] ----> [Destination]
 * (Gera Onda)       (Envelope ADSR)   (Hardware)
 * |                   |
 * Frequency           Volume
 * (Hertz/Pitch)      (Amplitude)
 *
 * @author MathLingo Team
 * @version 1.2.0
 */

// 🎵 Constantes de Teoria Musical (Frequências em Hz)
const NOTES = {
    A4: 440.00,
    C5: 523.25, // Dó
    E5: 659.25, // Mi
    G5: 783.99, // Sol
    C6: 1046.50 // Dó (Oitava acima)
};

const audioManager = {
    ctx: null,
    muted: false,
    masterVolume: 0.15, // 15% (Baixo para não incomodar)

    // ========================================================================
    // 1. API DE CONTROLES
    // ========================================================================

    init: function () {
        // Recupera persistência
        const savedMute = localStorage.getItem('mathlingo_muted');
        if (savedMute !== null) this.muted = (savedMute === 'true');

        // Inicializa o contexto apenas se necessário (Singleton)
        if (!this.ctx) {
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (AudioContext) {
                    this.ctx = new AudioContext();
                    console.log("🔊 [Audio] Engine Web Audio API pronta.");
                }
            } catch (e) {
                console.warn("⚠️ [Audio] Navegador não suporta Web Audio API.");
            }
        }
    },

    /**
     * Toca um som pelo nome lógico.
     * @param {('success'|'error'|'finish'|'click'|'open_subject'|'open_unit'|'start_lesson')} soundName 
     */
    play: function (soundName) {
        if (this.muted || !this.ctx) return;
        this._resumeContext();

        const presets = {
            'success': () => this._playSuccess(),   // acerta questão
            'error': () => this._playError(),     // erra questão
            'finish': () => this._playFanfare(),   // termina o conteudo
            'click': () => this._playClick(),     // Som padrão de voltar/clique simples
            'open_subject': () => this._playPop(),   // Entrar na Matéria
            'open_unit': () => this._playSnap(),  // Selecionar Série/Ano
            'start_lesson': () => this._playStart()  // Entrar na Lição
        };

        if (presets[soundName]) {
            presets[soundName]();
        } else {
            console.warn(`[Audio] Preset não encontrado: ${soundName}`);
        }
    },

    toggleMute: function () {
        this.muted = !this.muted;
        localStorage.setItem('mathlingo_muted', this.muted);

        // Feedback auditivo imediato ao ligar o som
        if (!this.muted) this._playClick();

        return this.muted;
    },

    // ========================================================================
    // 2. ENGINE (SINTETIZADOR)
    // ========================================================================

    /**
     * Garante que o AudioContext esteja rodando (browsers pausam automaticamente).
     */
    _resumeContext: function () {
        if (this.ctx.state === "suspended") {
            this.ctx.resume().catch(err => console.error("[Audio] Falha ao resumir contexto:", err));
        }
    },

    /**
     * O Coração do sistema: Cria, configura e conecta os nós de áudio.
     * @param {Object} params - Parâmetros do som
     * @param {number} params.freqStart - Frequência inicial (Hz)
     * @param {number} [params.freqEnd] - Frequência final (para efeitos de slide/laser)
     * @param {string} [params.type='sine'] - Tipo de onda: 'sine', 'square', 'sawtooth', 'triangle'
     * @param {number} [params.duration=0.1] - Duração em segundos
     * @param {number} [params.startTime=0] - Atraso para tocar (sequenciamento)
     * @param {number} [params.vol=1] - Multiplicador de volume (0 a 1)
     */
    _createSound: function ({ freqStart, freqEnd = null, type = "sine", duration = 0.1, startTime = 0, vol = 1 }) {
        const t = this.ctx.currentTime + startTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // 1. Configuração do Timbre (Oscilador)
        osc.type = type;
        osc.frequency.setValueAtTime(freqStart, t);

        // Efeito Glissando (Slide de frequência)
        if (freqEnd) {
            // exponentialRamp soa mais "musical", linearRamp soa mais "eletrônico/game"
            osc.frequency.linearRampToValueAtTime(freqEnd, t + duration);
        }

        // 2. Configuração do Envelope (Gain / Volume)
        // Evita "pop" (clique) no início e fim do som
        const attackTime = 0.01;
        const releaseTime = 0.01;

        gain.gain.setValueAtTime(0, t); // Começa mudo
        gain.gain.linearRampToValueAtTime(this.masterVolume * vol, t + attackTime); // Ataque rápido
        gain.gain.exponentialRampToValueAtTime(0.001, t + duration - releaseTime); // Cai suavemente
        gain.gain.linearRampToValueAtTime(0, t + duration); // Garante silêncio total no fim

        // 3. Conexão e Execução
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + duration + 0.1); // +0.1s de margem para o Garbage Collector limpar
    },

    // ========================================================================
    // PRESETS DE SOM
    // ========================================================================

    // 1. POP (Suave e redondo) - Para entrar na Matéria
    _playPop: function () {
        this._createSound({
            freqStart: 400, freqEnd: 600,
            type: "sine", duration: 0.15, vol: 0.8
        });
    },

    // 2. SNAP (Curto e agudo) - Para selecionar Série
    _playSnap: function () {
        this._createSound({
            freqStart: 1200, freqEnd: 100, // Queda rápida de frequência
            type: "triangle", duration: 0.08, vol: 0.6
        });
    },

    // 3. START (Brilhante) - Para começar a lição
    _playStart: function () {
        this._createSound({ freqStart: NOTES.C5, type: "sine", duration: 0.2, startTime: 0, vol: 0.7 }); // Dó
        this._createSound({ freqStart: NOTES.G5, type: "sine", duration: 0.3, startTime: 0.08, vol: 0.7 }); // Sol
    },

    _playSuccess: function () {
        // Camada 1: O "Slide" (Sensação de subida/progresso)
        this._createSound({
            freqStart: 500, freqEnd: 1000,
            type: "sine", duration: 0.2
        });

        // Camada 2: O "Brilho" (Harmônico agudo)
        this._createSound({
            freqStart: 1200,
            type: "triangle", duration: 0.1, startTime: 0.05, vol: 0.6
        });
    },

    _playError: function () {
        // Onda Serra (Sawtooth) tem som "áspero", bom para erros
        this._createSound({
            freqStart: 180, freqEnd: 80,
            type: "sawtooth", duration: 0.25, vol: 0.8
        });
    },

    _playFanfare: function () {
        // Arpejo de Vitória (C Major)
        const tempo = 0.11; // Velocidade entre notas
        const sequence = [
            { note: NOTES.C5, type: 'triangle', vol: 1.0 },
            { note: NOTES.E5, type: 'triangle', vol: 1.0 },
            { note: NOTES.G5, type: 'triangle', vol: 1.0 },
            { note: NOTES.C6, type: 'sine', vol: 0.8, duration: 0.4 } // Nota final mais longa e pura
        ];

        sequence.forEach((item, index) => {
            this._createSound({
                freqStart: item.note,
                type: item.type,
                duration: item.duration || 0.2, // Padrão 0.2 se não definido
                startTime: index * tempo,
                vol: item.vol
            });
        });
    },

    _playClick: function () {
        // Curto e seco para feedback de UI
        this._createSound({
            freqStart: 800,
            type: "sine", duration: 0.04, vol: 0.5
        });
    }
};

// Exporta globalmente
window.audioManager = audioManager;
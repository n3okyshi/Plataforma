/**
 * ============================================================================
 * AUDIO.JS - ENGINE DE ÁUDIO PROCEDURAL (WEB AUDIO API) - v2.0
 * ============================================================================
 * Sintetizador de efeitos sonoros em tempo real (No-Assets).
 * * NOVIDADES v2.0:
 * - Gerador de Ruído Branco (Noise Buffer) para texturas.
 * - Sintetizador de Ambiente (Drone) para foco.
 * - Novos efeitos (Fogo, Level Up).
 */

// 🎵 Constantes de Teoria Musical (Frequências em Hz)
const NOTES = {
    // ========================================================================
    // 1. NOTAS SIMPLES (Para Melodias e SFX)
    // ========================================================================
    A4: 440.00, C5: 523.25, E5: 659.25, F5: 698.46, G5: 783.99,
    A5: 880.00, B5: 987.77, C6: 1046.50, D6: 1174.66, E6: 1318.51,

    // ========================================================================
    // 2. ACORDES LO-FI & JAZZ 
    // ========================================================================

    // --- VIBE: "Sonhadora / Nostalgia" (Major 7 & 9) ---
    // C Maj9 (C, E, G, B, D) - O "padrão ouro" do Lo-Fi
    CMaj9: [130.81, 261.63, 329.63, 392.00, 493.88],
    // Eb Maj9 (Eb, G, Bb, D, F) - Muito suave e aveludado
    EbMaj9: [155.56, 311.13, 392.00, 466.16, 587.33],
    // F Maj9 (F, A, C, E, G) - Clássico de anime/Ghibli
    FMaj9: [87.31, 174.61, 220.00, 261.63, 349.23],
    // Db Maj7 (Db, F, Ab, C) - Sonhador e etéreo
    DbMaj7: [138.59, 277.18, 349.23, 415.30, 523.25],
    // G Maj7 (G, B, D, F#) - Simples e feliz
    GMaj7: [98.00, 246.94, 293.66, 369.99, 587.33],

    // --- VIBE: "Mágica / Espacial" (Lydian / Maj7 #11) ---
    // C Maj7 #11 (C, E, B, F#) - Som de "flutuar no espaço"
    CMaj7s11: [130.81, 261.63, 329.63, 493.88, 739.99],
    // F Maj7 #11 (F, A, E, B) 
    FMaj7s11: [87.31, 174.61, 220.00, 329.63, 493.88],

    // --- VIBE: "Tristeza Urbana / Melancolia" (Minor 9 & 11) ---
    // A Min9 (A, C, E, G, B) - Melancolia pura
    Am9: [110.00, 261.63, 329.63, 392.00, 493.88],
    // D Min9 (D, F, A, C, E) - Triste e profundo
    Dm9: [146.83, 349.23, 440.00, 523.25, 659.25],
    // C Min9 (C, Eb, G, Bb, D) - Escuro e sério
    Cm9: [130.81, 311.13, 392.00, 466.16, 587.33],
    // F Min11 (F, Ab, Eb, G, Bb) - Neo-Soul moderno
    Fm11: [87.31, 207.65, 311.13, 392.00, 466.16],
    // E Min9 (E, G, B, D, F#) - Guitarra triste
    Em9: [82.41, 196.00, 246.94, 293.66, 369.99],
    // B Min9 (B, D, F#, A, C#)
    Bm9: [123.47, 293.66, 369.99, 440.00, 554.37],

    // --- VIBE: "Tensão / Preparação" (Dominantes Alterados) ---
    // E7 Alt (E, G#, D, F, C) - O ACORDE QUE VOCÊ PEDIU (Resolve em Am)
    E7alt: [82.41, 207.65, 293.66, 349.23, 523.25],
    // A7 Alt (A, C#, G, F) - Resolve em Dm
    A7alt: [110.00, 277.18, 392.00, 349.23, 554.37],
    // G13 (G, F, B, E) - Resolve em C
    G13: [98.00, 246.94, 349.23, 440.00, 659.25],
    // C7 (C, E, Bb, D) - Bluesy
    C7: [130.81, 261.63, 329.63, 466.16, 587.33],

    // --- VIBE: "Suspenso / Flutuante" (Sus4) ---
    // G7 sus4 (G, C, D, F) - Não é nem triste nem feliz, é "espera"
    Gsus4: [98.00, 261.63, 293.66, 349.23, 587.33],
    // D7 sus4 (D, G, A, C)
    Dsus4: [146.83, 392.00, 440.00, 523.25, 783.99],

    // --- VIBE: "Mistério / Noir" (Meio Diminuto) ---
    // Bm7b5 (Si, Ré, Fá, Lá) - O som de "Detetive Noir"
    Bm7b5: [123.47, 246.94, 293.66, 349.23, 440.00],
    // Dm7b5 (Ré, Fá, Lá b, Dó)
    Dm7b5: [146.83, 174.61, 207.65, 261.63, 523.25],
    // F#m7b5 (Fá#, Lá, Dó, Mi)
    Fsm7b5: [92.50, 220.00, 261.63, 329.63, 440.00],

    // Em9 (E, G, B, D, F#)
    Em9: [82.41, 196.00, 246.94, 293.66, 369.99],
    // Fm9 (F, Ab, C, Eb, G)
    Fm9: [87.31, 174.61, 207.65, 261.63, 349.23],
};

var audioManager = {
    ctx: null,
    muted: false,       // Mantido apenas para UI, mas ignorado no play()
    musicMuted: false,  // Controla APENAS a música
    masterVolume: 0.3,  // Volume Geral Equilibrado

    bgmNodes: [],
    currentTrack: null,
    isMusicPlaying: false,
    lofiInterval: null,

    tracks: {
        'focus_drone': 'Ambiente de Foco',
        'lofi_beat': 'Lo-Fi Study'
    },

    // ========================================================================
    // API DE CONTROLES
    // ========================================================================

    init: function () {
        const savedMusic = localStorage.getItem('mathlingo_music_muted');
        if (savedMusic !== null) this.musicMuted = (savedMusic === 'true');

        if (!this.ctx) {
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (AudioContext) {
                    this.ctx = new AudioContext();
                    console.log(`🔊 [Audio] Contexto: ${this.ctx.state}`);
                }
            } catch (e) {
                console.warn("⚠️ [Audio] API não suportada.");
            }
        }

        const unlockAudio = () => {
            if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume().then(() => {
                    console.log("🔊 [Audio] Contexto DESBLOQUEADO pelo usuário!");
                    // Se deveria estar tocando música, força o início agora
                    if (this.currentTrack && !this.musicMuted && !this.isMusicPlaying) {
                        this.playMusic(this.currentTrack);
                    }
                });
            }
            document.removeEventListener('click', unlockAudio);
            document.removeEventListener('touchstart', unlockAudio);
            document.removeEventListener('keydown', unlockAudio);
        };

        document.addEventListener('click', unlockAudio);
        document.addEventListener('touchstart', unlockAudio);
        document.addEventListener('keydown', unlockAudio);
    },

    // ========================================================================
    // SFX PLAYER (Efeitos Sonoros)
    // ========================================================================
    play: function (soundName) {
        if (!this.ctx) return;
        this._resumeContext();

        const presets = {
            'success': () => this._playSuccess(),
            'error': () => this._playError(),
            'finish': () => this._playFanfare(),
            'click': () => this._playClick(),
            'open_subject': () => this._playPop(),
            'open_unit': () => this._playSnap(),
            'start_lesson': () => this._playStart(),
            'fire': () => this._playStreakFire(),
            'level_up': () => this._playLevelUp(),
            'notification': () => this._playNotification()
        };
        if (presets[soundName]) presets[soundName]();
    },

    // Controle da Música (Jukebox)
    toggleMusic: function () {
        this._resumeContext();
        this.musicMuted = !this.musicMuted;
        localStorage.setItem('mathlingo_music_muted', this.musicMuted);

        if (this.musicMuted) this.stopMusic();
        else {
            const track = this.currentTrack || 'focus_drone';
            this.playMusic(track);
        }
        return this.musicMuted;
    },

    // Toggle para Efeitos (Configurações Gerais)
    toggleMute: function () {
        this._resumeContext();
        this.muted = !this.muted;
        // Não salvamos mais isso para bloquear o play, é apenas visual agora
        if (!this.muted) this._playClick();
        return this.muted;
    },

    // ========================================================================
    // SISTEMA DE MÚSICA DE FUNDO (BGM / JUKEBOX)
    // ========================================================================

    /**
     * Toca uma faixa de música em loop.
     * Se já estiver tocando a mesma, não faz nada (persiste).
     * Se for outra, troca.
     */

    playMusic: function (trackKey = 'focus_drone') {
        if (this.musicMuted || !this.ctx) return;

        // Verifica se o áudio está pronto. Se não, marca qual musica tocar quando desbloquear
        if (this.ctx.state === 'suspended') {
            console.warn("🔊 [Jukebox] Áudio suspenso. Aguardando interação...");
            this.currentTrack = trackKey;
            return;
        }

        if (this.isMusicPlaying && this.currentTrack === trackKey) return;

        this.stopMusic();
        this.currentTrack = trackKey;
        this.isMusicPlaying = true;

        console.log(`🎵 [Jukebox] Iniciando: ${trackKey}`);

        if (trackKey === 'focus_drone') {
            this._startDrone();
        } else if (trackKey === 'lofi_beat') {
            this._startLofi();
        }
    },

    stopMusic: function () {
        // Para nós de áudio contínuos (Drone / Vinyl Crackle)
        if (this.bgmNodes.length > 0) {
            const nodes = this.bgmNodes;
            const t = this.ctx.currentTime;

            const masterGain = nodes[nodes.length - 1];
            if (masterGain && masterGain.gain) {
                masterGain.gain.setTargetAtTime(0, t, 0.5);
            }

            setTimeout(() => {
                nodes.forEach(n => {
                    try { n.stop(); } catch (e) { }
                    try { n.disconnect(); } catch (e) { }
                });
            }, 1000);
            this.bgmNodes = [];
        }

        // Para o Sequenciador Lo-Fi (O Loop de bateria)
        if (this.lofiInterval) {
            clearInterval(this.lofiInterval);
            this.lofiInterval = null;
        }

        this.isMusicPlaying = false;
    },
    // ========================================================================
    // PRÓXIMA FAIXA
    // ========================================================================
    nextTrack: function () {
        this._resumeContext();

        // 1. Se a música estiver mutada, desmuta automaticamente para o usuário ouvir a troca
        if (this.musicMuted) {
            this.toggleMusic();
        }

        // 2. Pega as chaves (IDs) das músicas: ['focus_drone', 'lofi_beat']
        const trackKeys = Object.keys(this.tracks);

        // 3. Acha o índice atual
        let currentIndex = trackKeys.indexOf(this.currentTrack);
        if (currentIndex === -1) currentIndex = 0; // Se não tiver nada, começa do 0

        // 4. Calcula o próximo (Loop infinito usando módulo %)
        const nextIndex = (currentIndex + 1) % trackKeys.length;
        const nextKey = trackKeys[nextIndex];

        // 5. Toca
        this.playMusic(nextKey);

        // Retorna o nome bonito para a UI mostrar no Toast
        return this.tracks[nextKey];
    },
    // ------------------------------------------------------------------------
    // FAIXA 1: DRONE (Binaural)
    // ------------------------------------------------------------------------
    _startDrone: function () {
        const t = this.ctx.currentTime;
        const baseFreq = 220; // Lá 3

        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.value = baseFreq;

        osc2.type = 'sine';
        osc2.frequency.value = baseFreq + 2; // Batimento de 2Hz (Ondas Delta/Theta)

        // Configuração de Volume (Fade In)
        gain.gain.value = 0;
        gain.gain.setTargetAtTime(0.02, t, 3); // Volume baixíssimo (ambiente)

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.ctx.destination);

        osc1.start();
        osc2.start();

        // Salva referência para poder parar depois
        this.bgmNodes = [osc1, osc2, gain];
    },

    // ------------------------------------------------------------------------
    // FAIXA 2: LO-FI STUDY (Beat Procedural)
    // ------------------------------------------------------------------------
    _startLofi: function () {
        // 1. Ruído de Vinil (Fundo)
        this._createVinylNoise();

        // 2. Sequenciador (BPM: 80)
        // Um compasso 4/4 a 80 BPM dura 3000ms.
        // Vamos tocar acordes e bateria em loop.

        let step = 0;
        const beatFunction = () => {
            if (!this.isMusicPlaying) return;

            const now = this.ctx.currentTime;

            // --- BATERIA (Kick e Snare simples) ---
            // Kick no tempo 1 e syncopado
            this._playLofiKick(now);
            if (Math.random() > 0.5) this._playLofiKick(now + 1.5); // Kick extra as vezes

            // Snare/Clap no tempo 2 e 4 (simulado delay de 0.75s e 2.25s)
            this._playLofiSnare(now + 0.75);
            this._playLofiSnare(now + 2.25);

            // Hi-Hats aleatórios (Jazz feel)
            for (let i = 0; i < 8; i++) {
                if (Math.random() > 0.3) this._playLofiHat(now + (i * 0.375));
            }

            // --- HARMONIA (Piano Elétrico) ---
            // A música está aqui
            // Troca de acordes a cada loop
            const chords = [
                // BLOCO 1: A Base (Movimento suave)
                NOTES.Am9,      // Lá Menor 9 (Início melancólico)
                NOTES.Em9,      // Mi Menor 9 (Variação suave descendo)
                NOTES.FMaj9,    // Fá Maior 9 (Abre o som)
                NOTES.CMaj9,    // Dó Maior 9 (Resolução temporária)

                // BLOCO 2: A Preparação (O trecho que você gostou)
                NOTES.Dm9,      // Ré Menor 9 (Prepara a subida)
                NOTES.Dm9,      // (Sustenta levemente o balanço)
                NOTES.Gsus4,    // Sol Suspenso (A tensão "bonita")
                NOTES.G13,      // Sol 13 (A resolução jazzística)

                // BLOCO 3: A Ponte (Correção do CMaj7s11)
                NOTES.CMaj9,    // Dó Maior 9 (Volta para casa)
                NOTES.Em9,      // Mi Menor 9 (Ponte descendente)
                NOTES.FMaj9,    // Fá Maior 9 (O ACORDE CORINGA: Tem F, C, E, G)
                NOTES.Fm9,      // Fá Menor 9 (O "Bleeding Heart" - clássico do Lo-Fi)

                // BLOCO 4: O Retorno (Tensão Final)
                NOTES.Bm7b5,    // Si Meio-Diminuto (Escurece)
                NOTES.Bm7b5,    // (Prepara o salto)
                NOTES.E7alt,    // Mi 7 Alterado (Tensão máxima...)
                NOTES.E7alt     // (...puxando de volta para o Am9 do início)
            ];
            const currentChord = chords[step % chords.length];

            // Toca as notas do acorde com leve atraso (strumming)
            currentChord.forEach((freq, i) => {
                this._playRhodesNote(freq, now + (i * 0.05));
            });

            step++;
        };

        // Executa imediatamente e depois repete a cada 3 segundos (1 compasso)
        beatFunction();
        this.lofiInterval = setInterval(beatFunction, 3000);
    },

    // --- Instrumentos do Lo-Fi ---

    _createVinylNoise: function () {
        // Ruído rosa filtrado para parecer chiado de disco
        const bufferSize = this.ctx.sampleRate * 2; // 2 segundos de buffer em loop
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.1; // Volume bem baixo
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 800; // Abafa o chiado

        const gain = this.ctx.createGain();
        gain.gain.value = 0.03; // Volume de textura

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start();

        // Adiciona aos nós para poder parar depois
        this.bgmNodes.push(noise, filter, gain);
    },

    _playLofiKick: function (time) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.frequency.setValueAtTime(150, time);
        osc.frequency.exponentialRampToValueAtTime(50, time + 0.1);
        gain.gain.setValueAtTime(0.5, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.4);

        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(time); osc.stop(time + 0.4);
    },

    _playLofiSnare: function (time) {
        // Snare feito de ruído filtrado
        this._createNoise({ duration: 0.15, startTime: time - this.ctx.currentTime, vol: 0.3, filterFreq: 1500 });
    },

    _playLofiHat: function (time) {
        // Hi-hat curto e agudo
        this._createNoise({ duration: 0.05, startTime: time - this.ctx.currentTime, vol: 0.1, filterFreq: 8000 });
    },

    _playRhodesNote: function (freq, time) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // Timbre de Rhodes (Triângulo suave)
        osc.type = 'triangle';
        osc.frequency.value = freq;

        // Envelope suave (sem ataque brusco)
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.05, time + 0.1); // Volume baixo para acordes
        gain.gain.exponentialRampToValueAtTime(0.001, time + 2.5); // Sustain longo

        // Vibrato suave (LFO)
        const lfo = this.ctx.createOscillator();
        lfo.frequency.value = 4; // 4Hz
        const lfoGain = this.ctx.createGain();
        lfoGain.gain.value = 2; // Intensidade do vibrato
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start(time);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(time);
        osc.stop(time + 3);
    },

    // ========================================================================
    // ENGINE (SINTETIZADOR)
    // ========================================================================

    _resumeContext: function () {
        if (this.ctx && this.ctx.state === "suspended") {
            this.ctx.resume().catch(err => console.error("[Audio] Falha ao resumir contexto:", err));
        }
    },

    _createSound: function ({ freqStart, freqEnd = null, type = "sine", duration = 0.1, startTime = 0, vol = 1 }) {
        if (!this.ctx) return;
        const t = this.ctx.currentTime + startTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freqStart, t);

        if (freqEnd) {
            osc.frequency.exponentialRampToValueAtTime(freqEnd, t + duration); // Mudei para exponential para soar mais natural
        }

        const attackTime = 0.01;
        const releaseTime = 0.01;

        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.masterVolume * vol, t + attackTime);
        gain.gain.exponentialRampToValueAtTime(0.001, t + duration - releaseTime);
        gain.gain.linearRampToValueAtTime(0, t + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + duration + 0.1);
    },

    // Gerador de Ruído Branco (White Noise)
    // Usado para criar sons de percussão, vento e fogo
    _createNoise: function ({ duration = 0.2, startTime = 0, vol = 0.5, filterFreq = 1000 }) {
        if (!this.ctx) return;
        const t = this.ctx.currentTime + startTime;

        // Cria buffer de ruído
        const bufferSize = this.ctx.sampleRate * duration;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        // Filtro (Lowpass) para deixar o som menos "chiado de TV" e mais "fogo/vento"
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = filterFreq;

        const gain = this.ctx.createGain();

        // Envelope ADSR simples
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.masterVolume * vol, t + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        noise.start(t);
    },

    // ========================================================================
    // 3. AMBIENTE E DRONES (BETA)
    // ========================================================================

    // Toca um som contínuo para estudo (Ondas Binaurais simuladas)
    playAmbient: function () {
        if (this.muted || !this.ctx || this.activeAmbientNodes.length > 0) return;
        this._resumeContext();

        const t = this.ctx.currentTime;
        const baseFreq = 220; // Lá 3

        // Cria 2 osciladores levemente desafinados para criar efeito de "beat"
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.value = baseFreq;

        osc2.type = 'sine';
        osc2.frequency.value = baseFreq + 2; // +2Hz de diferença cria pulsação lenta

        gain.gain.value = 0; // Começa mudo e sobe (Fade in)
        gain.gain.setTargetAtTime(0.02, t, 2); // Volume MUITO baixo (fundo)

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.ctx.destination);

        osc1.start();
        osc2.start();

        this.activeAmbientNodes = [osc1, osc2, gain];
        console.log("🔊 [Audio] Ambiente iniciado.");
    },

    stopAmbient: function () {
        if (this.activeAmbientNodes.length > 0) {
            const [osc1, osc2, gain] = this.activeAmbientNodes;
            const t = this.ctx.currentTime;

            // Fade out
            gain.gain.setTargetAtTime(0, t, 0.5);

            setTimeout(() => {
                try {
                    osc1.stop();
                    osc2.stop();
                    osc1.disconnect();
                    osc2.disconnect();
                } catch (e) { } // Ignora erro se já parou
                this.activeAmbientNodes = [];
            }, 1000);
        }
    },

    // ========================================================================
    // 4. PRESETS DE SOM
    // ========================================================================

    _playPop: function () {
        this._createSound({ freqStart: 400, freqEnd: 600, type: "sine", duration: 0.15, vol: 0.8 });
    },

    _playSnap: function () {
        this._createSound({ freqStart: 1200, freqEnd: 100, type: "triangle", duration: 0.08, vol: 0.6 });
    },

    _playStart: function () {
        this._createSound({ freqStart: NOTES.C5, type: "sine", duration: 0.2, startTime: 0, vol: 0.7 });
        this._createSound({ freqStart: NOTES.G5, type: "sine", duration: 0.3, startTime: 0.08, vol: 0.7 });
    },

    _playSuccess: function () {
        this._createSound({ freqStart: 500, freqEnd: 1000, type: "sine", duration: 0.2 });
        this._createSound({ freqStart: 1200, type: "triangle", duration: 0.1, startTime: 0.05, vol: 0.6 });
    },

    _playError: function () {
        this._createSound({ freqStart: 180, freqEnd: 80, type: "sawtooth", duration: 0.25, vol: 0.8 });
    },

    _playFanfare: function () {
        const tempo = 0.11;
        [
            { n: NOTES.C5 }, { n: NOTES.E5 }, { n: NOTES.G5 },
            { n: NOTES.C6, d: 0.4 }
        ].forEach((item, i) => {
            this._createSound({
                freqStart: item.n, type: i === 3 ? 'sine' : 'triangle',
                duration: item.d || 0.2, startTime: i * tempo, vol: 0.9
            });
        });
    },

    _playClick: function () {
        this._createSound({ freqStart: 800, type: "sine", duration: 0.04, vol: 0.5 });
    },

    // Som de Fogo/Streak (Mistura ruído com tom grave)
    _playStreakFire: function () {
        // Parte do vento/fogo (Noise)
        this._createNoise({ duration: 0.6, vol: 0.8, filterFreq: 500 });

        // Parte do impacto grave
        this._createSound({
            freqStart: 150, freqEnd: 50,
            type: "triangle", duration: 0.4, vol: 0.7
        });

        // Brilho final
        this._createSound({
            freqStart: 800, freqEnd: 1200,
            type: "sine", duration: 0.2, startTime: 0.1, vol: 0.3
        });
    },

    // Level Up (Acorde Maior com 7ª)
    _playLevelUp: function () {
        const tempo = 0.08;
        const notes = [NOTES.C5, NOTES.E5, NOTES.G5, NOTES.B5, NOTES.C6];

        notes.forEach((note, i) => {
            this._createSound({
                freqStart: note,
                type: "square", // Square soa "retro/8-bit"
                duration: 0.3,
                startTime: i * tempo,
                vol: 0.4
            });
        });

        // Brilho final sustentado
        this._createSound({
            freqStart: NOTES.C6, type: "sine", duration: 0.8, startTime: notes.length * tempo, vol: 0.6
        });
    },

    // Notificação simples
    _playNotification: function () {
        this._createSound({ freqStart: 500, type: "sine", duration: 0.1, vol: 0.5 });
        this._createSound({ freqStart: 1000, type: "sine", duration: 0.1, startTime: 0.1, vol: 0.5 });
    }
};

// Exporta globalmente
window.audioManager = audioManager;
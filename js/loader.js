/**
 * ============================================================================
 * LOADER.JS (VERSÃO 3.0 - MULTI-SÉRIE)
 * ============================================================================
 */

(function () {
    const VERSION = "0.0.12";
    const MAX_RETRIES = 3;

    /**
     * Escapa texto antes de interpolar em innerHTML. A tela de falha fatal é
     * montada antes das views carregarem, então precisa do helper local
     * (falha 6 — XSS na tela de erro).
     */
    function escaparHTML(valor) {
        return String(valor === null || valor === undefined ? '' : valor)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    console.time("⏱️ Tempo de Carregamento");

    // 1. Definições de Disciplinas e suas Abrangências
    // A lista cobre as 17 siglas de data/base/componentes.json (R10). O flag
    // `fundamental` descreve o componente; ele NÃO decide o carregamento da
    // teoria (content/* é sempre sob demanda, Task 6).
    const configDisciplinas = {
        "art": { nome: "Arte", fundamental: true },
        "ast": { nome: "Astronomia", fundamental: false },
        "bio": { nome: "Biologia", fundamental: false },
        "cna": { nome: "Ciências Naturais", fundamental: true },
        "edf": { nome: "Educação Física", fundamental: true },
        "fil": { nome: "Filosofia", fundamental: false },
        "fis": { nome: "Física", fundamental: false },
        "gea": { nome: "Geografia", fundamental: true },
        "geo": { nome: "Geologia", fundamental: false },
        "his": { nome: "História", fundamental: true },
        "lie": { nome: "Língua Inglesa", fundamental: true },
        "lip": { nome: "Língua Portuguesa", fundamental: true },
        "mat": { nome: "Matemática", fundamental: true },
        "qui": { nome: "Química", fundamental: false },
        "soc": { nome: "Sociologia", fundamental: false },
        "red": { nome: "Redação", fundamental: false }, // Caso queira tratar como EM apenas
        "superior": { nome: "Ensino Superior", fundamental: false }
    };

    function updateStatus(msg) {
        const el = document.querySelector('.loading-text');
        if (el) el.innerText = msg;
        console.log(`🔄 ${msg}`);
    }

    function carregarScript(url, opcional = false, tentativa = 1) {
        return new Promise((resolve, reject) => {
            const urlComVersao = `${url}?v=${VERSION}`;
            const script = document.createElement('script');
            script.src = urlComVersao;
            script.async = false;

            script.onload = () => resolve(url);
            script.onerror = () => {
                if (opcional) {
                    console.warn(`[Loader] Opcional pulado: ${url}`);
                    resolve(null);
                } else if (tentativa < MAX_RETRIES) {
                    setTimeout(() => carregarScript(url, opcional, tentativa + 1).then(resolve).catch(reject), 500);
                } else {
                    reject(url);
                }
            };
            document.head.appendChild(script);
        });
    }

    // =================================================================
    // 2. Conteúdo Sob Demanda (Task 6)
    //    Só a teoria (content/*) é lazy: currículo e arena continuam no boot.
    // =================================================================

    // R3: código de etapa -> sufixo do arquivo (EF06 -> "6", EM01 -> "1em").
    const LIMITES_POR_ETAPA = { EI: 3, EF: 9, EM: 3 };
    const SUFIXO_R3 = /^(?:[1-9]|[1-3]em|[1-3]ei)$/;

    function sufixoDe(codigo) {
        const achado = /^(EI|EF|EM)(\d{2})$/.exec(typeof codigo === 'string' ? codigo : '');
        if (!achado) return null;
        const etapa = achado[1];
        const numero = Number(achado[2]);
        if (numero < 1 || numero > LIMITES_POR_ETAPA[etapa]) return null;
        return etapa === 'EF' ? String(numero) : `${numero}${etapa.toLowerCase()}`;
    }

    // Mapa reverso nome do componente ("Matemática") -> sigla ("mat").
    const siglaPorComponente = {};
    Object.keys(configDisciplinas).forEach(sigla => {
        siglaPorComponente[configDisciplinas[sigla].nome] = sigla;
    });

    function siglaDoComponente(nome) {
        return Object.prototype.hasOwnProperty.call(siglaPorComponente, nome)
            ? siglaPorComponente[nome]
            : null;
    }

    // Idempotência: biblioteca de chunks já pedidos e o resultado de cada um.
    const conteudosTentados = new Set();
    const carregamentosDeConteudo = new Map();

    /**
     * Garante content/<sigla>/<sigla><sufixo>_content.js carregado.
     * Resolve true se o arquivo entrou, false se está ausente (ou entrada
     * inválida). Nunca rejeita; a 2ª chamada reusa o resultado sem reinjetar.
     */
    function carregarConteudo(sigla, sufixo) {
        const siglaValida = typeof sigla === 'string'
            && Object.prototype.hasOwnProperty.call(configDisciplinas, sigla);
        if (!siglaValida || !SUFIXO_R3.test(typeof sufixo === 'string' ? sufixo : '')) {
            return Promise.resolve(false);
        }

        const caminho = `content/${sigla}/${sigla}${sufixo}_content.js`;
        if (conteudosTentados.has(caminho)) {
            return carregamentosDeConteudo.get(caminho) || Promise.resolve(false);
        }
        conteudosTentados.add(caminho);

        // `opcional = true`: arquivo ausente não retenta nem derruba o boot.
        const carregamento = carregarScript(caminho, true)
            .then(urlCarregada => urlCarregada !== null) // carregarScript resolve null quando falta
            .catch(() => false);                          // nunca rejeita para quem chamou

        carregamentosDeConteudo.set(caminho, carregamento);
        return carregamento;
    }

    window.sufixoDe = sufixoDe;
    window.siglaDoComponente = siglaDoComponente;
    window.carregarConteudo = carregarConteudo;

    // =================================================================
    // 3. Monta Lista Dinâmica do que carrega no boot
    // =================================================================
    const scriptsDeConteudo = [];

    Object.keys(configDisciplinas).forEach(sigla => {
        // 3.1 Curriculum e Arena (sempre eager)
        // Adaptado se você tiver arquivos de currículo separados por série,
        // caso contrário, mantém a carga única da disciplina
        scriptsDeConteudo.push(`curriculum/${sigla}_curriculum.js`);
        scriptsDeConteudo.push(`arena/${sigla}_arena.js`);
    });

    // 3.2 A teoria (chunks por componente + série) NÃO entra no boot:
    //     é carregada por carregarConteudo() na navegação (Task 6).

    // =================================================================
    // 4. PIPELINE DE EXECUÇÃO
    // =================================================================

    updateStatus("Inicializando sistema...");

    carregarScript("js/config.js")
        .then(() => carregarScript("js/reactive.js"))
        .then(() => carregarScript("js/firebase-service.js"))
        .then(() => carregarScript("js/registry.js"))

        .then(() => {
            updateStatus("Carregando interface...");
            return carregarScript("js/views/core.js");
        })
        .then(() => {
            const viewModules = [
                "js/views/auth.js", "js/views/home.js", "js/views/map.js",
                "js/views/lesson.js", "js/views/arena.js", "js/views/profile.js", "js/views/teacher.js"
            ];
            return Promise.all(viewModules.map(url => carregarScript(url)));
        })

        .then(() => {
            updateStatus("Sincronizando lições...");
            // Se o arquivo mat4_content.js não existir ainda, o app não trava.
            return Promise.all(scriptsDeConteudo.map(url => carregarScript(url, true)));
        })

        .then(() => {
            updateStatus("Preparando motores...");
            return carregarScript("js/ui.js")
                .then(() => carregarScript("js/fila-resultados.js"))
                .then(() => carregarScript("js/pratica.js"))
                .then(() => carregarScript("js/badges.js"))
                .then(() => carregarScript("js/game.js"))
                .then(() => carregarScript("js/audio.js"))
                .then(() => carregarScript("js/auth.js"))
                .then(() => carregarScript("js/arena.js"))
                .then(() => carregarScript("js/teacher.js"));
        })

        .then(() => {
            updateStatus("Finalizando...");
            return carregarScript("js/app.js");
        })

        .then(() => {
            console.log("🔥 [Loader] Pronto!");
            console.timeEnd("⏱️ Tempo de Carregamento");
            if (window.app?.init) window.app.init();
        })
        .catch(erro => {
            console.error("🚨 [Loader] Falha fatal:", erro);
            document.body.innerHTML = `
                <div class="fixed inset-0 bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4 text-center font-sans">
                    <div class="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl max-w-md w-full border-b-8 border-red-500">
                        <div class="text-6xl mb-4">😿</div>
                        <h1 class="text-2xl font-black text-red-500 mb-2 uppercase">Erro de Carga</h1>
                        <p class="text-gray-600 dark:text-gray-300 mb-4">Falha ao carregar componente: <br><code class="text-xs">${escaparHTML(erro)}</code></p>
                        <button onclick="location.reload(true)" class="w-full bg-brand-blue text-white font-bold py-3 rounded-xl shadow-lg">Tentar Novamente</button>
                    </div>
                </div>`;
        });
})();

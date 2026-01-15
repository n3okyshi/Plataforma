/**
 * ============================================================================
 * LOADER.JS (VERSÃO 3.0 - MULTI-SÉRIE)
 * ============================================================================
 */

(function () {
    const VERSION = "0.0.2"; 
    const MAX_RETRIES = 3;   
    
    console.time("⏱️ Tempo de Carregamento");

    // 1. Definições de Disciplinas e suas Abrangências
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
        "red": { nome: "Redação", fundamental: false } // Caso queira tratar como EM apenas
    };

    // Séries possíveis
    const seriesFund = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const seriesMedio = ["1em", "2em", "3em"];

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

    // 2. Monta Lista Dinâmica de Conteúdos
    const scriptsDeConteudo = [];

    Object.keys(configDisciplinas).forEach(sigla => {
        const info = configDisciplinas[sigla];
        
        // 2.1 Curriculum e Arena (Sempre carregam)
        // Adaptado se você tiver arquivos de currículo separados por série, 
        // caso contrário, mantém a carga única da disciplina
        scriptsDeConteudo.push(`curriculum/${sigla}_curriculum.js`);
        scriptsDeConteudo.push(`arena/${sigla}_arena.js`);

        // 2.2 Content (Pasta por disciplina + arquivos por série)
        const seriesAlvo = info.fundamental ? [...seriesFund, ...seriesMedio] : seriesMedio;

        seriesAlvo.forEach(serie => {
            // Caminho: content/mat/mat6_content.js
            scriptsDeConteudo.push(`content/${sigla}/${sigla}${serie}_content.js`);
        });
    });

    // =================================================================
    // 3. PIPELINE DE EXECUÇÃO
    // =================================================================

    updateStatus("Inicializando sistema...");

    carregarScript("js/config.js")
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
                        <p class="text-gray-600 dark:text-gray-300 mb-4">Falha ao carregar componente: <br><code class="text-xs">${erro}</code></p>
                        <button onclick="location.reload(true)" class="w-full bg-brand-blue text-white font-bold py-3 rounded-xl shadow-lg">Tentar Novamente</button>
                    </div>
                </div>`;
        });
})();
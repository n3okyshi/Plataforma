/**
 * LOADER.JS (CORRIGIDO)
 * Ordem Correta: Config -> Registry -> Conteúdo -> App
 */

(function () {
    // 1. Definições
    const prefixos = [
        "art", "ast", "bio", "cna", "edf", "fil", "fis", "gea",
        "geo", "his", "lie", "lip", "mat", "qui", "red", "soc", "superior"
    ];

    const distribuicaoNiveis = {
        FI: ["art", "cna", "edf", "gea", "his", "lip", "mat"],
        FII: ["art", "cna", "edf", "gea", "his", "lie", "lip", "mat"],
        EM: ["art", "ast", "bio", "edf", "fil", "fis", "gea", "geo", "his", "lie", "lip", "mat", "qui", "soc"]
    };

    const excecoes = ["red", "superior"];

    // Função auxiliar para carregar script e avisar erros sem travar tudo
    function carregarScript(url, opcional = false) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.async = false; // Garante execução síncrona
            script.onload = () => resolve(url);
            script.onerror = () => {
                if (opcional) {
                    console.warn(`[Loader] Arquivo opcional pulado: ${url}`);
                    resolve(null); // Resolve mesmo com erro para não travar a fila
                } else {
                    console.error(`[Loader] ERRO CRÍTICO: Falha ao carregar ${url}`);
                    reject(url);
                }
            };
            document.body.appendChild(script);
        });
    }

    // 2. Monta lista de conteúdos
    const scriptsDeConteudo = [];
    prefixos.forEach(prefixo => {
        scriptsDeConteudo.push(`curriculum/${prefixo}_curriculum.js`);
        scriptsDeConteudo.push(`arena/${prefixo}_arena.js`);

        if (excecoes.includes(prefixo)) {
            scriptsDeConteudo.push(`content/${prefixo}/${prefixo}_content.js`);
        } else {
            if (distribuicaoNiveis.FI.includes(prefixo)) scriptsDeConteudo.push(`content/${prefixo}/${prefixo}_content_FI.js`);
            if (distribuicaoNiveis.FII.includes(prefixo)) scriptsDeConteudo.push(`content/${prefixo}/${prefixo}_content_FII.js`);
            if (distribuicaoNiveis.EM.includes(prefixo)) scriptsDeConteudo.push(`content/${prefixo}/${prefixo}_content_EM.js`);
        }
    });

    console.log("[Loader] Iniciando sequência de boot...");

    // =================================================================
    // 3. O FLUXO DE CARREGAMENTO (PIPELINE)
    // =================================================================

    // PASSO 1: Configuração e Registro
    carregarScript("js/config.js")
        .then(() => carregarScript("js/registry.js"))

        // PASSO 2: Views (Essencial para corrigir o erro 'views is not defined')
        .then(() => {
            console.log("🎨 [Loader] Carregando sistema visual...");
            // Primeiro cria o objeto window.views
            return carregarScript("js/views/core.js");
        })
        .then(() => {
            // Depois carrega os módulos que usam window.views
            const viewModules = [
                "js/views/core.js",
                "js/views/auth.js",
                "js/views/home.js",
                "js/views/map.js",
                "js/views/lesson.js",
                "js/views/arena.js",
                "js/views/profile.js",
                "js/views/teacher.js"
            ];
            return Promise.all(viewModules.map(url => carregarScript(url)));
        })

        // PASSO 3: Conteúdo (Dados)
        .then(() => {
            console.log("📚 [Loader] Carregando conteúdo pedagógico...");
            // Carrega scripts de conteúdo (opcionais, se um falhar o app continua)
            return Promise.all(scriptsDeConteudo.map(url => carregarScript(url, true)));
        })

        // PASSO 4: Módulos Funcionais
        .then(() => {
            console.log("⚙️ [Loader] Iniciando motores...");
            // Carrega sequencialmente para garantir dependências
            return carregarScript("js/ui.js")
                .then(() => carregarScript("js/game.js"))
                .then(() => carregarScript("js/audio.js"))
                .then(() => carregarScript("js/auth.js"))
                //.then(() => carregarScript("js/chat.js"))
                .then(() => carregarScript("js/arena.js"))
                .then(() => carregarScript("js/teacher.js"));
        })

        // PASSO 5: O Aplicativo
        .then(() => {
            if (typeof window.views === 'undefined') {
                throw new Error("O objeto 'views' não foi criado.");
            }
            console.log("🚀 [Loader] Arquivos carregados. Baixando App...");
            return carregarScript("js/app.js");
        })

        // PASSO 6: A IGNIÇÃO (IMPORTANTE!)
        .then(() => {
            console.log("🔥 [Loader] Inicializando MathLingo...");

            if (window.app && typeof window.app.init === 'function') {
                window.app.init(); // <--- AQUI ESTÁ O PULO DO GATO
            } else {
                throw new Error("O objeto 'app' ou a função 'init' não foram encontrados.");
            }
        })

        // TRATAMENTO DE ERRO GERAL
        .catch(erro => {
            console.error("🚨 [Loader] Falha fatal na inicialização:", erro);
            document.body.innerHTML = `
                <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; background:#f0f0f0; color:#333; font-family:sans-serif; text-align:center;">
                    <h1 style="color:red; margin-bottom:10px;">Erro de Carregamento</h1>
                    <p>Um arquivo essencial do sistema falhou ao carregar.</p>
                    <code style="background:#ddd; padding:5px; border-radius:4px;">${erro}</code>
                    <button onclick="location.reload()" style="margin-top:20px; padding:10px 20px; background:#007bff; color:white; border:none; border-radius:5px; cursor:pointer;">Tentar Novamente</button>
                </div>
            `;
        });

})();
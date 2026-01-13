views.extend({
    renderMap: function (disciplina, nivel, unidades) {
        const config = SUBJECT_CONFIG[disciplina] || {
            theme: { main: "bg-green-500", border: "border-green-600", light: "bg-green-50", text: "text-green-500" }
        };

        let themeColor = "green-500";
        if (config && config.theme && config.theme.main) {
            themeColor = config.theme.main.replace("bg-", "");
        }

        const styleActive = {
            bg: config.theme.main,
            border: config.theme.borderDark || config.theme.border.replace('border-', 'border-Dark'),
            ring: `ring-${themeColor}/30`,
            text: "text-white",
        };

        const styleLocked = {
            bg: "bg-gray-200 dark:bg-gray-700",
            border: "border-gray-300 dark:border-gray-600",
            ring: "ring-gray-200/20",
            text: "text-gray-400",
        };

        let html = `
    <div class="flex flex-col items-center pt-8 w-full animate-fade-in pb-20 max-w-xl mx-auto overflow-x-hidden min-h-screen bg-transparent relative">
        
        <div class="w-full px-4 mb-8 flex flex-col items-center relative z-20">
            <button onclick="app.back()" 
                 class="absolute left-4 top-0 w-12 h-12 glass-child rounded-2xl flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-all shadow-sm">
                <i class="fas fa-arrow-left text-lg"></i>
            </button>

            <div class="glass-panel rounded-3xl py-4 px-8 mt-14 md:mt-0 text-center shadow-lg border border-white/40 min-w-[200px]">
                <h2 class="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-white mb-1 leading-tight drop-shadow-sm">
                    ${disciplina}
                </h2>
                <p class="text-gray-500 dark:text-gray-300 font-bold text-xs uppercase tracking-widest opacity-80">${nivel.toUpperCase()}</p>
            </div>
        </div>

        <div class="relative w-full flex flex-col items-center">
            <div class="absolute top-0 bottom-10 left-1/2 w-4 bg-gray-200/80 dark:bg-gray-700/50 -translate-x-1/2 rounded-full -z-10"></div>
`;

        let globalIndex = 0;
        let previousLessonCompleted = true;

        for (const unidadeNome in unidades) {
            const licoes = unidades[unidadeNome];

            // === AQUI É O LUGAR CERTO PARA OS BOTÕES (DENTRO DO LOOP) ===

            // 1. Gera o Botão de Prova (Busca nota)
            const notaProva = app.getNota ? app.getNota(unidadeNome, 'prova') : null; // Proteção caso app.getNota não exista
            const textoProva = notaProva ? `Nota: ${notaProva.toFixed(1)}` : "Prova";
            const corProva = notaProva >= 7 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";

            // 2. Monta o HTML dos botões
            const botoesAcao = `
                <div class="flex justify-center gap-2 mt-2">
                    <button onclick="arena.comecarDesafio('${disciplina}', '${nivel}', '${unidadeNome}', 'treino')" 
                            class="px-3 py-1 rounded-lg bg-blue-100 text-blue-600 text-xs font-bold hover:bg-blue-200 transition-colors">
                        <i class="fas fa-dumbbell"></i> Treino
                    </button>
                    
                    <button onclick="arena.comecarDesafio('${disciplina}', '${nivel}', '${unidadeNome}', 'prova')" 
                            class="px-3 py-1 rounded-lg ${notaProva ? corProva : 'bg-yellow-100 text-yellow-700'} text-xs font-bold hover:brightness-95 transition-colors">
                        <i class="fas fa-trophy"></i> ${textoProva}
                    </button>
                </div>
            `;
            // ============================================================

            html += `
                <div class="relative z-10 my-8 w-full text-center group-unit">
                    <div class="inline-block glass-panel rounded-3xl border-2 ${config.theme.border} px-6 py-3 shadow-md transform hover:scale-105 transition-transform backdrop-blur-xl">
                        <h3 class="${config.theme.text} font-black text-xs uppercase tracking-[0.15em] drop-shadow-sm mb-1">${unidadeNome}</h3>
                        
                        ${botoesAcao}
                    </div>
                </div>
            `;

            licoes.forEach((licao) => {
                const isCompleted = app.isLessonCompleted(licao);
                const isLocked = !previousLessonCompleted && !isCompleted;

                const isLeft = globalIndex % 2 === 0;
                const translateClass = isLeft ? "-translate-x-12" : "translate-x-12";
                let btnStyle = isLocked ? styleLocked : styleActive;

                let icon = isLocked
                    ? '<i class="fas fa-lock text-2xl opacity-50"></i>'
                    : isCompleted
                        ? '<i class="fas fa-check text-2xl drop-shadow-md"></i>'
                        : '<i class="fas fa-star text-2xl animate-pulse drop-shadow-md"></i>';

                let scaleAnim = !isLocked && !isCompleted ? "scale-110" : "hover:scale-110";

                let labelPosition = isLeft
                    ? "left-[120%] text-left origin-left"
                    : "right-[120%] text-right origin-right flex-row-reverse";

                let labelTextAlignment = isLeft ? "items-start" : "items-end";

                let clickAction = isLocked
                    ? `onclick="alert('Complete a lição anterior para desbloquear esta!')"`
                    : `onclick="app.navigate('lesson', '${licao}')"`;

                html += `
                    <div class="flex items-center justify-center w-full mb-14 relative z-10">
                        <div class="relative group transition-transform duration-500 ${translateClass}">

                            <div ${clickAction} class="absolute top-1/2 -translate-y-1/2 ${labelPosition} w-40 md:w-48 p-4 rounded-2xl border-2 cursor-pointer transition-all hover:scale-105 active:scale-95 z-20 shadow-lg flex flex-col justify-center ${labelTextAlignment} glass-panel ${isLocked
                        ? "border-gray-200 dark:border-gray-600 text-gray-400"
                        : config.theme.border + " " + config.theme.text
                    }">
                                <h4 class="font-bold text-sm leading-tight drop-shadow-sm">${licao}</h4>
                            </div>

                            <button ${clickAction} class="w-20 h-20 rounded-full border-b-[6px] flex items-center justify-center transition-all active:scale-90 active:border-b-0 relative z-30 shadow-xl ${scaleAnim} ${btnStyle.bg
                    } ${btnStyle.border} ${btnStyle.text} ring-8 ${btnStyle.ring}">
                                ${icon}
                            </button>
                            
                            <div class="absolute -bottom-4 left-4 right-4 h-3 bg-black/20 rounded-full blur-md -z-10"></div>
                        </div>
                    </div>
                `;

                if (!isCompleted) previousLessonCompleted = false;
                globalIndex++;
            });
        }

        // Troféu Final
        let trophyStyle = previousLessonCompleted
            ? "grayscale-0 opacity-100 animate-bounce cursor-pointer hover:scale-110"
            : "grayscale opacity-50 cursor-not-allowed";

        let trophyClick = previousLessonCompleted
            ? `onclick="alert('Parabéns! Você completou o nível ${nivel}!')"`
            : `onclick="alert('Complete todas as lições para pegar o troféu!')"`;

        html += `
            <div class="w-24 h-24 mt-8 relative z-20 transition-all duration-500 ${trophyStyle}" ${trophyClick}>
                <div class="w-full h-full rounded-[2rem] bg-gradient-to-b from-yellow-300 to-yellow-500 border-b-8 border-yellow-600 flex items-center justify-center shadow-xl ring-8 ring-yellow-400/30">
                    <i class="fas fa-trophy text-4xl text-yellow-50 drop-shadow-md"></i>
                </div>
            </div>
        </div> </div> `;

        return html;
    },

    //==============================
    //= renderLevelSelector
    //==============================
    
    renderLevelSelector: function (tituloContexto, dadosItens) {

        // --- 🛡️ BLINDAGEM CONTRA ERRO (CRASH FIX) ---
        if (!dadosItens || Object.keys(dadosItens).length === 0) {
            return `
                <div class="flex flex-col items-center justify-center h-64 text-center animate-fade-in">
                    <i class="fas fa-ghost text-4xl text-gray-300 mb-4"></i>
                    <h3 class="text-xl font-bold text-gray-600 dark:text-gray-400">Nada por aqui...</h3>
                    <p class="text-sm text-gray-400">O currículo de ${tituloContexto} parece vazio.</p>
                    <button onclick="app.back()" class="mt-4 text-blue-500 font-bold hover:underline">Voltar</button>
                </div>
            `;
        }
        // Se o currículo não foi encontrado ou está vazio, mostramos aviso visual
        if (!dadosItens || typeof dadosItens !== 'object') {
            console.warn(`[Views] Currículo não encontrado para: ${tituloContexto}`);
            return `
                <div class="flex flex-col items-center justify-center h-screen animate-fade-in text-center p-6">
                    <div class="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                        <i class="fas fa-exclamation-triangle text-3xl text-yellow-500"></i>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-700 dark:text-white mb-2">Conteúdo não encontrado</h2>
                    <p class="text-gray-500 max-w-md">Não encontramos o currículo de <strong>${tituloContexto}</strong>.</p>
                    <button onclick="app.back()" class="mt-6 px-6 py-3 bg-brand-blue text-white rounded-xl font-bold hover:brightness-110 transition-all">
                        Voltar
                    </button>
                </div>
            `;
        }
        // -------------------------------------------------------------

        // Só agora é seguro tentar ler as chaves
        const chaves = Object.keys(dadosItens);
        const primeiraChave = chaves.length > 0 ? chaves[0] : null;

        const isListaDeCursos = tituloContexto === "Ensino Superior";
        // Verifica se é uma disciplina de faculdade (baseado se temos temas definidos pra ela)
        const isDisciplinasSuperior = !isListaDeCursos && (typeof LEVEL_THEMES !== 'undefined' && LEVEL_THEMES[primeiraChave]);

        let tituloTela = tituloContexto;
        let subTitulo = "Selecione uma opção:";
        let grupos = {};

        // LÓGICA DE AGRUPAMENTO
        if (isListaDeCursos) {
            tituloTela = "Cursos de Graduação";
            grupos = { "Cursos": chaves };
        }
        else if (isDisciplinasSuperior) {
            tituloTela = tituloContexto;
            grupos = { "Disciplinas": chaves };
        }
        else if (tituloContexto === "Redação") {
            grupos = { "Módulos": chaves };
        }
        else {
            tituloTela = "Escolha seu Nível";
            subTitulo = "Qual é a sua etapa?";

            grupos = {
                "Anos Iniciais (Fund. I)": [],
                "Anos Finais (Fund. II)": [],
                "Ensino Médio": [],
                "Outros": []
            };

            for (const nivel in dadosItens) {
                // Filtros de String mais robustos (Ignora Case Sensitive)
                const n = nivel.toLowerCase();

                if (nivel.includes("EFI") || ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"].some(termo => n.startsWith(termo) && !n.includes("em"))) {
                    grupos["Anos Iniciais (Fund. I)"].push(nivel);
                }
                else if (["6º", "7º", "8º", "9º"].some(termo => n.includes(termo))) {
                    grupos["Anos Finais (Fund. II)"].push(nivel);
                }
                else if (n.includes("em") || n.includes("médio") || n.includes("medio")) {
                    grupos["Ensino Médio"].push(nivel);
                }
                else {
                    grupos["Outros"].push(nivel);
                }
            }
        }

        // RENDERIZAÇÃO DO HTML
        let html = `
            <div class="animate-fade-in flex flex-col gap-8 max-w-7xl mx-auto pb-24 pt-4 px-4 min-h-screen relative">
                
                <button onclick="app.back()" class="absolute top-6 left-6 w-12 h-12 glass-child rounded-2xl flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-all shadow-sm z-10">
                    <i class="fas fa-arrow-left text-lg"></i>
                </button>

                <div class="glass-panel rounded-3xl p-6 mt-16 md:mt-8 mx-auto text-center w-full max-w-md shadow-lg border border-white/40">
                    <h2 class="text-3xl font-black text-gray-800 dark:text-white drop-shadow-sm">${tituloTela}</h2>
                    <p class="text-brand-blue dark:text-blue-300 font-bold uppercase tracking-wide text-xs mt-1">${subTitulo}</p>
                </div>
        `;

        for (const [nomeGrupo, niveis] of Object.entries(grupos)) {

            if (niveis.length === 0) continue;

            html += `<div class="w-full">`;

            // Cabeçalho do Grupo (exceto se for lista simples)
            if (!isListaDeCursos && !isDisciplinasSuperior && tituloContexto !== "Redação") {
                html += `
                <div class="flex items-center gap-4 mb-6 mt-4 opacity-70 max-w-5xl mx-auto">
                    <div class="h-px flex-1 bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-500 to-transparent"></div>
                    <span class="text-gray-500 dark:text-gray-300 font-black text-[10px] uppercase tracking-[0.2em] glass-child px-3 py-1 rounded-lg">
                        ${nomeGrupo}
                    </span>
                    <div class="h-px flex-1 bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-500 to-transparent"></div>
                </div>`;
            }

            html += `<div class="flex flex-wrap justify-center gap-4 md:gap-6">`;

            niveis.forEach(nivel => {
                let estilo = { bg: "bg-gray-500", border: "border-gray-700", color: "text-white" };
                let textoGrande = "";
                let textoPequeno = nivel;

                // --- LÓGICA DE CORES ---
                if (isListaDeCursos || isDisciplinasSuperior) {
                    const theme = (typeof LEVEL_THEMES !== 'undefined' ? LEVEL_THEMES[nivel] : null) || (typeof LEVEL_THEMES !== 'undefined' ? LEVEL_THEMES["default"] : { main: "bg-gray-500" });

                    // Fallback seguro se theme for null
                    const mainColor = theme ? theme.main : "bg-gray-500";

                    estilo = { bg: mainColor, border: mainColor.replace('bg-', 'border-'), color: "text-white" };
                    textoGrande = isListaDeCursos ? "<i class='fas fa-university'></i>" : nivel.substring(0, 3).toUpperCase();
                } else if (tituloContexto === "Redação") {
                    const conf = typeof SUBJECT_CONFIG !== 'undefined' ? SUBJECT_CONFIG["Redação"] : { theme: { main: "bg-red-500", border: "border-red-600" } };
                    estilo = { bg: conf.theme.main, border: conf.theme.border, color: "text-white" };
                    textoGrande = "<i class='fas fa-pen-nib'></i>";
                } else {
                    // Cores Escolares Padrão
                    if (nivel.includes("1º")) estilo = { bg: "bg-[#A3E635]", border: "border-[#83C615]", color: "text-white" };
                    else if (nivel.includes("2º")) estilo = { bg: "bg-[#4ADE80]", border: "border-[#2ABE60]", color: "text-white" };
                    else if (nivel.includes("3º")) estilo = { bg: "bg-[#2DD4BF]", border: "border-[#0DB49F]", color: "text-white" };
                    else if (nivel.includes("4º")) estilo = { bg: "bg-[#22D3EE]", border: "border-[#02B3CE]", color: "text-white" };
                    else if (nivel.includes("5º")) estilo = { bg: "bg-[#38BDF8]", border: "border-[#289DD8]", color: "text-white" };
                    else if (nivel.includes("6º")) estilo = { bg: "bg-[#58cc02]", border: "border-[#38AC00]", color: "text-white" };
                    else if (nivel.includes("7º")) estilo = { bg: "bg-[#1cb0f6]", border: "border-[#0c90D6]", color: "text-white" };
                    else if (nivel.includes("8º")) estilo = { bg: "bg-[#ce82ff]", border: "border-[#a568cc]", color: "text-white" };
                    else if (nivel.includes("9º")) estilo = { bg: "bg-[#ff4b4b]", border: "border-[#Df2b2b]", color: "text-white" };
                    else if (nivel.includes("1º Ano do EM")) estilo = { bg: "bg-[#FF9600]", border: "border-[#DF7600]", color: "text-white" };
                    else if (nivel.includes("2º Ano do EM")) estilo = { bg: "bg-[#FFC800]", border: "border-[#DF7800]", color: "text-white" };
                    else if (nivel.includes("3º Ano do EM")) estilo = { bg: "bg-[#FF2E93]", border: "border-[#DF0E73]", color: "text-white" };

                    if (nivel.includes("Ano")) {
                        const partes = nivel.split(" ");
                        textoGrande = partes[0];
                        textoPequeno = partes.slice(1).join(" ");
                    } else { textoGrande = nivel.charAt(0); }
                }

                html += `
                    <button onclick="app.selectLevel('${nivel}')" 
                            class="group relative w-36 md:w-44 h-40 md:h-48 flex flex-col items-center justify-center gap-3 p-3
                                   rounded-[2rem] border-b-[6px] ${estilo.border} ${estilo.bg}
                                   shadow-lg hover:shadow-xl
                                   hover:brightness-110 hover:-translate-y-1
                                   active:border-b-0 active:translate-y-[6px] active:shadow-none
                                   transition-all duration-150 overflow-hidden cursor-pointer ring-4 ring-white/20 dark:ring-white/5">
                        
                        <div class="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none"></div>
                        <div class="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>

                        <div class="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-black/10 dark:bg-white/10 border-2 border-white/20 flex items-center justify-center ${estilo.color} text-2xl md:text-3xl font-black shadow-inner 
                                    group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 backdrop-blur-sm">
                            ${textoGrande}
                        </div>
                        
                        <span class="relative z-10 ${estilo.color} font-extrabold text-[11px] md:text-xs uppercase tracking-wider text-center leading-tight w-full px-1 drop-shadow-md">
                            ${textoPequeno}
                        </span>
                    </button>
                `;
            });

            html += `</div></div>`;
        }

        html += `</div>`;
        return html;
    }
});
views.extend({
    renderMap: function (disciplina, nivel, unidades) {
        const safeDisciplina = views.escapeHTML(disciplina);
        // `nivel` é o código canônico (EF06); o rótulo humano vem de NIVEIS.
        const safeNivel = views.escapeHTML(nivel);
        const rotuloNivel = (typeof NIVEIS !== 'undefined' && NIVEIS[nivel]) ? NIVEIS[nivel].rotulo : nivel;
        const safeNivelRotulo = views.escapeHTML(rotuloNivel);

        const config = (typeof SUBJECT_CONFIG !== 'undefined' && SUBJECT_CONFIG[disciplina]) ? SUBJECT_CONFIG[disciplina] : {
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

        let totalLessons = 0;
        let completedLessons = 0;
        for (const unidadeNome in unidades) {
            const licoes = unidades[unidadeNome];
            if (Array.isArray(licoes)) {
                for (const licao of licoes) {
                    totalLessons++;
                    if (app.isLessonCompleted && app.isLessonCompleted(licao.id)) {
                        completedLessons++;
                    }
                }
            }
        }

        let html = `
    <div class="flex flex-col items-center pt-8 w-full animate-fade-in pb-20 max-w-xl mx-auto overflow-x-hidden min-h-screen bg-transparent relative">
        
        <div class="w-full px-4 mb-8 flex flex-col items-center relative z-20">
            <button onclick="app.back()" 
                 class="absolute left-4 top-0 w-12 h-12 glass-child rounded-2xl flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-all shadow-sm active:scale-90">
                <i class="fas fa-arrow-left text-lg"></i>
            </button>

            <div class="glass-panel rounded-3xl py-4 px-8 mt-14 md:mt-0 text-center shadow-lg border border-white/40 min-w-[200px] animate-pop-in">
                <h2 class="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-white mb-1 leading-tight drop-shadow-sm">
                    ${safeDisciplina}
                </h2>
                <p class="text-gray-500 dark:text-gray-300 font-bold text-xs uppercase tracking-widest opacity-80">${safeNivelRotulo.toUpperCase()}</p>
            </div>

            <!-- PROGRESS BAR -->
            ${views.renderProgressBar(completedLessons, totalLessons)}
        </div>

        <div class="relative w-full flex flex-col items-center">
            <div class="absolute top-0 bottom-10 left-1/2 w-4 bg-gray-200/80 dark:bg-gray-700/50 -translate-x-1/2 rounded-full -z-10 shadow-inner"></div>
`;

        let globalIndex = 0;
        let previousLessonCompleted = true;

        for (const unidadeNome in unidades) {
            const licoes = unidades[unidadeNome];
            const safeUnidade = views.escapeHTML(unidadeNome);

            const notaProva = app.getNota ? app.getNota(unidadeNome, 'prova') : null;
            const textoProva = notaProva !== null ? `Nota: ${notaProva.toFixed(1)}` : "Prova";
            const corProva = notaProva >= 7 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";

            const botoesAcao = `
                <div class="flex justify-center gap-2 mt-2">
                    <button data-action="desafio" data-arg="${safeDisciplina}" data-arg2="${safeNivel}" data-arg3="${safeUnidade}" data-arg4="treino"
                            class="px-3 py-1.5 rounded-lg bg-blue-100 text-blue-600 text-xs font-black hover:bg-blue-200 active:scale-95 transition-all">
                        <i class="fas fa-dumbbell mr-1"></i> TREINO
                    </button>
                    
                    <button data-action="desafio" data-arg="${safeDisciplina}" data-arg2="${safeNivel}" data-arg3="${safeUnidade}" data-arg4="prova"
                            class="px-3 py-1.5 rounded-lg ${notaProva ? corProva : 'bg-yellow-100 text-yellow-700'} text-xs font-black hover:brightness-95 active:scale-95 transition-all">
                        <i class="fas fa-trophy mr-1"></i> ${views.escapeHTML(textoProva.toUpperCase())}
                    </button>
                </div>
            `;

            html += `
                <div class="relative z-10 my-10 w-full text-center group-unit">
                    <div class="inline-block glass-panel rounded-3xl border-2 ${config.theme.border} px-6 py-4 shadow-xl transform-gpu hover:scale-105 transition-transform backdrop-blur-xl">
                        <h3 class="${config.theme.text} font-black text-xs uppercase tracking-[0.2em] drop-shadow-sm mb-2">${safeUnidade}</h3>
                        ${botoesAcao}
                    </div>
                </div>
            `;

            licoes.forEach((licao) => {
                // Lição canônica = {id, titulo}: progresso/navegação por id,
                // texto do card pelo título humano.
                const licaoId = licao.id;
                const safeLicaoId = views.escapeHTML(licaoId);
                const safeLicao = views.escapeHTML(licao.titulo);
                const isCompleted = app.isLessonCompleted(licaoId);
                const isLocked = !previousLessonCompleted && !isCompleted;

                const isLeft = globalIndex % 2 === 0;
                const translateClass = isLeft ? "-translate-x-12" : "translate-x-12";
                let btnStyle = isLocked ? styleLocked : styleActive;

                let icon = isLocked
                    ? '<i class="fas fa-lock text-2xl opacity-50"></i>'
                    : isCompleted
                        ? '<i class="fas fa-check text-2xl drop-shadow-md animate-pop-in"></i>'
                        : '<i class="fas fa-star text-2xl animate-pulse drop-shadow-md"></i>';

                let scaleAnim = !isLocked && !isCompleted ? "scale-110" : "hover:scale-110";

                let labelPosition = isLeft
                    ? "left-[120%] text-left origin-left"
                    : "right-[120%] text-right origin-right flex-row-reverse";

                let labelTextAlignment = isLeft ? "items-start" : "items-end";

                let clickAction = isLocked
                    ? `onclick="audioManager.play('error'); ui.showToast('Complete a lição anterior para desbloquear!', 'warning')"`
                    : `data-action="open-lesson" data-arg="${safeLicaoId}"`;

                html += `
                    <div class="flex items-center justify-center w-full mb-14 relative z-10">
                        <div class="relative group transition-transform duration-500 ${translateClass}">

                            <div ${clickAction} class="absolute top-1/2 -translate-y-1/2 ${labelPosition} w-40 md:w-48 p-4 rounded-2xl border-2 cursor-pointer transition-all hover:scale-105 active:scale-95 z-20 shadow-lg flex flex-col justify-center ${labelTextAlignment} glass-panel ${isLocked
                        ? "border-gray-200 dark:border-gray-600 text-gray-400 opacity-60"
                        : config.theme.border + " " + config.theme.text
                    }">
                                <h4 class="font-black text-sm leading-tight drop-shadow-sm">${safeLicao}</h4>
                            </div>

                            <button ${clickAction} class="w-20 h-20 rounded-full border-b-[6px] flex items-center justify-center transition-all active:scale-90 active:border-b-0 relative z-30 shadow-xl ${scaleAnim} ${btnStyle.bg
                    } ${btnStyle.border} ${btnStyle.text} ring-8 ${btnStyle.ring}">
                                ${icon}
                            </button>
                            
                            <div class="absolute -bottom-4 left-4 right-4 h-3 bg-black/20 rounded-full blur-md -z-10 group-hover:bg-black/30 transition-colors"></div>
                        </div>
                    </div>
                `;

                if (!isCompleted) previousLessonCompleted = false;
                globalIndex++;
            });
        }

        let trophyStyle = previousLessonCompleted
            ? "grayscale-0 opacity-100 animate-bounce cursor-pointer hover:scale-125"
            : "grayscale opacity-30 cursor-not-allowed";

        let trophyClick = previousLessonCompleted
            ? `data-action="trofeu" data-arg="1" data-arg2="${safeDisciplina}" data-arg3="${safeNivelRotulo}"`
            : `data-action="trofeu" data-arg="0" data-arg2="${safeDisciplina}" data-arg3="${safeNivelRotulo}"`;

        html += `
            <div class="w-28 h-28 mt-12 mb-10 relative z-20 transition-all duration-500 ${trophyStyle}" ${trophyClick}>
                <div class="w-full h-full rounded-[2.5rem] bg-gradient-to-b from-yellow-300 to-yellow-500 border-b-8 border-yellow-600 flex items-center justify-center shadow-2xl ring-8 ring-yellow-400/30">
                    <i class="fas fa-trophy text-5xl text-yellow-50 drop-shadow-md"></i>
                </div>
            </div>
        </div> </div> `;

        return html;
    },

    renderLevelSelector: function (tituloContexto, dadosItens) {
        const safeTitulo = views.escapeHTML(tituloContexto);

        if (!dadosItens || Object.keys(dadosItens).length === 0) {
            return `
                <div class="flex flex-col items-center justify-center h-64 text-center animate-fade-in">
                    <i class="fas fa-ghost text-4xl text-gray-300 mb-4 animate-bounce"></i>
                    <h3 class="text-xl font-bold text-gray-600 dark:text-gray-400">Nada por aqui...</h3>
                    <p class="text-sm text-gray-400">O currículo de ${safeTitulo} parece vazio.</p>
                    <button onclick="app.back()" class="mt-4 px-6 py-2 bg-brand-blue text-white rounded-xl font-bold active:scale-95 transition-all shadow-md">Voltar</button>
                </div>
            `;
        }

        const chaves = Object.keys(dadosItens);
        const primeiraChave = chaves.length > 0 ? chaves[0] : null;

        // Níveis do básico são CÓDIGOS (EF06); cursos/disciplinas do Superior
        // são nomes livres. Como LEVEL_THEMES passou a ser keyed por código
        // (R20), ele não distingue mais "disciplina do Superior".
        const temCodigosDeNivel = (typeof NIVEIS !== 'undefined') && chaves.some(chave => NIVEIS[chave]);
        const isListaDeCursos = tituloContexto === "Ensino Superior";
        const isDisciplinasSuperior = !isListaDeCursos && !temCodigosDeNivel
            && (typeof LEVEL_THEMES !== 'undefined' && Boolean(LEVEL_THEMES[primeiraChave]));

        let tituloTela = safeTitulo;
        let subTitulo = "Selecione uma opção:";
        let grupos = {};

        if (isListaDeCursos) {
            tituloTela = "Cursos de Graduação";
            grupos = { "Cursos": chaves };
        }
        else if (isDisciplinasSuperior) {
            tituloTela = safeTitulo;
            grupos = { "Disciplinas": chaves };
        }
        else {
            tituloTela = "Escolha seu Nível";
            subTitulo = "Qual é a sua etapa?";

            // Agrupa pelo `etapa` canônico de NIVEIS (EI/EF/EM) — sem sniffing
            // de texto. Redação entra aqui como qualquer outro componente.
            const ROTULOS_ETAPA = {
                EI: "Educação Infantil",
                EF: "Ensino Fundamental",
                EM: "Ensino Médio"
            };
            grupos = {};
            chaves
                .slice()
                .sort((a, b) => {
                    const ordemA = (typeof NIVEIS !== 'undefined' && NIVEIS[a]) ? NIVEIS[a].ordem : 999;
                    const ordemB = (typeof NIVEIS !== 'undefined' && NIVEIS[b]) ? NIVEIS[b].ordem : 999;
                    return ordemA - ordemB;
                })
                .forEach(codigo => {
                    const info = (typeof NIVEIS !== 'undefined') ? NIVEIS[codigo] : null;
                    const nomeGrupo = (info && ROTULOS_ETAPA[info.etapa]) || "Outros";
                    if (!grupos[nomeGrupo]) grupos[nomeGrupo] = [];
                    grupos[nomeGrupo].push(codigo);
                });
        }

        let html = `
            <div class="animate-fade-in flex flex-col gap-8 max-w-7xl mx-auto pb-24 pt-4 px-4 min-h-screen relative">
                
                <button onclick="app.back()" class="absolute top-6 left-6 w-12 h-12 glass-child rounded-2xl flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-all shadow-sm z-10">
                    <i class="fas fa-arrow-left text-lg"></i>
                </button>

                <div class="glass-panel rounded-3xl p-6 mt-16 md:mt-8 mx-auto text-center w-full max-w-md shadow-lg border border-white/40">
                    <h2 class="text-3xl font-black text-gray-800 dark:text-white drop-shadow-sm">${views.escapeHTML(tituloTela)}</h2>
                    <p class="text-brand-blue dark:text-blue-300 font-bold uppercase tracking-wide text-xs mt-1">${views.escapeHTML(subTitulo)}</p>
                </div>
        `;

        for (const [nomeGrupo, niveis] of Object.entries(grupos)) {
            if (niveis.length === 0) continue;
            html += `<div class="w-full">`;

            if (!isListaDeCursos && !isDisciplinasSuperior) {
                html += `
                <div class="flex items-center gap-4 mb-6 mt-4 opacity-70 max-w-5xl mx-auto">
                    <div class="h-px flex-1 bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-500 to-transparent"></div>
                    <span class="text-gray-500 dark:text-gray-300 font-black text-[10px] uppercase tracking-[0.2em] glass-child px-3 py-1 rounded-lg">
                        ${views.escapeHTML(nomeGrupo)}
                    </span>
                    <div class="h-px flex-1 bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-500 to-transparent"></div>
                </div>`;
            }

            html += `<div class="flex flex-wrap justify-center gap-4 md:gap-6">`;

            niveis.forEach(nivel => {
                const safeItemNivel = views.escapeHTML(nivel);
                const infoNivel = (typeof NIVEIS !== 'undefined') ? NIVEIS[nivel] : null;
                let estilo = { bg: "bg-gray-500", border: "border-gray-700", color: "text-white" };
                let textoGrande = "";
                let textoPequeno = safeItemNivel;

                if (isListaDeCursos || isDisciplinasSuperior) {
                    const theme = (typeof LEVEL_THEMES !== 'undefined' ? LEVEL_THEMES[nivel] : null) || (typeof LEVEL_THEMES !== 'undefined' ? LEVEL_THEMES["default"] : { main: "bg-gray-500" });
                    const mainColor = theme ? theme.main : "bg-gray-500";
                    estilo = { bg: mainColor, border: mainColor.replace('bg-', 'border-'), color: "text-white" };
                    textoGrande = isListaDeCursos ? "<i class='fas fa-university'></i>" : views.escapeHTML(nivel.substring(0, 3).toUpperCase());
                } else if (infoNivel) {
                    // Card de nível canônico: cor vem de LEVEL_THEMES[código].
                    const theme = (typeof LEVEL_THEMES !== 'undefined' ? LEVEL_THEMES[nivel] : null)
                        || (typeof LEVEL_THEMES !== 'undefined' ? LEVEL_THEMES["default"] : null);
                    const mainColor = theme ? theme.main : "bg-gray-500";
                    estilo = { bg: mainColor, border: mainColor.replace('bg-', 'border-'), color: "text-white" };

                    const partesRotulo = /^(\d+º)\s*(.*)$/.exec(infoNivel.rotulo);
                    if (partesRotulo) {
                        textoGrande = views.escapeHTML(partesRotulo[1]);
                        textoPequeno = views.escapeHTML(partesRotulo[2]);
                    } else {
                        // Educação Infantil: "Educação Infantil – Bebês"
                        textoGrande = views.escapeHTML(infoNivel.etapa);
                        textoPequeno = views.escapeHTML(infoNivel.rotulo.replace(/^Educação Infantil\s*[–-]\s*/, ""));
                    }
                } else {
                    textoGrande = views.escapeHTML(nivel.charAt(0));
                }

                html += `
                    <button data-action="select-level" data-arg="${safeItemNivel}"
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
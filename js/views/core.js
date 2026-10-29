/**
 * JS/VIEWS/CORE.JS (MATHLINGO v3.5)
 * Cria o objeto global 'views' com helpers reutilizáveis e sanitização XSS
 */
window.views = {
    extend: function(novasFuncoes) {
        Object.assign(this, novasFuncoes);
    },

    /**
     * Sanitiza qualquer string para prevenir injeção de scripts (XSS)
     * @param {string|any} str String bruta a ser sanitizada
     * @returns {string} String segura com caracteres HTML escapados
     */
    escapeHTML: function(str) {
        if (str === null || str === undefined) return '';
        const stringified = String(str);
        return stringified
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    },

    // ========================================================================
    // SKELETON LOADING HELPERS
    // ========================================================================
    generateSkeletonCard: function() {
        return `
            <div class="glass-child rounded-3xl p-6 h-full flex flex-col items-center gap-5 shadow-lg">
                <div class="skeleton skeleton-circle"></div>
                <div class="w-full">
                    <div class="skeleton skeleton-text w-2/3 mx-auto"></div>
                    <div class="skeleton skeleton-line w-1/2 mx-auto"></div>
                </div>
            </div>
        `;
    },

    generateSkeletonCards: function(count = 4) {
        let html = '';
        for (let i = 0; i < count; i++) {
            html += this.generateSkeletonCard();
        }
        return html;
    },

    // ========================================================================
    // PROGRESS BAR HELPER
    // ========================================================================
    renderProgressBar: function(completed, total) {
        if (!total || total === 0) return '';
        
        const safeCompleted = Math.max(0, parseInt(completed, 10) || 0);
        const safeTotal = Math.max(1, parseInt(total, 10) || 1);
        const percentage = Math.min(100, Math.round((safeCompleted / safeTotal) * 100));
        
        return `
            <div class="w-full mb-6 px-4">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest">
                        Progresso
                    </span>
                    <span class="text-xs font-black text-brand-green dark:text-green-400">
                        ${safeCompleted}/${safeTotal} ${percentage}%
                    </span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
    },

    // ========================================================================
    // UTILITY: Calcula total de lições em um nível
    // ========================================================================
    calculateLessonCount: function(unidades) {
        if (!unidades || typeof unidades !== 'object') return 0;
        
        let total = 0;
        for (const unidade in unidades) {
            const licoes = unidades[unidade];
            if (Array.isArray(licoes)) {
                total += licoes.length;
            }
        }
        return total;
    }
};
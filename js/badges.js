/**
 * ============================================================================
 * BADGES.JS - SISTEMA DE CONQUISTAS E MOTIVAÇÃO
 * ============================================================================
 * Gerencia badges de aprendizado, arena e milestones
 */

var badges = {
    // ========================================================================
    // 1. DEFINIÇÃO DE BADGES (DATABASE)
    // ========================================================================

    definitions: {
        // === BADGES DE TRILHA (Um por disciplina, ao completar 100% de um nível) ===
        trilha_iniciante: {
            id: 'trilha_iniciante',
            type: 'trilha',
            name: '🌱 Aprendiz',
            description: 'Completou 25% das lições de uma disciplina',
            icon: 'fa-leaf',
            color: 'bg-green-500',
            rarity: 'common'
        },
        trilha_intermediario: {
            id: 'trilha_intermediario',
            type: 'trilha',
            name: '🔥 Estudioso',
            description: 'Completou 50% das lições de uma disciplina',
            icon: 'fa-flame',
            color: 'bg-orange-500',
            rarity: 'uncommon'
        },
        trilha_avancado: {
            id: 'trilha_avancado',
            type: 'trilha',
            name: '⚡ Dominator',
            description: 'Completou 75% das lições de uma disciplina',
            icon: 'fa-bolt',
            color: 'bg-yellow-500',
            rarity: 'rare'
        },
        trilha_master: {
            id: 'trilha_master',
            type: 'trilha',
            name: '👑 Master',
            description: 'Completou 100% das lições de uma disciplina',
            icon: 'fa-crown',
            color: 'bg-purple-500',
            rarity: 'legendary'
        },

        // === BADGES DE ARENA (Milestones de acertos) ===
        arena_strike_10: {
            id: 'arena_strike_10',
            type: 'arena',
            name: '🎯 Acertador',
            description: 'Acertou 10 questões seguidas',
            icon: 'fa-bullseye',
            color: 'bg-red-500',
            rarity: 'common'
        },
        arena_strike_25: {
            id: 'arena_strike_25',
            type: 'arena',
            name: '🏹 Sharpshooter',
            description: 'Acertou 25 questões seguidas',
            icon: 'fa-bow',
            color: 'bg-amber-600',
            rarity: 'uncommon'
        },
        arena_strike_50: {
            id: 'arena_strike_50',
            type: 'arena',
            name: '🌟 Sniper',
            description: 'Acertou 50 questões seguidas',
            icon: 'fa-star',
            color: 'bg-blue-600',
            rarity: 'rare'
        },
        arena_perfection: {
            id: 'arena_perfection',
            type: 'arena',
            name: '💯 Perfeição',
            description: 'Acertou 100% de um desafio de arena',
            icon: 'fa-trophy',
            color: 'bg-gold-500',
            rarity: 'legendary'
        },

        // === BADGES DE MILESTONES ===
        xp_100: {
            id: 'xp_100',
            type: 'milestone',
            name: '⚙️ Iniciante',
            description: 'Acumulou 100 XP',
            icon: 'fa-star-half',
            color: 'bg-blue-400',
            rarity: 'common'
        },
        xp_500: {
            id: 'xp_500',
            type: 'milestone',
            name: '🚀 Ascensão',
            description: 'Acumulou 500 XP',
            icon: 'fa-rocket',
            color: 'bg-cyan-500',
            rarity: 'uncommon'
        },
        xp_1000: {
            id: 'xp_1000',
            type: 'milestone',
            name: '🌟 Lenda',
            description: 'Acumulou 1000 XP',
            icon: 'fa-star',
            color: 'bg-purple-600',
            rarity: 'rare'
        },

        // === BADGES DE STREAK ===
        streak_7: {
            id: 'streak_7',
            type: 'streak',
            name: '🔥 Semana de Fogo',
            description: '7 dias de estudo consecutivo',
            icon: 'fa-fire',
            color: 'bg-red-600',
            rarity: 'rare'
        },
        streak_30: {
            id: 'streak_30',
            type: 'streak',
            name: '🌋 Vulcão',
            description: '30 dias de estudo consecutivo',
            icon: 'fa-mountain',
            color: 'bg-orange-700',
            rarity: 'legendary'
        }
    },

    // ========================================================================
    // 2. FUNÇÕES DE DESBLOQUEIO
    // ========================================================================

    /**
     * Desbloqueie um badge para o usuário
     * @param {string} badgeId - ID do badge
     * @param {object} user - user object do app.state.userProgress
     */
    unlockBadge: function(badgeId, user) {
        if (!user) return;
        if (!user.badges) user.badges = [];
        
        // Evita duplicar
        if (user.badges.includes(badgeId)) return;
        
        user.badges.push(badgeId);
        
        // Toast de notificação
        const badge = this.definitions[badgeId];
        if (badge && window.ui && ui.showToast) {
            ui.showToast(`🎖️ Badge Desbloqueado: ${badge.name}`, 'success');
        }
        
        if (window.app) app.saveProgress();
        return true;
    },

    /**
     * Verifica e atualiza badges quando lição é completada
     */
    checkTrilhaBadges: function(disciplina, nivel, user) {
        if (!user) return;
        
        // Calcula progresso da disciplina
        const progress = this.getDisciplineProgress(disciplina, user);
        
        // Desbloqueia badges baseado em progresso
        if (progress >= 0.25 && !user.badges?.includes('trilha_iniciante')) {
            this.unlockBadge('trilha_iniciante', user);
        }
        if (progress >= 0.50 && !user.badges?.includes('trilha_intermediario')) {
            this.unlockBadge('trilha_intermediario', user);
        }
        if (progress >= 0.75 && !user.badges?.includes('trilha_avancado')) {
            this.unlockBadge('trilha_avancado', user);
        }
        if (progress >= 1.00 && !user.badges?.includes('trilha_master')) {
            this.unlockBadge('trilha_master', user);
        }
    },

    /**
     * Verifica badges de milestone (XP)
     */
    checkMilestoneBadges: function(user) {
        if (!user) return;
        
        const xp = user.xp || 0;
        
        if (xp >= 100 && !user.badges?.includes('xp_100')) {
            this.unlockBadge('xp_100', user);
        }
        if (xp >= 500 && !user.badges?.includes('xp_500')) {
            this.unlockBadge('xp_500', user);
        }
        if (xp >= 1000 && !user.badges?.includes('xp_1000')) {
            this.unlockBadge('xp_1000', user);
        }
    },

    /**
     * Verifica badges de streak
     */
    checkStreakBadges: function(user) {
        if (!user) return;
        
        const streak = user.streak || 0;
        
        if (streak >= 7 && !user.badges?.includes('streak_7')) {
            this.unlockBadge('streak_7', user);
        }
        if (streak >= 30 && !user.badges?.includes('streak_30')) {
            this.unlockBadge('streak_30', user);
        }
    },

    /**
     * Verifica badges de arena (acertos consecutivos)
     */
    checkArenaBadges: function(strikes, perfectScore, user) {
        if (!user) return;
        
        if (strikes >= 10 && !user.badges?.includes('arena_strike_10')) {
            this.unlockBadge('arena_strike_10', user);
        }
        if (strikes >= 25 && !user.badges?.includes('arena_strike_25')) {
            this.unlockBadge('arena_strike_25', user);
        }
        if (strikes >= 50 && !user.badges?.includes('arena_strike_50')) {
            this.unlockBadge('arena_strike_50', user);
        }
        if (perfectScore && !user.badges?.includes('arena_perfection')) {
            this.unlockBadge('arena_perfection', user);
        }
    },

    // ========================================================================
    // 3. CÁLCULOS E QUERIES
    // ========================================================================

    /**
     * Calcula progresso de uma disciplina (0 a 1)
     */
    getDisciplineProgress: function(disciplina, user) {
        if (!user || !user.completedLessons) return 0;
        
        // Acessa currículo da disciplina
        const curriculo = window.PLATAFORMA_CURRICULO[disciplina] || {};
        let totalLessons = 0;
        let completedCount = 0;
        
        // Conta todas as lições
        for (const nivel in curriculo) {
            const unidades = curriculo[nivel];
            for (const unidade in unidades) {
                const licoes = unidades[unidade];
                if (Array.isArray(licoes)) {
                    licoes.forEach(licao => {
                        totalLessons++;
                        // Lições são {id, titulo}: o progresso guarda ids.
                        if (licao && user.completedLessons.includes(licao.id)) {
                            completedCount++;
                        }
                    });
                }
            }
        }
        
        return totalLessons === 0 ? 0 : completedCount / totalLessons;
    },

    /**
     * Retorna badges obtidos
     */
    getUnlockedBadges: function(user) {
        if (!user || !user.badges) return [];
        return user.badges.map(badgeId => this.definitions[badgeId]).filter(b => b);
    },

    /**
     * Retorna badge específico
     */
    getBadge: function(badgeId) {
        return this.definitions[badgeId] || null;
    },

    /**
     * Calcula status de badges para disciplina (visual)
     */
    getDisciplineStatus: function(disciplina, user) {
        const progress = this.getDisciplineProgress(disciplina, user);
        
        if (progress >= 1.0) return { icon: '👑', color: 'text-purple-500', label: 'Master' };
        if (progress >= 0.75) return { icon: '⚡', color: 'text-yellow-500', label: 'Dominator' };
        if (progress >= 0.5) return { icon: '🔥', color: 'text-orange-500', label: 'Estudioso' };
        if (progress >= 0.25) return { icon: '🌱', color: 'text-green-500', label: 'Aprendiz' };
        return { icon: '📚', color: 'text-gray-500', label: 'Iniciante', progress };
    }
};

// Exposição global
window.badges = badges;

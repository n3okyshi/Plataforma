/**
 * JS/VIEWS/CORE.JS
 * Cria o objeto global 'views'
 */
window.views = { // <--- Tem que ser window.views
    extend: function(novasFuncoes) {
        Object.assign(this, novasFuncoes);
    }
};
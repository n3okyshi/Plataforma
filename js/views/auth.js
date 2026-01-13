/**
 * JS/VIEWS/AUTH.JS
 * Apenas renderiza o HTML. Não contém lógica de Firebase.
 */
views.extend({
    renderLogin: function (mode = 'login') {
        const isLogin = mode === 'login';
        const activeTab = "border-b-4 border-brand-blue text-brand-blue";
        const inactiveTab = "border-b-4 border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200";

        return `
        <div class="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] w-full p-6 animate-fade-in">
            <div class="glass-panel w-full max-w-sm rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                
                <div class="text-center mb-8">
                    <div class="w-20 h-20 bg-green-500 rounded-2xl mx-auto flex items-center justify-center shadow-[0_4px_0_#15803d] mb-4">
                        <i class="fas fa-cube text-4xl text-white"></i>
                    </div>
                    <h1 class="text-3xl font-black text-gray-700 dark:text-white tracking-wide">MathLingo</h1>
                </div>

                <button onclick="app.loginGoogle()" 
                    class="glass-child w-full mb-6 py-3 rounded-2xl flex items-center justify-center gap-3 font-bold text-gray-700 dark:text-white hover:bg-white/50 transition-all border border-white/30 cursor-pointer active:scale-95">
                    <i class="fab fa-google text-red-500 text-xl"></i>
                    <span>Entrar com Google</span>
                </button>

                <div class="relative flex py-2 items-center mb-6">
                    <div class="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                    <span class="flex-shrink mx-4 text-gray-400 text-xs font-bold uppercase">ou email</span>
                    <div class="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                </div>

                <div class="flex mb-6 text-sm font-bold uppercase tracking-wide">
                    <button onclick="app.setAuthMode('login')" class="flex-1 py-2 ${isLogin ? activeTab : inactiveTab} transition-colors">Entrar</button>
                    <button onclick="app.setAuthMode('register')" class="flex-1 py-2 ${!isLogin ? activeTab : inactiveTab} transition-colors">Cadastrar</button>
                </div>

                <form onsubmit="event.preventDefault(); app.handleAuthSubmit(this.email.value, this.pass.value)" class="flex flex-col gap-4">
                    <input type="email" name="email" placeholder="Email" required class="glass-child w-full p-4 rounded-xl font-bold text-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-brand-blue">
                    <input type="password" name="pass" placeholder="Senha" required minlength="6" class="glass-child w-full p-4 rounded-xl font-bold text-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-brand-blue">
                    <button type="submit" class="w-full bg-brand-blue hover:bg-blue-600 text-white font-black py-4 rounded-xl shadow-[0_4px_0_#0e7490] active:translate-y-[4px] active:shadow-none transition-all uppercase tracking-wider">
                        ${isLogin ? "ACESSAR CONTA" : "CRIAR CONTA"}
                    </button>
                </form>

                <button onclick="app.loginGuest()" class="w-full mt-6 text-xs font-bold text-gray-400 hover:text-brand-blue uppercase tracking-widest transition-colors">Continuar sem cadastro</button>
            </div>
        </div>`;
    }
});
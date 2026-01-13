views.extend({
    renderLogin: function (mode = 'login') {
        const isLogin = mode === 'login';

        // Estilos das abas (Ajustados para contrastar melhor no vidro)
        const tabActive = "border-b-4 border-[#1cb0f6] text-[#1cb0f6]";
        const tabInactive = "border-b-4 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200";

        return `
        <div class="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] w-full p-4 animate-fade-in transition-colors duration-300">
            
            <div class="glass-panel w-full max-w-sm rounded-3xl p-6 md:p-8 relative shadow-2xl">

                <div class="text-center mb-6">
                    <div class="w-20 h-20 bg-[#58cc02] rounded-2xl mx-auto flex items-center justify-center shadow-[0_4px_0_#46a302] mb-4">
                        <i class="fas fa-cube text-4xl text-white"></i>
                    </div>
                    <h1 class="text-3xl font-black text-gray-700 dark:text-white tracking-wide mb-2 transition-colors drop-shadow-sm">MathLingo</h1>
                </div>

                <div class="w-full">
                    
                    <button type="button" onclick="app.loginGoogle()" 
                            class="glass-child w-full mb-6 text-gray-700 dark:text-white font-bold py-3 rounded-2xl active:translate-y-[2px] transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wide">
                        <img src="https://img.icons8.com/color/48/google-logo.png" class="w-5 h-5">
                        <span>Entrar com Google</span>
                    </button>

                    <div class="relative flex py-2 items-center mb-6">
                        <div class="flex-grow border-t-2 border-gray-300/50 dark:border-white/10"></div>
                        <span class="flex-shrink mx-4 text-gray-400 dark:text-gray-300 text-xs font-black uppercase tracking-widest">OU EMAIL</span>
                        <div class="flex-grow border-t-2 border-gray-300/50 dark:border-white/10"></div>
                    </div>

                    <div class="flex mb-4 text-sm font-extrabold uppercase tracking-wide text-center">
                        <button onclick="app.setAuthMode('login')" class="flex-1 py-2 ${isLogin ? tabActive : tabInactive} transition-colors">
                            Já tenho conta
                        </button>
                        <button onclick="app.setAuthMode('register')" class="flex-1 py-2 ${!isLogin ? tabActive : tabInactive} transition-colors">
                            Criar conta
                        </button>
                    </div>

                    <form onsubmit="event.preventDefault(); app.handleAuthSubmit(this.email.value, this.pass.value)" class="space-y-4">
                        
                        <input type="email" name="email" placeholder="Email" required
                               class="glass-child w-full rounded-2xl p-3 font-bold text-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#1cb0f6] border-transparent transition-all h-12">
                        
                        <input type="password" name="pass" placeholder="Senha" required minlength="6"
                               class="glass-child w-full rounded-2xl p-3 font-bold text-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#1cb0f6] border-transparent transition-all h-12">
                        
                        <button type="submit" 
                                class="w-full bg-[#1cb0f6] hover:bg-[#1899d6] text-white font-extrabold py-3.5 rounded-2xl shadow-[0_4px_0_#1899d6] active:shadow-none active:translate-y-[4px] transition-all uppercase tracking-wider text-sm mt-4">
                            ${isLogin ? "ENTRAR" : "CRIAR MINHA CONTA"}
                        </button>
                    </form>

                    <button type="button" onclick="app.loginGuest()" 
                            class="w-full mt-8 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white font-bold text-xs uppercase tracking-widest transition-colors">
                        Continuar sem cadastro
                    </button>
                </div>
            </div>
        </div>
        `;
    }
});
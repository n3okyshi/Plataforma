/** Conteúdo curricular versionado; origem em data/componentes. */
'use strict';

// Níveis e componentes correspondem a data/base; temas são definidos neste arquivo.

window.NIVEIS = {
  "EI01": {
    "rotulo": "Educação Infantil – Bebês",
    "etapa": "EI",
    "ordem": 1
  },
  "EI02": {
    "rotulo": "Educação Infantil – Crianças bem pequenas",
    "etapa": "EI",
    "ordem": 2
  },
  "EI03": {
    "rotulo": "Educação Infantil – Crianças pequenas",
    "etapa": "EI",
    "ordem": 3
  },
  "EF01": {
    "rotulo": "1º Ano EF",
    "etapa": "EF",
    "ordem": 5
  },
  "EF02": {
    "rotulo": "2º Ano EF",
    "etapa": "EF",
    "ordem": 6
  },
  "EF03": {
    "rotulo": "3º Ano EF",
    "etapa": "EF",
    "ordem": 7
  },
  "EF04": {
    "rotulo": "4º Ano EF",
    "etapa": "EF",
    "ordem": 8
  },
  "EF05": {
    "rotulo": "5º Ano EF",
    "etapa": "EF",
    "ordem": 9
  },
  "EF06": {
    "rotulo": "6º Ano EF",
    "etapa": "EF",
    "ordem": 10
  },
  "EF07": {
    "rotulo": "7º Ano EF",
    "etapa": "EF",
    "ordem": 11
  },
  "EF08": {
    "rotulo": "8º Ano EF",
    "etapa": "EF",
    "ordem": 12
  },
  "EF09": {
    "rotulo": "9º Ano EF",
    "etapa": "EF",
    "ordem": 13
  },
  "EM01": {
    "rotulo": "1º Ano EM",
    "etapa": "EM",
    "ordem": 14
  },
  "EM02": {
    "rotulo": "2º Ano EM",
    "etapa": "EM",
    "ordem": 15
  },
  "EM03": {
    "rotulo": "3º Ano EM",
    "etapa": "EM",
    "ordem": 16
  }
};

window.SUBJECT_CONFIG = {
  "Matemática": {
    "category": "Ciências Exatas",
    "icon": "fa-calculator",
    "theme": {
      "main": "bg-brand-blue",
      "text": "text-brand-blue",
      "border": "border-brand-blue",
      "borderDark": "border-brand-blueDark",
      "light": "bg-blue-50"
    }
  },
  "Língua Portuguesa": {
    "category": "Linguagens",
    "icon": "fa-feather-alt",
    "theme": {
      "main": "bg-red-500",
      "text": "text-red-500",
      "border": "border-red-500",
      "borderDark": "border-red-700",
      "light": "bg-red-50"
    }
  },
  "Língua Inglesa": {
    "category": "Linguagens",
    "icon": "fa-flag-usa",
    "theme": {
      "main": "bg-blue-800",
      "text": "text-blue-800",
      "border": "border-blue-800",
      "borderDark": "border-blue-900",
      "light": "bg-blue-100"
    }
  },
  "Arte": {
    "category": "Linguagens",
    "icon": "fa-palette",
    "theme": {
      "main": "bg-pink-500",
      "text": "text-pink-500",
      "border": "border-pink-500",
      "borderDark": "border-pink-700",
      "light": "bg-pink-50"
    }
  },
  "Educação Física": {
    "category": "Linguagens",
    "icon": "fa-running",
    "theme": {
      "main": "bg-orange-500",
      "text": "text-orange-500",
      "border": "border-orange-500",
      "borderDark": "border-orange-700",
      "light": "bg-orange-50"
    }
  },
  "Redação": {
    "category": "Linguagens",
    "icon": "fa-pen-nib",
    "theme": {
      "main": "bg-rose-500",
      "text": "text-rose-500",
      "border": "border-rose-500",
      "borderDark": "border-rose-700",
      "light": "bg-rose-50"
    }
  },
  "Física": {
    "category": "Ciências Exatas",
    "icon": "fa-atom",
    "theme": {
      "main": "bg-violet-600",
      "text": "text-violet-600",
      "border": "border-violet-600",
      "borderDark": "border-violet-800",
      "light": "bg-violet-50"
    }
  },
  "Química": {
    "category": "Ciências Exatas",
    "icon": "fa-flask",
    "theme": {
      "main": "bg-fuchsia-600",
      "text": "text-fuchsia-600",
      "border": "border-fuchsia-600",
      "borderDark": "border-fuchsia-800",
      "light": "bg-fuchsia-50"
    }
  },
  "Ciências Naturais": {
    "category": "Ciências Naturais",
    "icon": "fa-leaf",
    "theme": {
      "main": "bg-green-500",
      "text": "text-green-500",
      "border": "border-green-500",
      "borderDark": "border-green-700",
      "light": "bg-green-50"
    }
  },
  "Biologia": {
    "category": "Ciências Naturais",
    "icon": "fa-dna",
    "theme": {
      "main": "bg-emerald-500",
      "text": "text-emerald-500",
      "border": "border-emerald-500",
      "borderDark": "border-emerald-700",
      "light": "bg-emerald-50"
    }
  },
  "História": {
    "category": "Ciências Humanas",
    "icon": "fa-landmark",
    "theme": {
      "main": "bg-yellow-500",
      "text": "text-yellow-600",
      "border": "border-yellow-500",
      "borderDark": "border-yellow-700",
      "light": "bg-yellow-50"
    }
  },
  "Geografia": {
    "category": "Ciências Humanas",
    "icon": "fa-globe-americas",
    "theme": {
      "main": "bg-cyan-600",
      "text": "text-cyan-600",
      "border": "border-cyan-600",
      "borderDark": "border-cyan-800",
      "light": "bg-cyan-50"
    }
  },
  "Geologia": {
    "category": "Ciências Naturais",
    "icon": "fa-mountain",
    "theme": {
      "main": "bg-amber-600",
      "text": "text-amber-600",
      "border": "border-amber-600",
      "borderDark": "border-amber-800",
      "light": "bg-amber-50"
    }
  },
  "Filosofia": {
    "category": "Ciências Humanas",
    "icon": "fa-quote-left",
    "theme": {
      "main": "bg-zinc-500",
      "text": "text-zinc-500",
      "border": "border-zinc-500",
      "borderDark": "border-zinc-700",
      "light": "bg-zinc-100"
    }
  },
  "Sociologia": {
    "category": "Ciências Humanas",
    "icon": "fa-users",
    "theme": {
      "main": "bg-teal-600",
      "text": "text-teal-600",
      "border": "border-teal-600",
      "borderDark": "border-teal-800",
      "light": "bg-teal-50"
    }
  },
  "Astronomia": {
    "category": "Ciências Exatas",
    "icon": "fa-star",
    "theme": {
      "main": "bg-indigo-900",
      "text": "text-indigo-900",
      "border": "border-indigo-900",
      "borderDark": "border-black",
      "light": "bg-indigo-100"
    }
  },
  "Ensino Superior": {
    "category": "Universidade",
    "icon": "fa-graduation-cap",
    "theme": {
      "main": "bg-gray-800",
      "text": "text-gray-800",
      "border": "border-gray-800",
      "borderDark": "border-black",
      "light": "bg-gray-200"
    }
  },
  "Inglês": {
    "category": "Linguagens",
    "icon": "fa-flag-usa",
    "theme": {
      "main": "bg-blue-800",
      "text": "text-blue-800",
      "border": "border-blue-800",
      "borderDark": "border-blue-900",
      "light": "bg-blue-100"
    }
  },
  "Artes": {
    "category": "Linguagens",
    "icon": "fa-palette",
    "theme": {
      "main": "bg-pink-500",
      "text": "text-pink-500",
      "border": "border-pink-500",
      "borderDark": "border-pink-700",
      "light": "bg-pink-50"
    }
  }
};

window.LEVEL_THEMES = {
  "EF01": {
    "main": "bg-lime-400",
    "text": "text-lime-600",
    "gradient": "from-lime-300 to-lime-500"
  },
  "EF02": {
    "main": "bg-green-400",
    "text": "text-green-600",
    "gradient": "from-green-300 to-green-500"
  },
  "EF03": {
    "main": "bg-teal-400",
    "text": "text-teal-600",
    "gradient": "from-teal-300 to-teal-500"
  },
  "EF04": {
    "main": "bg-cyan-400",
    "text": "text-cyan-600",
    "gradient": "from-cyan-300 to-cyan-500"
  },
  "EF05": {
    "main": "bg-sky-400",
    "text": "text-sky-600",
    "gradient": "from-sky-300 to-sky-500"
  },
  "EF06": {
    "main": "bg-[#58cc02]",
    "text": "text-[#58cc02]",
    "gradient": "from-green-400 to-green-600"
  },
  "EF07": {
    "main": "bg-[#1cb0f6]",
    "text": "text-[#1cb0f6]",
    "gradient": "from-blue-400 to-blue-600"
  },
  "EF08": {
    "main": "bg-[#ce82ff]",
    "text": "text-[#ce82ff]",
    "gradient": "from-purple-400 to-purple-600"
  },
  "EF09": {
    "main": "bg-[#ff4b4b]",
    "text": "text-[#ff4b4b]",
    "gradient": "from-red-400 to-red-600"
  },
  "EM01": {
    "main": "bg-[#FF9600]",
    "text": "text-[#FF9600]",
    "gradient": "from-orange-400 to-orange-600"
  },
  "EM02": {
    "main": "bg-[#FFC800]",
    "text": "text-[#E5B400]",
    "gradient": "from-yellow-400 to-yellow-600"
  },
  "EM03": {
    "main": "bg-[#FF2E93]",
    "text": "text-[#FF2E93]",
    "gradient": "from-pink-400 to-pink-600"
  },
  "Ciência da Computação": {
    "main": "bg-indigo-600",
    "text": "text-indigo-600",
    "gradient": "from-indigo-500 to-indigo-700"
  },
  "Matemática": {
    "main": "bg-blue-700",
    "text": "text-blue-700",
    "gradient": "from-blue-600 to-blue-800"
  },
  "Engenharia Civil": {
    "main": "bg-orange-600",
    "text": "text-orange-600",
    "gradient": "from-orange-500 to-orange-700"
  },
  "Cálculo I": {
    "main": "bg-blue-600",
    "text": "text-blue-600",
    "gradient": "from-blue-500 to-blue-700"
  },
  "Geometria Analítica": {
    "main": "bg-cyan-600",
    "text": "text-cyan-600",
    "gradient": "from-cyan-500 to-cyan-700"
  },
  "Álgebra Linear": {
    "main": "bg-purple-600",
    "text": "text-purple-600",
    "gradient": "from-purple-500 to-purple-700"
  },
  "Algoritmos": {
    "main": "bg-emerald-600",
    "text": "text-emerald-600",
    "gradient": "from-emerald-500 to-emerald-700"
  },
  "História da Computação": {
    "main": "bg-pink-600",
    "text": "text-pink-600",
    "gradient": "from-pink-500 to-pink-700"
  },
  "default": {
    "main": "bg-gray-600",
    "text": "text-gray-600",
    "gradient": "from-gray-500 to-gray-700"
  }
};

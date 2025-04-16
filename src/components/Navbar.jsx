import { useState, useEffect, createContext, useContext } from 'react'
import logoImg from '../assets/img/sp.webp'

// Crear contexto de idioma
export const LanguageContext = createContext({
  language: 'es',
  setLanguage: () => {},
  texts: {}
})

// Hook personalizado para usar el contexto de idioma
export const useLanguage = () => useContext(LanguageContext)

// Objeto de textos multilinguaje
const textsData = {
  en: {
    inicio: 'Home',
    sobreMi: 'About me',
    proyectos: 'Projects',
    habilidades: 'Skills',
    contacto: 'Contact',
    hero: {
      // ... existing code ...
    },
    about: {
      title: 'About me',
      description: 'Full Stack Developer with expertise in modern web technologies',
      skills: 'My Skills',
      downloadCV: 'Download Resume'
    },
  },
  es: {
    inicio: 'Inicio',
    sobreMi: 'Sobre mí',
    proyectos: 'Proyectos',
    habilidades: 'Habilidades',
    contacto: 'Contacto',
    hero: {
      // ... existing code ...
    },
    about: {
      title: 'Sobre mí',
      description: 'Desarrollador Full Stack con experiencia en tecnologías web modernas',
      skills: 'Mis Habilidades',
      downloadCV: 'Descargar CV'
    },
  }
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'es'
  )

  // Controlar scroll para cambiar estilo del navbar y detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      // Cambiar estilo del navbar al hacer scroll
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Detectar sección activa
      const sections = navItems.map(item => item.id).concat(['contacto'])
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
          }
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Manejar apertura/cierre del menú móvil
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Manejar cambio de tema
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Manejar cambio de idioma
  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('language', language)
    
    // Disparar evento para que otros componentes sepan del cambio
    window.dispatchEvent(new Event('storage'))
  }, [language])

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  // Textos según el idioma seleccionado
  const navTexts = {
    es: {
      inicio: 'Inicio',
      sobreMi: 'Sobre mí',
      proyectos: 'Proyectos',
      habilidades: 'Habilidades',
      contacto: 'Contacto'
    },
    en: {
      inicio: 'Home',
      sobreMi: 'About me',
      proyectos: 'Projects',
      habilidades: 'Skills',
      contacto: 'Contact'
    }
  }

  const currentTexts = navTexts[language]
  const navItems = [
    { id: 'inicio', text: currentTexts.inicio },
    { id: 'sobre-mi', text: currentTexts.sobreMi },
    { id: 'habilidades', text: currentTexts.habilidades },
    { id: 'proyectos', text: currentTexts.proyectos }
  ];
  
  // Navegación con scroll suave
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Agregar efecto de parallax al hacer clic en "Sobre mí"
      if (sectionId === 'sobre-mi') {
        const elements = document.querySelectorAll('.parallax-element');
        elements.forEach(el => {
          el.classList.add('transition-transform', 'duration-1000');
        });
        
        setTimeout(() => {
          elements.forEach(el => {
            el.classList.remove('transition-transform', 'duration-1000');
          });
        }, 1000);
      }

      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105">
            <a href="#" className="flex items-center">
              <img src={logoImg} alt="SebDev Logo" className="h-10 w-auto" />
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                SebDev
              </span>
            </a>
          </div>

          {/* Navegación - Escritorio */}
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`text-gray-700 dark:text-gray-200 
                    font-medium relative group transition-colors duration-300
                    ${isActive ? 'text-brand-500 dark:text-brand-300' : 'hover:text-brand-500 dark:hover:text-brand-300'}`}
                  >
                    {item.text}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand dark:bg-brand-300 
                    transition-all duration-300
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </a>
                )
              })}
              
              {/* Botón de contacto con efecto de borde */}
              <a
                href="#contacto"
                className={`px-4 py-2 rounded-md border transition-all duration-300
                ${activeSection === 'contacto' 
                  ? 'bg-brand-500 text-white dark:bg-brand-600 dark:text-white border-brand-500 dark:border-brand-600' 
                  : 'text-brand-500 border-brand-500 hover:bg-brand-500 hover:text-white dark:text-brand-300 dark:border-brand-300 dark:hover:bg-brand-600 dark:hover:text-white'
                }`}
              >
                {currentTexts.contacto}
              </a>
              
              {/* Toggle de idioma */}
              <button 
                onClick={toggleLanguage} 
                className="ml-4 px-3 py-1 rounded-md text-sm font-medium border border-gray-300 dark:border-gray-600 
                hover:border-brand-500 dark:hover:border-brand-300 
                text-gray-700 dark:text-gray-200 
                hover:text-brand-500 dark:hover:text-brand-300 
                transition-colors duration-300 focus:outline-none
                flex items-center"
                aria-label="Cambiar idioma"
              >
                <span className={`w-5 h-5 inline-flex items-center justify-center rounded-full mr-1 
                ${language === 'es' ? 'bg-brand-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                  ES
                </span>
                <span className={`w-5 h-5 inline-flex items-center justify-center rounded-full 
                ${language === 'en' ? 'bg-brand-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                  EN
                </span>
              </button>
              
              {/* Toggle de tema oscuro/claro */}
              <button 
                onClick={toggleDarkMode} 
                className="ml-3 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-300 transition-colors duration-300 focus:outline-none"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Toggle de idioma en móvil */}
            <button 
              onClick={toggleLanguage} 
              className="flex items-center px-2 py-1 rounded-md text-sm font-medium border border-gray-300 dark:border-gray-600 
              hover:border-brand-500 dark:hover:border-brand-300 
              text-gray-700 dark:text-gray-200 
              hover:text-brand-500 dark:hover:text-brand-300 
              transition-colors duration-300 focus:outline-none"
              aria-label="Cambiar idioma"
            >
              <span className={`w-5 h-5 inline-flex items-center justify-center 
              ${language === 'es' ? 'text-brand-500 font-bold' : 'text-gray-500 dark:text-gray-400'}`}>
                ES
              </span>
              <span className="mx-1">/</span>
              <span className={`w-5 h-5 inline-flex items-center justify-center
              ${language === 'en' ? 'text-brand-500 font-bold' : 'text-gray-500 dark:text-gray-400'}`}>
                EN
              </span>
            </button>
            
            {/* Toggle de tema oscuro/claro en móvil */}
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-300 transition-colors duration-300 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 
              hover:text-brand-500 dark:text-gray-200 dark:hover:text-brand-300 focus:outline-none
              hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {/* Icono de hamburguesa o X con animación */}
              {isMenuOpen ? (
                <svg className="block h-6 w-6 transition-transform duration-300 rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" 
                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" 
                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div 
        className={`absolute top-full left-0 w-full transform transition-all duration-300 ease-in-out bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg 
        ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-10px] opacity-0 pointer-events-none'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300
                ${isActive 
                  ? 'text-brand-500 bg-gray-50 dark:text-brand-300 dark:bg-gray-700' 
                  : 'text-gray-700 hover:text-brand-500 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-brand-300 dark:hover:bg-gray-700'
                }`}
              >
                {item.text}
              </a>
            )
          })}
          
          {/* Botón de contacto en móvil */}
          <a
            href="#contacto"
            className={`block mt-2 mx-3 px-3 py-2 text-center rounded-md text-base font-medium transition-colors duration-300
            ${activeSection === 'contacto'
              ? 'bg-brand-600 text-white dark:bg-brand-700 dark:text-white' 
              : 'bg-brand-500 text-white hover:bg-brand-600 dark:bg-brand-600 dark:hover:bg-brand-700'
            }`}
          >
            {currentTexts.contacto}
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 
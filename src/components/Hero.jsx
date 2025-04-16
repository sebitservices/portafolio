import { useState, useEffect, useRef } from 'react'
import { useLanguage } from './Navbar'

function Hero() {
  const { language, texts } = useLanguage();
  const [terminalText, setTerminalText] = useState([]);
  const terminalRef = useRef(null);
  
  const t = texts[language].hero;

  // Efecto para la terminal
  useEffect(() => {
    // Reiniciar terminal al cambiar de idioma
    setTerminalText([]);
    
    const terminalCommands = [
      { text: '> cd portfolio', delay: 800, color: 'text-white' },
      { text: '  Navigating to project...', delay: 1500, color: 'text-gray-400' },
      { text: '> npm install', delay: 2500, color: 'text-white' },
      { text: '  Installing dependencies...', delay: 3300, color: 'text-gray-400' },
      { text: '  ✓ Packages installed successfully', delay: 4000, color: 'text-green-400' },
      { text: '> npm run dev', delay: 5000, color: 'text-white' },
      { text: '  Starting development server...', delay: 5800, color: 'text-gray-400' },
      { text: '  ✓ Server running at', delay: 6500, color: 'text-green-400' },
      { text: '  http://localhost:3000', delay: 6800, color: 'text-brand-400 underline' },
      { text: '> Running skill check...', delay: 7500, color: 'text-white' },
      { text: '  ✓ React: Advanced', delay: 8000, color: 'text-green-400' },
      { text: '  ✓ Node.js: Advanced', delay: 8500, color: 'text-green-400' },
      { text: '  ✓ UI/UX: Proficient', delay: 9000, color: 'text-green-400' },
      { text: '  ✓ Responsive Design: Expert', delay: 9500, color: 'text-green-400' },
      { text: '> Welcome to my portfolio!', delay: 10200, color: 'text-brand-400 font-bold' },
    ];
    
    const timeouts = [];
    
    terminalCommands.forEach((command, index) => {
      const timer = setTimeout(() => {
        setTerminalText(prev => [...prev, command]);
        
        // Auto-scroll al último comando
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }, command.delay);
      
      timeouts.push(timer);
    });
    
    return () => timeouts.forEach(timer => clearTimeout(timer));
  }, [language]);

  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16">
      {/* Formas decorativas - círculos con gradientes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-brand-200/30 to-brand-400/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-brand-300/20 to-brand-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -top-10 right-1/3 w-60 h-60 bg-gradient-to-t from-brand-400/20 to-brand-200/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      
      <div className="container max-w-6xl mx-auto px-6 z-10 animate-fade-in">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">
          {/* Contenido centrado en pantallas pequeñas, a la izquierda en pantallas grandes */}
          <div className="w-full lg:w-5/12 space-y-8 text-center lg:text-left mb-12 lg:mb-0">
            <div className="space-y-3">
              <p className="text-xl text-gray-600 dark:text-gray-400">{t.greeting}</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                  {t.name}
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200">
                {t.title}
              </h2>
            </div>
            
            {/* Frase fija en lugar de texto con efecto de escritura */}
            <div className="my-8">
              <div className="flex items-center text-gray-700 dark:text-gray-300 justify-center lg:justify-start">
                <span className="text-lg mr-3 font-medium">⚡</span>
                <span className="text-xl font-medium">
                  {language === 'es' ? 'Creando soluciones digitales con pasión y precisión' : 'Creating digital solutions with passion and precision'}
                </span>
              </div>
            </div>
            
            {/* Botones de CTA */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-10">
              <a 
                href="#proyectos" 
                className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-lg shadow-lg transform hover:translate-y-1 transition-all duration-300"
              >
                {t.cta.projects}
              </a>
              <a 
                href="#contacto" 
                className="px-6 py-3 border-2 border-brand-500 hover:border-brand-600 text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 rounded-lg transform hover:translate-y-1 transition-all duration-300"
              >
                {t.cta.contact}
              </a>
              <a 
                href="https://github.com/sebitservices" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800 text-white rounded-full shadow-lg transform hover:translate-y-1 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
                </svg>
              </a>
            </div>
            
            {/* Indicador de scroll */}
            <div className="hidden md:flex items-center mt-12 text-gray-500 dark:text-gray-400 justify-center lg:justify-start">
              <span className="mr-2 text-sm">{t.scroll}</span>
              <svg 
                className="w-5 h-5 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
          
          {/* Terminal de código animada */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700 transform transition-all duration-500 hover:shadow-brand-500/20 hover:shadow-lg">
              {/* Barra de la terminal */}
              <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-400 font-mono">
                  sebdev@portfolio ~ 
                </div>
                <div className="text-gray-500 text-xs">
                  bash
                </div>
              </div>
              
              {/* Contenido de la terminal */}
              <div 
                ref={terminalRef}
                className="font-mono text-sm p-4 h-72 overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-950 leading-relaxed"
              >
                {terminalText.map((line, i) => (
                  <div 
                    key={i} 
                    className={`transition-opacity duration-300 ease-in-out
                      ${i === terminalText.length - 1 ? 'animate-fade-in border-l-0' : 'opacity-90'}
                      ${line.color}
                    `}
                  >
                    {line.text}
                    {i === terminalText.length - 1 && (
                      <span className="inline-block w-2 h-4 ml-1 bg-brand-500 animate-blink"></span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 
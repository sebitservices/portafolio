import { useEffect, useRef } from 'react';
import { useLanguage } from './Navbar';
import devImage from '../assets/img/dev.webp';

function About() {
  const { language, texts } = useLanguage();
  const sectionRef = useRef(null);
  const t = texts[language].about || {};
  
  // Efecto para animaciones de aparición al hacer scroll
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Cuando la sección es visible, activar animaciones
            const animatedElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              // Añadir delay escalonado para cada elemento
              setTimeout(() => {
                el.classList.add('animate-fade-in');
                el.style.opacity = 1;
              }, 100 * index);
            });
            
            // Desactivar observer después de animar
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // 10% de la sección visible para activar
    );
    
    observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="sobre-mi" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Sutil decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-400/20 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-400/20 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-300/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-brand-300/5 to-blue-300/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-20 animate-on-scroll opacity-0 transition-all duration-700">
          <h2 className="inline-block text-4xl md:text-5xl font-bold relative">
            <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
              {language === 'es' ? 'Sobre mí' : 'About me'}
            </span>
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></span>
          </h2>
          <div className="mt-2 animate-on-scroll opacity-0 transition-all duration-700 delay-100">
            <div className="h-1 w-0 bg-gradient-to-r from-brand-400 to-brand-600 mx-auto rounded-full transition-all duration-1000 animate-width"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
          {/* Columna izquierda: Imagen/Avatar */}
          <div className="lg:col-span-5 flex justify-center animate-on-scroll opacity-0 transition-all duration-700 delay-200">
            <div className="relative group rounded-2xl overflow-hidden shadow-xl w-full max-w-md">
              {/* Marco decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400/80 to-purple-500/80 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              {/* Foto con ajustes para mostrar la imagen completa */}
              <img 
                src={devImage} 
                alt="Sebastian" 
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Badge de profesión */}
              <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 text-brand-500 dark:text-brand-400 px-4 py-2 rounded-lg shadow-lg">
                <span className="font-semibold">Full Stack Developer</span>
              </div>
            </div>
          </div>
          
          {/* Columna derecha: Información */}
          <div className="lg:col-span-7">
            {/* Bio */}
            <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-300">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 border-l-4 border-brand-500 pl-4">
                {language === 'es' ? '¿Quién soy?' : 'Who am I?'}
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p className="text-lg leading-relaxed">
                  {language === 'es' 
                    ? 'Soy un desarrollador web apasionado con más de 5 años de experiencia en el desarrollo de aplicaciones frontend y backend. Me especializo en la creación de soluciones digitales de alta calidad, combinando tecnología moderna y diseño innovador.'
                    : 'I am a passionate web developer with more than 5 years of experience in frontend and backend application development. I specialize in creating high-quality digital solutions, combining modern technology and innovative design.'}
                </p>
                <p className="text-lg leading-relaxed">
                  {language === 'es'
                    ? 'Con amplio dominio de JavaScript (ES6+) y TypeScript, he trabajado con frameworks como Angular y React.js para crear interfaces dinámicas e interactivas. Mi experiencia en Node.js, Express y bases de datos como MySQL y MongoDB me permite desarrollar soluciones completas y escalables.'
                    : 'With extensive knowledge of JavaScript (ES6+) and TypeScript, I have worked with frameworks like Angular and React.js to create dynamic and interactive interfaces. My experience in Node.js, Express, and databases like MySQL and MongoDB allows me to develop complete and scalable solutions.'}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Experiencia y Educación */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experiencia Profesional */}
          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-400">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 border-l-4 border-brand-500 pl-4">
              {language === 'es' ? 'Experiencia Profesional' : 'Professional Experience'}
            </h3>
            
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 pb-8">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-brand-500"></div>
              
              {/* SebitServices */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {language === 'es' ? 'Fundador y Desarrollador Full Stack en SebitServices' : 'Founder and Full Stack Developer at SebitServices'}
                </h4>
                <p className="text-brand-500 dark:text-brand-400 font-medium">
                  {language === 'es' ? '2023 - Presente' : '2023 - Present'}
                </p>
                <div className="mt-4 text-gray-600 dark:text-gray-400 space-y-3">
                  <p>
                    {language === 'es' 
                      ? 'Fundé SebitServices, una empresa especializada en desarrollo web y soluciones digitales. Lidero el desarrollo de proyectos y la implementación de soluciones tecnológicas innovadoras para nuestros clientes.'
                      : 'I founded SebitServices, a company specialized in web development and digital solutions. I lead project development and implementation of innovative technological solutions for our clients.'}
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{language === 'es' 
                      ? 'Desarrollo de aplicaciones web personalizadas y sitios corporativos'
                      : 'Development of custom web applications and corporate websites'}
                    </li>
                    <li>{language === 'es' 
                      ? 'Implementación de soluciones e-commerce y sistemas de gestión'
                      : 'Implementation of e-commerce solutions and management systems'}
                    </li>
                    <li>{language === 'es' 
                      ? 'Consultoría técnica y optimización de procesos digitales'
                      : 'Technical consulting and digital process optimization'}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experiencia previa */}
              <div className="absolute -left-2.5 top-64 w-5 h-5 rounded-full bg-brand-500"></div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {language === 'es' ? 'Desarrollador Full Stack' : 'Full Stack Developer'}
                </h4>
                <p className="text-brand-500 dark:text-brand-400 font-medium">
                  {language === 'es' ? '5+ años de experiencia' : '5+ years of experience'}
                </p>
                <div className="mt-4 text-gray-600 dark:text-gray-400 space-y-3">
                  <p>
                    {language === 'es' 
                      ? 'Experiencia en desarrollo de aplicaciones frontend y backend utilizando tecnologías modernas, con amplio dominio de JavaScript (ES6+) y TypeScript.'
                      : 'Experience in frontend and backend application development using modern technologies, with expertise in JavaScript (ES6+) and TypeScript.'}
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{language === 'es' 
                      ? 'Angular (3 años de experiencia) y React.js (2 años) para interfaces dinámicas y altamente interactivas'
                      : 'Angular (3 years of experience) and React.js (2 years) for dynamic and highly interactive interfaces'}
                    </li>
                    <li>{language === 'es' 
                      ? 'Node.js y Express.js (3 años) en desarrollo backend'
                      : 'Node.js and Express.js (3 years) in backend development'}
                    </li>
                    <li>{language === 'es' 
                      ? 'Bases de datos MySQL y MongoDB'
                      : 'MySQL and MongoDB databases'}
                    </li>
                    <li>{language === 'es' 
                      ? 'Implementación de APIs RESTful (4 años)'
                      : 'RESTful API implementation (4 years)'}
                    </li>
                    <li>{language === 'es' 
                      ? 'Control de versiones con Git'
                      : 'Version control with Git'}
                    </li>
                    <li>{language === 'es' 
                      ? 'Despliegue con Docker y servicios en la nube como AWS'
                      : 'Deployment with Docker and cloud services like AWS'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Educación y Certificaciones */}
          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-500">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 border-l-4 border-brand-500 pl-4">
              {language === 'es' ? 'Educación y Certificaciones' : 'Education & Certifications'}
            </h3>
            
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-brand-500"></div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {language === 'es' ? 'Curso CCNA Routing and Switching' : 'CCNA Routing and Switching Course'}
                </h4>
                <p className="text-brand-500 dark:text-brand-400 font-medium">
                  {language === 'es' ? 'Universidad Tecnológica de Chile INACAP' : 'INACAP Technological University of Chile'}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {language === 'es' ? 'Sede Concepción, Chile • Enero 2020' : 'Concepción Campus, Chile • January 2020'}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {language === 'es' 
                    ? 'Principios básicos de routing y switching. Duración: 1 semestre académico.'
                    : 'Basic principles of routing and switching. Duration: 1 academic semester.'}
                </p>
              </div>
              
              <div className="absolute -left-2.5 top-52 w-5 h-5 rounded-full bg-brand-500"></div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {language === 'es' ? 'Curso IT Essentials' : 'IT Essentials Course'}
                </h4>
                <p className="text-brand-500 dark:text-brand-400 font-medium">
                  {language === 'es' ? 'Universidad Tecnológica de Chile INACAP' : 'INACAP Technological University of Chile'}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {language === 'es' ? 'Sede Concepción, Chile • 2019' : 'Concepción Campus, Chile • 2019'}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {language === 'es' 
                    ? '70 horas pedagógicas de formación en fundamentos de TI.'
                    : '70 pedagogical hours of IT fundamentals training.'}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Botón CV */}
        <div className="mt-16 text-center animate-on-scroll opacity-0 transition-all duration-700 delay-600">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-brand-500 dark:text-brand-400 border border-brand-500 dark:border-brand-400 rounded-lg shadow-lg hover:bg-brand-500 hover:text-white dark:hover:bg-brand-400 dark:hover:text-gray-800 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            {language === 'es' ? 'Descargar CV' : 'Download Resume'}
          </a>
        </div>
      </div>
      
      {/* Estilos adicionales para animaciones */}
      <style>{`
        @keyframes width {
          from { width: 0; }
          to { width: 100px; }
        }
        
        .animate-width {
          animation: width 1.5s forwards ease-out;
        }
        
        @keyframes width-delay {
          from { width: 0; }
          to { width: var(--final-width, 100%); }
        }
        
        .animate-width-delay {
          animation: width-delay 1s forwards ease-out;
          animation-delay: var(--delay, 0ms);
        }
      `}</style>
    </section>
  );
}

export default About; 
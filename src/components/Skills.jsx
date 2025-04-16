import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './Navbar';

function Skills() {
  const { language, texts } = useLanguage();
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('frontend');
  
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

  // Categorías de habilidades
  const skillCategories = [
    {
      id: 'frontend',
      title: {
        es: 'Frontend',
        en: 'Frontend'
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18" />
        </svg>
      ),
      skills: [
        { 
          name: 'HTML5/CSS3', 
          level: 95, 
          logo: '/skills/html5.svg',
          description: {
            es: 'Estructuración semántica y estilos avanzados',
            en: 'Semantic structuring and advanced styling'
          }
        },
        { 
          name: 'JavaScript', 
          level: 90, 
          logo: '/skills/javascript.svg',
          description: {
            es: 'ES6+, asincronía, módulos',
            en: 'ES6+, async/await, modules'
          }
        },
        { 
          name: 'TypeScript', 
          level: 85, 
          logo: '/skills/typescript.svg',
          description: {
            es: 'Tipado fuerte, interfaces, generics',
            en: 'Strong typing, interfaces, generics'
          }
        },
        { 
          name: 'React', 
          level: 88, 
          logo: '/skills/react.svg',
          description: {
            es: 'Hooks, Context API, Redux',
            en: 'Hooks, Context API, Redux'
          }
        },
        { 
          name: 'Angular', 
          level: 82, 
          logo: '/skills/angular.svg',
          description: {
            es: 'Servicios, RxJS, módulos',
            en: 'Services, RxJS, modules'
          }
        },
        { 
          name: 'Tailwind CSS', 
          level: 90, 
          logo: '/skills/tailwind.svg',
          description: {
            es: 'Diseño responsive, temas',
            en: 'Responsive design, theming'
          }
        }
      ]
    },
    {
      id: 'backend',
      title: {
        es: 'Backend',
        en: 'Backend'
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        { 
          name: 'Node.js', 
          level: 85, 
          logo: '/skills/nodejs.svg',
          description: {
            es: 'API RESTful, microservicios',
            en: 'RESTful APIs, microservices'
          }
        },
        { 
          name: 'Express.js', 
          level: 82, 
          logo: '/skills/express.svg',
          description: {
            es: 'Middleware, enrutamiento',
            en: 'Middleware, routing'
          }
        },
        { 
          name: 'MongoDB', 
          level: 80, 
          logo: '/skills/mongodb.svg',
          description: {
            es: 'Agregaciones, indices',
            en: 'Aggregations, indexes'
          }
        },
        { 
          name: 'MySQL', 
          level: 78, 
          logo: '/skills/mysql.svg',
          description: {
            es: 'Optimización de consultas',
            en: 'Query optimization'
          }
        },
        { 
          name: 'REST APIs', 
          level: 90, 
          logo: '/skills/api.svg',
          description: {
            es: 'Diseño RESTful, seguridad',
            en: 'RESTful design, security'
          }
        },
        { 
          name: 'GraphQL', 
          level: 75, 
          logo: '/skills/graphql.svg',
          description: {
            es: 'Schemas, resolvers',
            en: 'Schemas, resolvers'
          }
        }
      ]
    },
    {
      id: 'tools',
      title: {
        es: 'Herramientas y Otros',
        en: 'Tools & Others'
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        { 
          name: 'Git', 
          level: 88, 
          logo: '/skills/git.svg',
          description: {
            es: 'Control de versiones, workflows',
            en: 'Version control, workflows'
          }
        },
        { 
          name: 'Docker', 
          level: 75, 
          logo: '/skills/docker.svg',
          description: {
            es: 'Contenedores, orquestación',
            en: 'Containers, orchestration'
          }
        },
        { 
          name: 'AWS', 
          level: 70, 
          logo: '/skills/aws.svg',
          description: {
            es: 'EC2, S3, Lambda',
            en: 'EC2, S3, Lambda'
          }
        },
        { 
          name: 'CI/CD', 
          level: 78, 
          logo: '/skills/cicd.svg',
          description: {
            es: 'Integración y despliegue continuo',
            en: 'Continuous integration/deployment'
          }
        },
        { 
          name: 'Responsive Design', 
          level: 92, 
          logo: '/skills/responsive.svg',
          description: {
            es: 'Mobile-first, accesibilidad',
            en: 'Mobile-first, accessibility'
          }
        },
        { 
          name: 'UX/UI', 
          level: 85, 
          logo: '/skills/uxui.svg',
          description: {
            es: 'Experiencia de usuario, interfaces',
            en: 'User experience, interfaces'
          }
        }
      ]
    }
  ];

  // Obtener la categoría activa
  const activeSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || [];

  // Habilidades adicionales para mostrar
  const additionalSkills = [
    'SEO', 'Marketing Digital', 'Figma', 'Adobe XD', 'Webpack', 
    'Jest', 'Redux', 'RxJS', 'Sass', 'Material UI', 'Bootstrap',
    'Firebase', 'NextJS', 'Vercel', 'Netlify', 'GitLab CI'
  ];

  return (
    <section 
      id="habilidades" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-gradient-to-br from-brand-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-gradient-to-tr from-brand-300/10 to-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1/2 max-w-3xl bg-gradient-to-r from-transparent via-brand-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700">
          <span className="inline-block text-sm font-semibold text-brand-500 dark:text-brand-300 uppercase tracking-wider mb-2">
            {language === 'es' ? 'Competencias Técnicas' : 'Technical Expertise'}
          </span>
          <h2 className="inline-block text-4xl md:text-5xl font-bold relative">
            <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
              {language === 'es' ? 'Mis Habilidades' : 'My Skills'}
            </span>
          </h2>
          <div className="mt-2 animate-on-scroll opacity-0 transition-all duration-700 delay-100">
            <div className="h-1 w-0 bg-gradient-to-r from-brand-400 to-brand-600 mx-auto rounded-full transition-all duration-1000 animate-width"></div>
          </div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-on-scroll opacity-0 transition-all duration-700 delay-200">
            {language === 'es' 
              ? 'Tecnologías y herramientas que domino para crear soluciones digitales excepcionales.' 
              : 'Technologies and tools I master to create exceptional digital solutions.'}
          </p>
        </div>
        
        {/* Navegación de categorías */}
        <div className="flex justify-center mb-12 animate-on-scroll opacity-0 transition-all duration-700 delay-300">
          <div className="inline-flex p-1 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-inner">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-xl text-sm md:text-base font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-white dark:bg-gray-700 text-brand-500 dark:text-brand-300 shadow-md' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-300'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title[language]}
              </button>
            ))}
          </div>
        </div>
        
        {/* Visualización de habilidades principales - NUEVO DISEÑO */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeSkills.map((skill, index) => (
              <div 
                key={skill.name}
                className="animate-on-scroll opacity-0 transition-all duration-500"
                style={{ transitionDelay: `${300 + (index * 50)}ms` }}
              >
                <div className="group relative bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full overflow-hidden">
                  {/* Fondo con gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-750 rounded-xl"></div>
                  
                  {/* Línea decorativa superior */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-brand-600"></div>
                  
                  {/* Contenido */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {/* Placeholder de imagen con un círculo del color de fondo */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                          <div className="text-brand-500 dark:text-brand-300 text-lg font-bold">
                            {skill.name.substring(0, 2)}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm font-bold bg-brand-50 dark:bg-gray-700 text-brand-600 dark:text-brand-300">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                      {skill.description[language]}
                    </p>
                    
                    {/* Barra de progreso renovada */}
                    <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden relative mb-1">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 absolute left-0 top-0 flex"
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="absolute inset-0 bg-white/20 animate-pulse-subtle"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Sección de habilidades adicionales y lenguajes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Habilidades adicionales - REDISEÑADO */}
          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-500">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
                <svg className="w-5 h-5 mr-3 text-brand-500 dark:text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
                {language === 'es' ? 'Tecnologías & Herramientas' : 'Technologies & Tools'}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {additionalSkills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="transition-all duration-300 transform px-3 py-1.5 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm font-medium border border-gray-200 dark:border-gray-600 hover:bg-brand-50 hover:text-brand-600 dark:hover:text-brand-300 dark:hover:border-brand-500/30"
                    style={{ transitionDelay: `${30 * index}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Lenguajes - REDISEÑADO */}
          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-600">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
                <svg className="w-5 h-5 mr-3 text-brand-500 dark:text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                </svg>
                {language === 'es' ? 'Idiomas' : 'Languages'}
              </h3>
              
              <div className="space-y-8">
                {/* Español */}
                <div className="relative">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-md bg-gradient-to-br from-red-500 to-yellow-500 text-white flex items-center justify-center font-bold shadow-sm">
                        ES
                      </div>
                      <div className="ml-3">
                        <div className="text-lg font-medium text-gray-900 dark:text-white">
                          {language === 'es' ? 'Español' : 'Spanish'}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {language === 'es' ? 'Nativo' : 'Native'}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-brand-500 dark:text-brand-300">100%</div>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-500 to-yellow-500 w-full"></div>
                  </div>
                </div>
                
                {/* Inglés */}
                <div className="relative">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-red-500 text-white flex items-center justify-center font-bold shadow-sm">
                        EN
                      </div>
                      <div className="ml-3">
                        <div className="text-lg font-medium text-gray-900 dark:text-white">
                          {language === 'es' ? 'Inglés' : 'English'}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {language === 'es' ? 'Profesional' : 'Professional'}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-brand-500 dark:text-brand-300">85%</div>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-red-500 w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bloque de metodologías de trabajo - REDISEÑADO */}
        <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-700">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
              <svg className="w-5 h-5 mr-3 text-brand-500 dark:text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              {language === 'es' ? 'Metodologías y Prácticas' : 'Methodologies & Practices'}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {[
                { name: language === 'es' ? 'Metodologías Ágiles' : 'Agile Methodologies', icon: '🔄' },
                { name: 'Scrum', icon: '📊' },
                { name: 'Kanban', icon: '📋' },
                { name: language === 'es' ? 'Desarrollo TDD' : 'TDD Development', icon: '🧪' },
                { name: language === 'es' ? 'Código Limpio' : 'Clean Code', icon: '✨' },
                { name: language === 'es' ? 'Integración Continua' : 'Continuous Integration', icon: '🔄' }
              ].map((method, index) => (
                <div 
                  key={method.name} 
                  className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:bg-brand-50 dark:hover:bg-gray-600 hover:border-brand-200 dark:hover:border-brand-500/40 group"
                >
                  <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{method.icon}</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors duration-300">{method.name}</span>
                </div>
              ))}
            </div>
          </div>
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
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s infinite;
        }
      `}</style>
    </section>
  );
}

export default Skills;
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './Navbar';

function Projects() {
  const { language, texts } = useLanguage();
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  
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

  // Para cerrar el modal con Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Datos de los proyectos
  const projects = [
    {
      id: 1,
      title: {
        es: 'Plataforma de E-commerce',
        en: 'E-commerce Platform'
      },
      description: {
        es: 'Desarrollo de una plataforma completa de comercio electrónico con carrito de compras, sistema de pagos y panel de administración.',
        en: 'Development of a complete e-commerce platform with shopping cart, payment system, and admin panel.'
      },
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      gradient: 'from-blue-500 to-cyan-500',
      position: 'col-span-2 row-span-1'
    },
    {
      id: 2,
      title: {
        es: 'Aplicación de Gestión de Tareas',
        en: 'Task Management App'
      },
      description: {
        es: 'Aplicación web para gestionar tareas y proyectos con funcionalidades de arrastrar y soltar, notificaciones y seguimiento.',
        en: 'Web application for managing tasks and projects with drag-and-drop functionality, notifications, and tracking.'
      },
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRhc2slMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      gradient: 'from-pink-500 to-red-500',
      position: 'row-span-2'
    },
    {
      id: 3,
      title: {
        es: 'Dashboard Analítico',
        en: 'Analytics Dashboard'
      },
      description: {
        es: 'Dashboard interactivo para visualización de datos empresariales, con gráficos en tiempo real y filtros avanzados.',
        en: 'Interactive dashboard for business data visualization, with real-time charts and advanced filters.'
      },
      technologies: ['React', 'D3.js', 'Redux', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFzaGJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      gradient: 'from-green-500 to-emerald-500',
      position: 'col-span-1 row-span-1'
    },
    {
      id: 4,
      title: {
        es: 'API RESTful',
        en: 'RESTful API'
      },
      description: {
        es: 'API completa para la gestión de contenidos digitales con autenticación JWT, roles de usuario y documentación.',
        en: 'Complete API for digital content management with JWT authentication, user roles, and documentation.'
      },
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      gradient: 'from-indigo-500 to-purple-500',
      position: 'col-span-1 row-span-1'
    },
    {
      id: 5,
      title: {
        es: 'App Móvil de Fitness',
        en: 'Fitness Mobile App'
      },
      description: {
        es: 'Aplicación móvil para seguimiento de rutinas de ejercicio, nutrición y progreso físico. Incluye planes personalizados.',
        en: 'Mobile app for tracking workout routines, nutrition, and physical progress. Includes personalized plans.'
      },
      technologies: ['React Native', 'Redux', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzcyUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      gradient: 'from-yellow-500 to-orange-500',
      position: 'row-span-2'
    },
    {
      id: 6,
      title: {
        es: 'Plataforma Educativa',
        en: 'Education Platform'
      },
      description: {
        es: 'Plataforma de aprendizaje en línea con cursos, exámenes, certificaciones y foro de discusión.',
        en: 'Online learning platform with courses, exams, certifications, and discussion forum.'
      },
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      gradient: 'from-teal-500 to-blue-500',
      position: 'col-span-2 row-span-1'
    }
  ];

  const getProjectById = (id) => {
    return projects.find(project => project.id === id);
  };

  const currentProject = activeProject ? getProjectById(activeProject) : null;

  return (
    <section 
      id="proyectos" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-400/20 to-transparent"></div>
        <div className="absolute -top-60 -right-60 w-96 h-96 bg-gradient-to-br from-purple-300/5 to-brand-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-60 -left-60 w-96 h-96 bg-gradient-to-tr from-brand-300/5 to-blue-300/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700">
          <h2 className="inline-block text-4xl md:text-5xl font-bold relative">
            <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
              {language === 'es' ? 'Proyectos' : 'Projects'}
            </span>
          </h2>
          <div className="mt-2 animate-on-scroll opacity-0 transition-all duration-700 delay-100">
            <div className="h-1 w-0 bg-gradient-to-r from-brand-400 to-brand-600 mx-auto rounded-full transition-all duration-1000 animate-width"></div>
          </div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-on-scroll opacity-0 transition-all duration-700 delay-200">
            {language === 'es' 
              ? 'Una selección de mis mejores trabajos. Haz clic en cada proyecto para ver más detalles.' 
              : 'A selection of my best works. Click on each project to see more details.'}
          </p>
        </div>
        
        {/* Collage de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 auto-rows-minmax(200px, auto)">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => setActiveProject(project.id)}
              className={`animate-on-scroll opacity-0 transition-all duration-500 rounded-xl overflow-hidden cursor-pointer relative group md:${project.position} transform hover:-translate-y-1 hover:shadow-xl transition-transform duration-300`}
              style={{ transitionDelay: `${200 + (index * 100)}ms` }}
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={project.image} 
                  alt={project.title[language]} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70 mix-blend-multiply`}></div>
              </div>
              
              {/* Contenido superpuesto */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title[language]}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="bg-white/0 group-hover:bg-white/20 backdrop-blur-0 group-hover:backdrop-blur-sm rounded-lg py-2 px-4 mt-2 transform opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm">
                    {language === 'es' ? 'Ver detalles →' : 'View details →'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal de detalle del proyecto */}
        {activeProject && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setActiveProject(null)}
          >
            <div 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col animate-scale-in"
              onClick={e => e.stopPropagation()}
            >
              {/* Cabecera del modal con imagen */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={currentProject.image} 
                  alt={currentProject.title[language]} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient} opacity-70 mix-blend-multiply`}></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {currentProject.title[language]}
                  </h3>
                </div>
                
                <button 
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-200 text-white"
                  onClick={() => setActiveProject(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              {/* Contenido del modal */}
              <div className="p-6 overflow-y-auto">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {currentProject.description[language]}
                </p>
                
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {language === 'es' ? 'Tecnologías' : 'Technologies'}
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProject.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Botones de acción */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex gap-4 justify-end">
                <a 
                  href="#demo" 
                  className={`inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r ${currentProject.gradient} text-white shadow-md hover:shadow-lg transition-shadow duration-300`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  {language === 'es' ? 'Demo en vivo' : 'Live Demo'}
                </a>
                <a 
                  href="#code" 
                  className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                  {language === 'es' ? 'Ver código' : 'View Code'}
                </a>
              </div>
            </div>
          </div>
        )}
        
        {/* Botón para ver más proyectos */}
        <div className="text-center animate-on-scroll opacity-0 transition-all duration-700 delay-500">
          <a 
            href="https://github.com/example" 
            className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 border border-brand-500 dark:border-brand-400 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-brand-500 hover:to-brand-600 hover:text-white hover:border-transparent transition-all duration-300 transform hover:-translate-y-1 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 mr-2 text-brand-500 dark:text-brand-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            <span className="text-brand-500 dark:text-brand-400 group-hover:text-white transition-colors duration-300">
              {language === 'es' ? 'Ver más proyectos en GitHub' : 'See more projects on GitHub'}
            </span>
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
        
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s forwards ease-out;
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s forwards ease-out;
        }
      `}</style>
    </section>
  );
}

export default Projects;
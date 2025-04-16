import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './Navbar';

function Projects() {
  const { language, texts } = useLanguage();
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  
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

  // Datos de los proyectos actualizados
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
      size: 'large'
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
      size: 'md',
      position: 'col-span-12 md:col-span-4 row-span-2'
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
      size: 'md',
      position: 'row-span-1'
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
      size: 'md',
      position: 'row-span-1'
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
      size: 'md',
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
      size: 'lg',
      position: 'col-span-2 row-span-1'
    }
  ];

  const getProjectById = (id) => projects.find(project => project.id === id);
  const currentProject = activeProject ? getProjectById(activeProject) : null;

  return (
    <section 
      id="proyectos" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gray-100 dark:bg-gray-900"
    >
      {/* Fondo con patrón sutil */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'es' ? 'Proyectos' : 'Projects'}
          </h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Explora mi colección de proyectos destacados' 
              : 'Explore my collection of featured projects'}
          </p>
        </div>
        
        {/* Grid de proyectos tipo mosaico */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              } transform transition-all duration-500`}
              onClick={() => setActiveProject(project.id)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden cursor-pointer bg-white dark:bg-gray-800 shadow-lg transition-all duration-500 ${
                hoveredProject === project.id ? 'scale-[1.02] shadow-xl' : ''
              }`}>
                {/* Imagen con overlay */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={project.image} 
                    alt={project.title[language]} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-multiply opacity-90`}></div>
                </div>
                
                {/* Contenido */}
                <div className="relative h-full p-6 flex flex-col justify-end z-10">
                  <div className="transform transition-all duration-500">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {project.title[language]}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm bg-white/20 backdrop-blur-sm rounded-full text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-white/90 text-base mb-6 line-clamp-2">
                      {project.description[language]}
                    </p>
                    
                    <button className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white text-sm transition-all duration-300">
                      {language === 'es' ? 'Ver detalles' : 'View details'}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal mejorado */}
        {activeProject && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveProject(null)}
          >
            <div 
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] animate-scale-in"
              onClick={e => e.stopPropagation()}
            >
              {/* Cabecera del modal */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={projects.find(p => p.id === activeProject).image} 
                  alt={projects.find(p => p.id === activeProject).title[language]} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {projects.find(p => p.id === activeProject).title[language]}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {projects.find(p => p.id === activeProject).technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-sm bg-white/20 backdrop-blur-sm rounded-full text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-all duration-300"
                  onClick={() => setActiveProject(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Contenido del modal */}
              <div className="p-8">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  {projects.find(p => p.id === activeProject).description[language]}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#demo" 
                    className="inline-flex items-center px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-lg transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {language === 'es' ? 'Ver Demo' : 'View Demo'}
                  </a>
                  <a 
                    href="#code" 
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    {language === 'es' ? 'Ver Código' : 'View Code'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .animate-scale-in {
          animation: scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}

export default Projects;
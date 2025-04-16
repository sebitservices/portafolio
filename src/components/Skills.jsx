import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './Navbar';
// Iconos de categorías
import { FaCode, FaServer, FaTools } from 'react-icons/fa';
// Iconos de habilidades de frontend
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
// Iconos de habilidades de backend
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiGraphql } from 'react-icons/si';
import { MdApi } from 'react-icons/md';
// Iconos de herramientas y otros
import { FaGitAlt, FaDocker, FaAws, FaCogs, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
// Iconos de metodologías
import { FaSyncAlt, FaVial, FaCode as FaCleanCode, FaRocket, FaUsers, FaClipboardList } from 'react-icons/fa';
// Iconos para banderas
import { FaGlobeAmericas, FaLanguage } from 'react-icons/fa';

function Skills() {
  const { language, texts } = useLanguage();
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  // Efecto para animaciones al scroll
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.15 }
    );
    
    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Actualizar las categorías con colores más sutiles
  const skillCategories = [
    {
      id: 'frontend',
      title: {
        es: 'Frontend',
        en: 'Frontend'
      },
      icon: <FaCode />,
      color: '#4F46E5',
      bgColor: '#4F46E510',
      skills: [
        { 
          name: 'HTML5/CSS3', 
          level: 95, 
          icon: <FaHtml5 />,
          color: '#E34F26',
          description: {
            es: 'Estructura semántica, Flexbox, Grid, Animaciones',
            en: 'Semantic structure, Flexbox, Grid, Animations'
          }
        },
        { 
          name: 'JavaScript', 
          level: 90, 
          icon: <FaJs />,
          color: '#F7DF1E',
          description: {
            es: 'ES6+, Promesas, Async/Await, DOM, Fetch API',
            en: 'ES6+, Promises, Async/Await, DOM, Fetch API'
          }
        },
        { 
          name: 'TypeScript', 
          level: 85, 
          icon: <SiTypescript />,
          color: '#3178C6',
          description: {
            es: 'Interfaces, Types, Generics, Decorators',
            en: 'Interfaces, Types, Generics, Decorators'
          }
        },
        { 
          name: 'React', 
          level: 88, 
          icon: <FaReact />,
          color: '#61DAFB',
          description: {
            es: 'Hooks, Context, Redux, Next.js, SSR',
            en: 'Hooks, Context, Redux, Next.js, SSR'
          }
        },
        { 
          name: 'Angular', 
          level: 82, 
          icon: <FaAngular />,
          color: '#DD0031',
          description: {
            es: 'Componentes, Servicios, RxJS, NgRx',
            en: 'Components, Services, RxJS, NgRx'
          }
        },
        { 
          name: 'Tailwind CSS', 
          level: 90, 
          icon: <SiTailwindcss />,
          color: '#06B6D4',
          description: {
            es: 'Diseño responsive, Componentes, Temas',
            en: 'Responsive design, Components, Themes'
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
      icon: <FaServer />,
      color: '#16A34A',
      bgColor: '#16A34A10',
      skills: [
        { 
          name: 'Node.js', 
          level: 85, 
          icon: <FaNodeJs />,
          color: '#339933',
          description: {
            es: 'API RESTful, Microservicios, Streams',
            en: 'RESTful APIs, Microservices, Streams'
          }
        },
        { 
          name: 'Express.js', 
          level: 82, 
          icon: <SiExpress />,
          color: '#000000',
          description: {
            es: 'Middleware, Routing, Autenticación',
            en: 'Middleware, Routing, Authentication'
          }
        },
        { 
          name: 'MongoDB', 
          level: 80, 
          icon: <SiMongodb />,
          color: '#47A248',
          description: {
            es: 'Esquemas, Agregaciones, Índices',
            en: 'Schemas, Aggregations, Indexes'
          }
        },
        { 
          name: 'MySQL', 
          level: 78, 
          icon: <SiMysql />,
          color: '#4479A1',
          description: {
            es: 'Relaciones, Joins, Optimización',
            en: 'Relationships, Joins, Optimization'
          }
        },
        { 
          name: 'REST APIs', 
          level: 90, 
          icon: <MdApi />,
          color: '#4C51BF',
          description: {
            es: 'CRUD, Autenticación, JWT, OAuth',
            en: 'CRUD, Authentication, JWT, OAuth'
          }
        },
        { 
          name: 'GraphQL', 
          level: 75, 
          icon: <SiGraphql />,
          color: '#E10098',
          description: {
            es: 'Queries, Mutations, Resolvers',
            en: 'Queries, Mutations, Resolvers'
          }
        }
      ]
    },
    {
      id: 'tools',
      title: {
        es: 'Herramientas',
        en: 'Tools'
      },
      icon: <FaTools />,
      color: '#EA580C',
      bgColor: '#EA580C10',
      skills: [
        { 
          name: 'Git', 
          level: 88, 
          icon: <FaGitAlt />,
          color: '#F05032',
          description: {
            es: 'Branches, Merge, Rebase, CI/CD',
            en: 'Branches, Merge, Rebase, CI/CD'
          }
        },
        { 
          name: 'Docker', 
          level: 75, 
          icon: <FaDocker />,
          color: '#2496ED',
          description: {
            es: 'Contenedores, Compose, Orquestación',
            en: 'Containers, Compose, Orchestration'
          }
        },
        { 
          name: 'AWS', 
          level: 70, 
          icon: <FaAws />,
          color: '#FF9900',
          description: {
            es: 'EC2, S3, Lambda, Cloudfront',
            en: 'EC2, S3, Lambda, Cloudfront'
          }
        },
        { 
          name: 'CI/CD', 
          level: 78, 
          icon: <FaCogs />,
          color: '#43A047',
          description: {
            es: 'GitHub Actions, GitLab CI, Jenkins',
            en: 'GitHub Actions, GitLab CI, Jenkins'
          }
        },
        { 
          name: 'Responsive Design', 
          level: 92, 
          icon: <FaMobileAlt />,
          color: '#9C27B0',
          description: {
            es: 'Mobile First, Media Queries, Flexbox',
            en: 'Mobile First, Media Queries, Flexbox'
          }
        },
        { 
          name: 'UX/UI', 
          level: 85, 
          icon: <FaPaintBrush />,
          color: '#EC407A',
          description: {
            es: 'Figma, Adobe XD, Principios UX',
            en: 'Figma, Adobe XD, UX Principles'
          }
        }
      ]
    }
  ];

  // Obtener la categoría activa y sus habilidades
  const activeSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || [];
  const activeCategoryData = skillCategories.find(cat => cat.id === activeCategory);

  // Habilidades adicionales
  const additionalSkills = [
    { name: 'SEO', icon: <FaGlobeAmericas />, color: '#4285F4' },
    { name: 'Marketing Digital', icon: <FaLanguage />, color: '#34A853' },
    { name: 'Figma', icon: <FaPaintBrush />, color: '#F24E1E' }, 
    { name: 'Adobe XD', icon: <FaPaintBrush />, color: '#FF61F6' }, 
    { name: 'Webpack', icon: <FaCogs />, color: '#8DD6F9' },
    { name: 'Jest', icon: <FaVial />, color: '#C21325' }, 
    { name: 'Redux', icon: <FaReact />, color: '#764ABC' }, 
    { name: 'RxJS', icon: <FaSyncAlt />, color: '#B7178C' }, 
    { name: 'Sass', icon: <FaCss3Alt />, color: '#CC6699' }, 
    { name: 'Material UI', icon: <FaReact />, color: '#0081CB' }, 
    { name: 'Bootstrap', icon: <FaCode />, color: '#7952B3' },
    { name: 'Firebase', icon: <FaServer />, color: '#FFCA28' }, 
    { name: 'NextJS', icon: <FaReact />, color: '#000000' }, 
    { name: 'Vercel', icon: <FaRocket />, color: '#000000' }, 
    { name: 'Netlify', icon: <FaRocket />, color: '#00C7B7' }, 
    { name: 'GitLab CI', icon: <FaCogs />, color: '#FCA121' }
  ];

  // Metodologías
  const methodologies = [
    { name: language === 'es' ? 'Metodologías Ágiles' : 'Agile Methodologies', icon: <FaSyncAlt />, color: '#3B82F6' },
    { name: 'Scrum', icon: <FaUsers />, color: '#10B981' },
    { name: 'Kanban', icon: <FaClipboardList />, color: '#8B5CF6' },
    { name: language === 'es' ? 'Desarrollo TDD' : 'TDD Development', icon: <FaVial />, color: '#F59E0B' },
    { name: language === 'es' ? 'Código Limpio' : 'Clean Code', icon: <FaCleanCode />, color: '#06B6D4' },
    { name: language === 'es' ? 'Integración Continua' : 'Continuous Integration', icon: <FaRocket />, color: '#EC4899' }
  ];

  // Idiomas
  const languages = [
    { 
      name: language === 'es' ? 'Español' : 'Spanish',
      code: 'ES',
      level: 100,
      status: language === 'es' ? 'Nativo' : 'Native',
      gradient: 'from-red-500 to-yellow-500'
    },
    { 
      name: language === 'es' ? 'Inglés' : 'English',
      code: 'EN',
      level: 85,
      status: language === 'es' ? 'Profesional' : 'Professional',
      gradient: 'from-blue-500 to-red-500'
    }
  ];

  return (
    <section 
      id="habilidades" 
      ref={sectionRef}
      className="py-24 bg-gray-100 dark:bg-gray-900"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <h6 className="text-sm font-semibold tracking-wider uppercase text-brand-500 dark:text-brand-400 mb-3 animate-on-scroll opacity-0">
            {language === 'es' ? 'Competencias Profesionales' : 'Professional Skills'}
          </h6>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-on-scroll opacity-0">
            {language === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}
          </h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full mb-6 animate-on-scroll opacity-0"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-on-scroll opacity-0">
            {language === 'es' 
              ? 'Tecnologías y herramientas que domino para crear soluciones digitales excepcionales.' 
              : 'Technologies and tools I master to create exceptional digital solutions.'}
          </p>
        </div>

        {/* Navegación de categorías */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'text-white shadow-md scale-105' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400'
                }`}
                style={{ 
                  backgroundColor: activeCategory === category.id ? category.color : 'transparent'
                }}
              >
                <span className={`mr-2 text-lg`}>{category.icon}</span>
                {category.title[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de habilidades principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {activeSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="animate-on-scroll opacity-0 transition-all duration-500"
              style={{ 
                transitionDelay: `${100 + (index * 50)}ms`,
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`group relative bg-white dark:bg-gray-800 rounded-xl p-6 transition-all duration-300 ${
                hoveredSkill === skill.name 
                  ? 'shadow-lg -translate-y-1' 
                  : 'shadow-md hover:shadow-lg hover:-translate-y-0.5'
              }`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div 
                      className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        color: skill.color,
                        backgroundColor: `${skill.color}10`
                      }}
                    >
                      <span className="text-2xl">{skill.icon}</span>
                    </div>
                    <h3 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300">
                    {skill.level}%
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {skill.description[language]}
                </p>

                <div className="relative h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <div 
                    className="absolute h-full left-0 top-0 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundColor: skill.color
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de habilidades adicionales y lenguajes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Habilidades adicionales */}
          <div className="lg:col-span-2 animate-on-scroll opacity-0">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <FaTools className="w-6 h-6 mr-3 text-brand-500" />
                {language === 'es' ? 'Tecnologías Adicionales' : 'Additional Technologies'}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {additionalSkills.map((skill) => (
                  <span 
                    key={skill.name}
                    className="flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                    style={{ 
                      color: skill.color,
                      backgroundColor: `${skill.color}10`
                    }}
                  >
                    <span className="mr-2">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Idiomas */}
          <div className="animate-on-scroll opacity-0">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <FaLanguage className="w-6 h-6 mr-3 text-brand-500" />
                {language === 'es' ? 'Idiomas' : 'Languages'}
              </h3>
              
              <div className="space-y-6">
                {languages.map((lang) => (
                  <div key={lang.code} className="relative">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-lg bg-brand-500 text-white flex items-center justify-center font-bold">
                        {lang.code}
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-medium text-gray-900 dark:text-white">
                          {lang.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {lang.status}
                        </div>
                      </div>
                      <div className="ml-auto">
                        <div className="text-2xl font-bold text-brand-500">
                          {lang.level}%
                        </div>
                      </div>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-500 transition-all duration-1000 ease-out"
                        style={{ width: `${lang.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Metodologías */}
        <div className="animate-on-scroll opacity-0">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaSyncAlt className="w-6 h-6 mr-3 text-brand-500" />
              {language === 'es' ? 'Metodologías y Prácticas' : 'Methodologies & Practices'}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {methodologies.map((method) => (
                <div 
                  key={method.name}
                  className="group relative p-6 rounded-xl text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white dark:bg-gray-800 shadow-sm"
                  style={{ 
                    backgroundColor: `${method.color}10`
                  }}
                >
                  <div 
                    className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: method.color }}
                  >
                    {method.icon}
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {method.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-on-scroll.show {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;
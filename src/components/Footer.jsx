import { useLanguage } from './Navbar';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone, FaCode } from 'react-icons/fa';
import logo from '../assets/img/sp.webp';

function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-5 h-5" />,
      url: 'https://github.com/sebitservices'
    },
 
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      text: 'contacto@sebdev.com',
      url: 'mailto:contacto@sebdev.com'
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      text: 'Concepción, Chile',
      url: 'https://goo.gl/maps/youraddress'
    },
    {
      icon: <FaPhone className="w-5 h-5" />,
      text: '+56 9 1234 5678',
      url: 'tel:+56912345678'
    }
  ];

  const footerLinks = [
    {
      title: {
        es: 'Navegación',
        en: 'Navigation'
      },
      links: [
        {
          text: {
            es: 'Inicio',
            en: 'Home'
          },
          url: '#inicio'
        },
        {
          text: {
            es: 'Sobre Mí',
            en: 'About Me'
          },
          url: '#sobre-mi'
        },
        {
          text: {
            es: 'Proyectos',
            en: 'Projects'
          },
          url: '#proyectos'
        }
      ]
    },
    {
      title: {
        es: 'Habilidades',
        en: 'Skills'
      },
      links: [
        {
          text: {
            es: 'Frontend',
            en: 'Frontend'
          },
          url: '#habilidades'
        },
        {
          text: {
            es: 'Backend',
            en: 'Backend'
          },
          url: '#habilidades'
        },
        {
          text: {
            es: 'Herramientas',
            en: 'Tools'
          },
          url: '#habilidades'
        }
      ]
    }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 relative">
      {/* Sección principal del footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="SebDev Logo" className="w-12 h-12 object-contain" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Seb<span className="text-brand-500">Dev</span>
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {language === 'es' 
                ? 'Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales.'
                : 'Full Stack Developer passionate about creating exceptional digital experiences.'}
            </p>
            {/* Redes sociales */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces del footer */}
          {footerLinks.map((section) => (
            <div key={section.title[language]} className="col-span-1">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {section.title[language]}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.text[language]}>
                    <a
                      href={link.url}
                      className="text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors duration-300"
                    >
                      {link.text[language]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Información de contacto */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.text}>
                  <a
                    href={info.url}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors duration-300"
                  >
                    <span className="mr-3">{info.icon}</span>
                    {info.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior con copyright */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-6 flex justify-center items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} SebDev | {language === 'es' ? 'Desarrollado con ❤️ por Sebastian Peña Valenzuela' : 'Developed with ❤️ by Sebastian Peña Valenzuela'}
            </p>
          </div>
        </div>
      </div>

      {/* Decoración de fondo con gradiente */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500/20 via-brand-500/40 to-brand-500/20"></div>
    </footer>
  );
}

export default Footer; 
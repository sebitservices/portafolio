import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LanguageContext } from './components/Navbar.jsx'

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'es'
  )
  
  // Actualizar el idioma cuando cambie en localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const currentLang = localStorage.getItem('language')
      if (currentLang && currentLang !== language) {
        setLanguage(currentLang)
      }
    }
    
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [language])
  
  // Textos según el idioma
  const texts = {
    es: {
      portfolioTitle: 'Mi Portafolio',
      devRole: 'Desarrollador Full Stack',
      hero: {
        greeting: "Hola, soy",
        name: "Sebastian",
        title: "Desarrollador Full Stack",
        subtitle: "Creando soluciones digitales con pasión y precisión",
        phrases: [
          "Desarrollo Web",
          "React & Node.js",
          "Apps Responsivas",
          "UI/UX Design"
        ],
        cta: {
          projects: "Ver Proyectos",
          contact: "Contáctame"
        },
        scroll: "Scroll para más"
      }
    },
    en: {
      portfolioTitle: 'My Portfolio',
      devRole: 'Full Stack Developer',
      hero: {
        greeting: "Hi, I'm",
        name: "Sebastian",
        title: "Full Stack Developer",
        subtitle: "Creating digital solutions with passion and precision",
        phrases: [
          "Web Development",
          "React & Node.js",
          "Responsive Apps",
          "UI/UX Design"
        ],
        cta: {
          projects: "View Projects",
          contact: "Contact Me"
        },
        scroll: "Scroll for more"
      }
    }
  }
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
) 
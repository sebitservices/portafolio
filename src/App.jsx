import { useState } from 'react'
import Navbar, { useLanguage } from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
function App() {
  const { language, texts } = useLanguage()
  const t = texts[language]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </div>
  )
}

export default App 

import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import Education from './sections/Education'
import Experience from './sections/Experience'

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects /> 
        <Contact />
        <Footer />
      
    </div>
  )
}

export default Portfolio

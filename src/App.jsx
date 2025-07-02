import React from 'react'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import ParallaxBackground from './components/ParallaxBackground'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className = 'container mx-auto max-w-7xl '>
      <ParallaxBackground/>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      

    </div>
  )
}

export default App

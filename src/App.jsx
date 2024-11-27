import { useState } from 'react'
import styles from './App.module.css'
import Navbar from './components/Navabr/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Project from './components/Project/Project'
import Contact from './components/contact/Contact'

function App() {

  return <div className={styles.app}>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Project />
    <Contact />

  </div>
}

export default App

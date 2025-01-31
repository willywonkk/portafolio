import React from 'react'
import Header from './components/header'
import About from './components/about'
import Experience from './components/experience'
import Training from './components/training'
import Skills from './components/skills'
import Contact from './components/contact'
import './App.css'

function App() {
  return (
    <div className="App min-h-screen bg-gray-50">
      <Header />
      <main>
        <About />
        <Experience />
        <Training />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App

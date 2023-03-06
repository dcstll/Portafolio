import { useState } from 'react'
import './App.css'
import Menu from './Components/Menu/Menu'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Work from './Components/Work/Work'
import Contact from './Components/Contact/Contact'

function App() {
    return (
        <div className="App">
          <Menu />
          <Home />
          <About />
          <Work />
          <Contact />
        </div>
      )
}

export default App

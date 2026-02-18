import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Projects from './pages/Projects'
function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/aboutme' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

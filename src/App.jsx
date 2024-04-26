import { Route, Routes } from 'react-router-dom'
import { useRef, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact' 
import Scroll from './components/Scroll'
import ProjectPage from './pages/ProjectPage'
import projectsJSON from './data/projects.json'

function App() {

  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
    <Navbar projectsRef={projectsRef} contactRef={contactRef}/>
    <Routes>
      <Route exact path='/' element={<HomePage/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path='/projects/:id' element={<ProjectPage/>}></Route>
    </Routes>
    <Scroll/>
    <Footer/>
    </>
  )
}

export default App

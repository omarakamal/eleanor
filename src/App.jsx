import { Route, Routes } from 'react-router-dom'
import { useRef } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact' 
import Scroll from './components/Scroll'

function App() {

  const projectsRef = useRef(null);
  const contactRef = useRef(null);


  return (
    <>
    <Navbar projectsRef={projectsRef} contactRef={contactRef}/>
    <Routes>
      <Route exact path='/' element={<HomePage/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    <Scroll/>
    <Footer/>
    </>
  )
}

export default App

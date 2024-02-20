import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ExperiencePage from './components/Experience'
 

function App() {

  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/experience' element={<ExperiencePage/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default App

import React, {useRef, useContext} from 'react'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Intro from '../components/Intro'
import Contact from '../components/Contact'
import { ThemeContext } from '../contexts/theme.context'

function HomePage() {

  const {theme} = useContext(ThemeContext)

  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div style={{fontFamily: 'Be Vietnam Pro,Inter,system-ui,sans'}} className={`HomePage + ${theme}`}>
        
        <div className='mb-5 pb-5 pt-5'>
          <Intro/>
        </div>

        <div>
          <Skills/>
        </div>

        <div ref={projectsRef}>
          <Projects id="projects" />
        </div>

        <div ref={contactRef} >
          <Contact id="contact" />
        </div>

        

    </div>
  )
}

export default HomePage
import React, { useContext } from 'react'
import { useState } from 'react'
import skillsJSON from '../data/skils.json'
import { ThemeContext } from '../contexts/theme.context'

function Skills() {

    const [skill, setSkill] = useState(skillsJSON)
    const {theme} = useContext(ThemeContext)

  return (
    <div className={`Skills + ${theme}`}>
    <div className='container d-flex flex-column align-items-center text-center pb-5 text-center '>
        <h2 className="row fw-bold fs-1 pb-2 pt-5">Skills</h2>
        <div className="row p-5 ">
            {skill.map((oneSkill)=>{
                return(
                    <div key={oneSkill.index} className="col col-xs-2 align-items-center justify-content-center m-2" >
                        <div className={`skill-card fs-4 fw-bold p-3 ${theme === 'dark' ? 'bg-white' : ''} ${theme === 'dark' ? 'text-black' : ''}`} >
                            {oneSkill}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    </div>
  )
}

export default Skills
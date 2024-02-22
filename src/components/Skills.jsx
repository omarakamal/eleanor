import React from 'react'
import { useState } from 'react'
import skillsJSON from '../data/skils.json'

function Skills() {

    const [skill, setSkill] = useState(skillsJSON)

  return (
    <div className='container-fluid d-flex flex-column align-items-center text-center pb-5' style={{backgroundColor: '#adb5bd'}} >
        <h2 className="row fw-bold fs-1 text-center pb-2 pt-5">Skills</h2>
        <div className="row p-5">
            {skill.map((oneSkill)=>{
                return(
                    <div key={oneSkill.index} className="col col-xs-2 align-items-center justify-content-center m-2" >
                        <div className="skill-card fs-4 fw-bold p-3" >
                            {oneSkill}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Skills
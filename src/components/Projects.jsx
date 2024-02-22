import projectsJSON from '../data/projects.json'
import {useState, useRef} from 'react'
import GithubLogo from '../assets/github-logo.png'
import { Link } from 'react-router-dom'

function ProjectsPage() {

    const [projects, setProjects] = useState(projectsJSON)

  return (
    <div style={{fontFamily: 'Be Vietnam Pro,Inter,system-ui,sans'}} id="projects" className='pb-5 pt-5'>
        <h2 className="text-center pb-3 fw-bold fs-1">Projects</h2>
        <div className="container">
            <div className="row justify-content-center">
                {projects.map((oneProject) => {
                    return (
                        <div key={oneProject.index} className="col-lg-4 col-md-6 col-sm-8 col-xs-1 p-4 mb-5">
                            <h2>{oneProject.name}</h2>
                            <p className='project-description pb-3'>{oneProject.description}</p>
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-3">
                                        <Link to={oneProject.url}><img src={GithubLogo} style={{height: '40px'}} className='col'/></Link>
                                    </div>
                                    <div className="col-3">
                                        <button className='col btn btn-outline-dark fw-bold' style={{height: '40px', width: 'auto', fontSize: '.9rem', transition: '.5s'}}>Demo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        <p className="text-center ">Check out the rest of my work on my <Link to='https://github.com/eleanorpitcher'>GitHub!</Link> </p>   
    </div>
  )
}

export default ProjectsPage
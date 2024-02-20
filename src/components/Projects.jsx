import projectsJSON from '../data/projects.json'
import {useState} from 'react'
import GithubLogo from '../assets/github-logo.png'
import { Link } from 'react-router-dom'

function ProjectsPage() {

    const [projects, setProjects] = useState(projectsJSON)

  return (
    <div style={{fontFamily: 'Be Vietnam Pro,Inter,system-ui,sans'}}>
        <h2 className="text-center pb-2 fw-bold fs-1">Projects</h2>
        <div className="container">
            <div className="row justify-content-center">
                {projects.map((oneProject) => {
                    return (
                        <div key={oneProject.index} className="col-lg-4 col-md-6 col-sm-8 col-xs-1 p-5">
                            <h2>{oneProject.name}</h2>
                            <p>{oneProject.description}</p>
                            <Link to={oneProject.url}><img src={GithubLogo} style={{height: '40px'}} /></Link>
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
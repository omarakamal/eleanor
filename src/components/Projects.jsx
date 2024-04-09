import projectsJSON from '../data/projects.json'
import {useState, useRef, useContext} from 'react'
import GithubLogo from '../assets/github-logo.png'
import GithubLogoWhite from '../assets/github-white.png'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/theme.context'


function ProjectsPage() {

    const {theme} = useContext(ThemeContext)
    const [projects, setProjects] = useState(projectsJSON)
    const githubLogoSrc = theme === 'dark' ? GithubLogoWhite : GithubLogo


  return (
    <div style={{fontFamily: 'Be Vietnam Pro,Inter,system-ui,sans'}} id="projects" className={`Projects + ${theme}`}>
        <h2 className="text-center p-5 fw-bold fs-1">Projects</h2>
        <div className="container pb-5">
            <div className="row justify-content-center">
                {projects.map((oneProject) => {
                    return (
                        <div key={oneProject.index} className="col-lg-4 col-md-6 col-sm-8 col-xs-1 p-4" >    
                            <div >
                                <h2>{oneProject.name}</h2>
                                <p className='project-description pb-3'>{oneProject.description}</p>
                                <div className="container-fluid">
                                    <div className="row justify-content-center">
                                        <div className="col-3">
                                            <Link to={oneProject.url}><img src={githubLogoSrc} style={{height: '40px'}} className='col'/></Link>
                                        </div>
                                        <div className="col-3">
                                        <button className={`col btn fw-bold ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`} style={{height: '40px', width: 'auto', fontSize: '.9rem', transition: '.5s'}}>Demo</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        <p className="text-center pb-5">Check out the rest of my work on <Link to='https://github.com/eleanorpitcher'>GitHub!</Link> </p>   
    </div>
  )
}

export default ProjectsPage
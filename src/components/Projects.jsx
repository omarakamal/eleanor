import projectsJSON from '../data/projects.json'
import {useState, useRef, useContext} from 'react'
import GithubLogo from '../assets/github-logo.png'
import GithubLogoWhite from '../assets/github-white.png'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/theme.context'


function Projects() {

    const {theme} = useContext(ThemeContext)
    const [projects, setProjects] = useState(projectsJSON)
    const githubLogoSrc = theme === 'dark' ? GithubLogoWhite : GithubLogo


  return (
    <div style={{fontFamily: 'Be Vietnam Pro,Inter,system-ui,sans'}} id="projects" className={`Projects + ${theme}`}>
        <h2 className="text-center p-5 fw-bold fs-1">Projects</h2>
        <div className="container-fluid pb-5">
            <div className="row ">
                {projects.map((oneProject) => {
                    return (
                        <div key={oneProject.index} className="col-lg-4 col-md-6 col-sm-8 col-xs-1 p-4 text-center" >    
                                <h2>{oneProject.name}</h2>
                                <div className="container-fluid flex justify-content-center">
                                    <div className='image-container pb-4 position-relative' >
                                        <Link to={`/projects/${oneProject.id}`}>
                                            <img src={`${oneProject.image}`} style={{width:'400px',height:'200px'}} className='project-image' />
                                            <div className='overlay-text'>Learn More</div>
                                        </Link>
                                        
                                    </div>
                                    <div className='skills-container row'>
                                        <p className='text-center'><strong>Tech Stack</strong></p>
                                        <ul className= "d-flex flex-wrap list-unstyled justify-content-center">
                                            {oneProject.skills.map((skill,index)=>{
                                                return(
                                                    <div key={index}>
                                                        <li className={`card mx-1 p-1 ${theme === 'dark' ? 'bg-white' : 'bg-dark'} ${theme === 'dark' ? 'text-black' : 'text-white'}`}>{skill}</li>
                                                    </div>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div className="row justify-content-center pt-3">
                                        <div className="col-3">
                                            <Link to={oneProject.url}><img src={githubLogoSrc} style={{height: '40px'}} className='col'/></Link>
                                        </div>
                                        <div className="col-3">
                                            <Link to={oneProject.url}><button className={`col btn fw-bold ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`} style={{height: '40px', width: 'auto', fontSize: '.9rem', transition: '.5s'}}>Demo</button></Link>
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

export default Projects
import projectsJSON from '../data/projects.json'
import { useState, useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ThemeContext } from '../contexts/theme.context'
import githubLogoSrc from '../assets/github-logo.png'

function ProjectsPage() {
    const { theme } = useContext(ThemeContext)
    const [project, setProject] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        // Filter the project from the list based on the ID
        const selectedProject = projectsJSON.find(proj => proj.id === parseInt(id))
        setProject(selectedProject)
    }, [id])

    return (
        <div key={1}>
            {project && (
                <div className="container-fluid d-flex flex-column align-items-center text-center">
                    <h1 className="display-1 m-4 fw-bold" style={{ letterSpacing: '-4px' }}>{project.name}</h1>

                    <div className="d-flex pt-3 mb-5">
                        <div className="mx-5">
                            <Link to={project.url}>
                                <img src={githubLogoSrc} style={{ height: '40px', marginRight: '10px' }} className='px-2' />
                            </Link>
                            <Link to={project.url}>
                                <button className={`btn px-2 fw-bold ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`} style={{ height: '40px', width: 'auto', fontSize: '.9rem', transition: '.5s' }}>Demo</button>
                            </Link>
                        </div>
                    </div>

                    <p className='mx-5 px-5'>{project.description}</p>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={project.img} alt="" style={{ width: '60vw', borderRadius: '20px' }} />
                    </div>

                    <div className="row p-5">
                    <h2>Tech Stack</h2>
                        {project.all_skills.map((oneSkill, index) => {
                            return (
                                <div key={index} className="col col-xs-2 align-items-center justify-content-center m-2">
                                    <div className={`skill-card fs-5 fw-bold p-3 ${theme === 'dark' ? 'bg-white text-black' : ''}`}>
                                        {oneSkill}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectsPage

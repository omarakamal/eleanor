import React from 'react'
import { Link } from 'react-router-dom'
import ProjectsPage from './Projects'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark p-4 mb-5' style={{fontFamily: 'Be Vietnam Pro,Inter,system-ui,sans'}}>
        <div className='container-fluid'>
            <a className="navbar-brand fw-bold" style={{letterSpacing: '-1.5px'}} >Eleanor Pitcher</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto d-flex flex-row">
        <li className="nav-item">
            <Link className="nav-link px-4 active text-nowrap" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4 text-nowrap">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4 text-nowrap">Experience</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
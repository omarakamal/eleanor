import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/theme.context';

function Navbar({ projectsRef, contactRef }) {

  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleScroll = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`Navbar ${theme}`}>
      <div className='navbar navbar-expand-lg navbar-dark p-4' style={{ fontFamily: 'Be Vietnam Pro,Inter,system-ui,sans' }}>
        <div className='container-fluid'>
          <a className="navbar-brand fw-bold" style={{ letterSpacing: '-1.5px', color: 'white' }}>Eleanor Pitcher</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link px-4 active text-nowrap" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4 text-nowrap" onClick={() => handleScroll(projectsRef)} href='#projects'>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4 text-nowrap" onClick={() => handleScroll(contactRef)} href='#contact'>Contact</a>
              </li>
              <li className="nav-item">
                <div className='form-check form-switch pt-2'>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="themeSwitch"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                  />
                  <label className="form-check-label slider ms-4" htmlFor="themeSwitch"></label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

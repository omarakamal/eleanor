import React from 'react';

function Navbar({ projectsRef, contactRef }) {

  const handleScroll = (ref) => {
    console.log('handleScroll called');
    console.log('ref:', ref);

    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark p-4 mb-5' style={{ fontFamily: 'Be Vietnam Pro,Inter,system-ui,sans' }}>
      <div className='container-fluid'>
        <a className="navbar-brand fw-bold" style={{ letterSpacing: '-1.5px' }}>Eleanor Pitcher</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto d-flex flex-row">
          <li className="nav-item">
            <a className="nav-link px-4 active text-nowrap" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-4 text-nowrap" onClick={() => handleScroll(projectsRef)} href='#projects'>Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-4 text-nowrap" onClick={() => handleScroll(contactRef)} href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
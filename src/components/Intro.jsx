import React, { useContext, useEffect, useState } from 'react'
import LocationPin from '../assets/location-pin.png'
import LocationPinWhite from '../assets/location-white.png'
import { ThemeContext } from '../contexts/theme.context'
import CloudImg from '../assets/knotty-asian-swirl-cloud.png'
import BcnSkyline from '../assets/bcn-skyline.png'

function Intro() {

  const {theme} = useContext(ThemeContext)
  const pinSrc = theme === 'dark' ? LocationPinWhite : LocationPin 


  return (
    <div>
      <div className="container-fluid d-flex flex-column align-items-center text-center" >
          <h1 className="m-4 row">Hi, I'm Eleanor,</h1>
          <h2 className="display-1 m-4 fw-bold" style={{letterSpacing: '-4px'}} >A Front-End Developer.</h2>
        </div>
        <div className="container-fluid d-flex flex-column align-items-center text-center">
          <div className="row text-center justify-content-center">
            <p className="col-7 fs-3 m-4">From digital marketer to full-stack developer, I bring a unique blend of technical expertise and creative insight to my work, as well as a deep understanding of user experience.</p>
          </div>
        </div>
        
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              <div className="col-1 col-md-1 mt-4">
                <img src={pinSrc} style={{height: '30px', width: 'auto' }}/>
              </div>
              <div className="col-1 col-md-1 mt-4">
                <p className='fs-5 col-md-1 fw-bold'>Barcelona</p>
              </div>    
            </div>
        </div>
    </div>
  )
}

export default Intro
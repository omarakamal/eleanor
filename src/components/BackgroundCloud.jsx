import React from 'react'
import CloudImg from '../assets/knotty-asian-swirl-cloud.png'

function BackgroundCloud() {
  return (
    <div className='background-images'>
        <div className='cloud-container'>
            <img src={CloudImg} className='background-image' />
            <img src={CloudImg} className='background-image' />
            <img src={CloudImg} className='background-image' />
        </div>
    </div>
  )
}

export default BackgroundCloud
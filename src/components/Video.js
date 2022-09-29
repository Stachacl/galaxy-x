import React from 'react'
import './VideoStyles.css'
import { Link } from 'react-router-dom'
import spaceVideo from '../assets/space.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={spaceVideo} type="video/mp4" />
        </video>
        <div className='content'> 
        <h1> Space: the final frontier</h1>
        <p> It's a five-year mission to explore strange new worlds, to seek our new life and new civilizations, to boldly go where no man has gone before.</p>
        </div>
        <div>
          <Link to="/pricing" className='btn'>Pricing</Link>
          <Link to="/contact" className='btn btn-light'>Launch</Link>
        </div>
    </div>
  )
}

export default Video
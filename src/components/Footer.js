import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin, FaPhone, FaSearchLocation  } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <Link className='location-icon'> 
                    <FaSearchLocation />
                    </Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer
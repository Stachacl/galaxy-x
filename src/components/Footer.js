import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin, FaPhone, FaSearchLocation, FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <div className='footer-icon'> 
                    <FaSearchLocation />
                    </div>
                    <div>
                    <p> 10700 Escondido Canyon Rd, Agua Dulce, CA 91390, United States
                    </p>
                    </div>
                </div>
                <div className='phone'>
                     <div className='footer-icon'> 
                    <FaPhone />
                    </div>
                    <p>  +1 661-268-0840 </p>
                </div>

                <div className='email'>
                     <div className='footer-icon'> 
                    <FaMailBulk />
                    </div>
                    <p> tiberius@space-x.com </p>
                </div>

            </div>


            <div className='right'>
              <div>
                 <p> Join our award winning team and follow us on social media.
                 </p>
        
                 <div className='footer-icon right'> 
                    <FaGithub className='footer-icon right' />
                    <FaTwitter className='footer-icon right'/>
                    <FaLinkedin className='footer-icon right'/>
                    </div>
                 </div>
              </div>
        </div>
    </div>
  )
}

export default Footer
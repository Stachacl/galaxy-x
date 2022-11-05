import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin, FaPhone, FaSearchLocation, FaMailBulk } from 'react-icons/fa'



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
                 <p> This website was created by Stacha Clemens. If you wish to contact her - please connect via Twitter
                 </p>
        
                 <div className='footer-icon right'> 
                   <a href=" https://github.com/Stachacl/galaxy-x"> <FaGithub className='footer-icon right' /> </a> 
                   <a href="https://twitter.com/Stacha_cl">  <FaTwitter className='footer-icon right'/>  </a> 
                   <a href="https://twitter.com/Stacha_cl">  <FaLinkedin className='footer-icon right'/> </a> 

                   {/* <a href="https://uxdesign.cc/how-to-get-the-most-out-of-the-alt-attribute-4c9b553ca9d9"> <i><FaLinkedin className='footer-icon right'/></i> </a> */}

             
                    </div>
                 </div>
              </div>
        </div>
    </div>
  )
}

export default Footer
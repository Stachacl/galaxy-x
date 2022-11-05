import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import { FaTwitter, FaGithub, FaLinkedin, FaPhone, FaSearchLocation, FaMailBulk } from 'react-icons/fa'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='CONTACT GALAXY X' text='This website was created by Stacha Clemens.'> 
            </HeroImage>
            <Form />
            <div className='container center footer-icon'> 
                   <p> Disclaimer: If you wish to contact Stacha - please connect via social media listed below.</p>
            </div>
            <div className='container center footer-icon'> 
                   <a href=" https://github.com/Stachacl/galaxy-x"> <FaGithub className='footer-icon right' /> </a> 
                   <a href="https://twitter.com/Stacha_cl">  <FaTwitter className='footer-icon right'/>  </a> 
                   <a href="https://www.linkedin.com/in/stacha-c-a7b3b51bb/">  <FaLinkedin className='footer-icon right'/> </a> 
                </div>
            <Footer/>
        </div>
    )
}

export default Contact

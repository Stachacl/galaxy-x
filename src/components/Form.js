import React from 'react'
import './FormStyles.css'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'


const Form = () => {
    return (
        <div className='form'>
            <form>
                <label>Your Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Subject</label>
                <input type='text'></input>
                <label>Details</label>
                <textarea rows='6' placeholder='Type a short message here' />

                <div className='container center footer-icon'> 
                   <p> Disclaimer: If you wish to contact Stacha - please connect via social media listed below.</p>
                </div>
                <div className='container center footer-icon pb2'> 
                   <a href=" https://github.com/Stachacl/galaxy-x"> <FaGithub className='footer-icon right center' /> </a> 
                   <a href="https://twitter.com/Stacha_cl">  <FaTwitter className='footer-icon right center'/>  </a> 
                   <a href="https://www.linkedin.com/in/stacha-c-a7b3b51bb/">  <FaLinkedin className='footer-icon  center'/> </a> 
                </div>

                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Form

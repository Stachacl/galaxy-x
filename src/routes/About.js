import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'


const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='About' text="H. P. Lovecraft's novella The Dream-Quest of Unknown Kadath" >
            </HeroImage>
            <div  className="about"> 
        <p> At length, sick with longing for those glittering sunset streets and cryptical hill lanes among ancient tiled roofs, nor able sleeping or waking to drive them from his mind, Carter resolved to go with bold entreaty whither no man had gone before, and dare the icy deserts through the dark to where unknown Kadath, veiled in cloud and crowned with unimagined stars, holds secret and nocturnal the onyx castle of the Great Ones. </p>
      </div>
            <Footer/>
        </div>
    )
}

export default About
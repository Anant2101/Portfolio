import React from 'react'
import './Hero.css'
import resume from '../../doc/resume.pdf'

const Hero = () => {
    return (
        <section>
            <div className='hero-container' id='hero'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <div className='hero-content'>
                            <h2>I am Anant...</h2>
                            <span className='description'>React Developer</span>
                            <p className='details'>
                                Enthusiastic and highly motivated FrontEnd fresher with a solid understanding of core JavaScript and ReactJS concepts seeking opportunities to expand my skills in web development.
                            </p>
                            <a href={resume} download={"Anant_resume"} >
                                <button className='contact-btn' >View Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className='col-sm-6'><div className='hero-img'>
                        <div>
                            <div className='tech-icon'>
                                <img src='./assets/images/Final.jpeg' style={{ maxWidth: '600px', height: '350px', borderRadius: '10px' }} />
                            </div>
                        </div>
                    </div></div>
                </div>
            </div>

        </section>
    )
}

export default Hero

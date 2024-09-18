import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <img className='logo' src='./assets/images/coding.png'></img>
                <ul>
                    <li>
                        <Link to='hero' smooth={true} offset={-70} duration={500} className='menu-item'>Home</Link>
                    </li>
                    <li>
                        <Link to='skills' smooth={true} offset={-70} duration={500} className='menu-item'>Skills</Link>
                    </li>
                    <li>
                        <Link to='work-experience' smooth={true} offset={-70} duration={500} className='menu-item'>Work Experience</Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} offset={-70} duration={500} className='menu-item'>Contact Me</Link>
                    </li>

                </ul>

            </div>
        </nav>


    )
}

export default Navbar

import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
    return (
        <section className='contact-container' id='contact'>
            <h5>Contact Me</h5>
            <div className='row'></div>
            <div className='contact-content'>
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl="./assets/images/email.png"
                        text="anantchaturvedi74@gmail.com"
                    />
                    <ContactInfoCard
                        iconUrl="./assets/images/code.png"
                        text="https://github.com/Anant2101"
                    />
                </div>
                {/*              
                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div> */}
            </div>
        </section>
    )
}

export default ContactMe

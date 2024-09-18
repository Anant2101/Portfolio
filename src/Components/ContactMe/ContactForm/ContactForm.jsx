import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className='cont-form-content'>
            <form>
                <div className='name-container'>
                    <input type='text' name='firstname' placeholder='First Name'></input>
                    <input type='text' name='lastname' placeholder='Last Name'></input>
                </div>

                <input type='text' name='email' placeholder='Email' />
                <textarea type='text' name='message' placeholder='Message' rows={3} />

                <button>Send</button>
            </form>
        </div>
    )
}

export default ContactForm

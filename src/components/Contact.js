import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id='contact'>
    <div className="contact-form">
        <h1>Get In Touch</h1>
        <p>Contact me</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="email" placeholder="Email" class="full-width" />
        <input type="text" placeholder="Phone Number" class="full-width" />
        <textarea placeholder="Type your message..."></textarea>
    </div>
    </section>
  )
}

export default Contact

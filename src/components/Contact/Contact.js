import React from 'react'
import './Contact.css'
import { ContactForm } from './ContactForm'

export const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-wrapper">
        <div className="contact-boxes">
          <a href="https://www.linkedin.com/in/emiliasaberski/">
            <div className="contact-element">
              <p>Social</p>
              <span>Linkedin</span>
            </div>
          </a>
          {/* <a href="mailto:emilia@saberski.com">
            <div className="contact-element">
              <p>Mail</p>
              <span>emilia@saberski.com</span>
            </div>
          </a> */}
          <a href="tel:+46703632255">
            <div className="contact-element">
              <p>Phone</p>
              <span>+46(0)703632255</span>
            </div>
          </a>
        </div>
        <ContactForm />
      </div>
      <h2>Contact</h2>
    </section>
  )
}

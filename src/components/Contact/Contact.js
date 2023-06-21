import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-wrapper">
        <a href="https://www.linkedin.com/in/emiliasaberski/">
          <div className="contact-element">
            <span>Linkedin</span>
          </div>
        </a>
        <a href="mailto:emilia@saberski.com">
          <div className="contact-element">
            <span>Mail</span>
          </div>
        </a>
      </div>
      <h2>Contact</h2>
    </section>
  )
}

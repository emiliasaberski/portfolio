import React from 'react'
import './Contact.css'
import { ContactForm } from './ContactForm'

export const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-wrapper">
        <div className="contact-boxes">
          <div className="contact-element">
            <a
              href="https://www.linkedin.com/in/emiliasaberski/"
              target="_blank"
              rel="noreferrer">
              <p>Social</p>
              <span>Linkedin</span>
            </a>
          </div>
          <div className="contact-element">
            <a
              href="https://github.com/emiliasaberski"
              target="_blank"
              rel="noreferrer">
              <p>Dev</p>
              <span>GitHub</span>
            </a>
          </div>
          <div className="contact-element">
            <a href="tel:+46703632255">
              <p>Phone</p>
              <span>+46(0)703632255</span>
            </a>
          </div>
          <div className="contact-element">
            <a
              href="https://drive.google.com/file/d/1qBLr6C74lrmTy-CWb7Bnl1N5AKZIlnud/view?usp=sharing"
              target="_blank"
              rel="noreferrer">
              <p>Doc</p>
              <span>Resume</span>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
      <h2>Contact</h2>
    </section>
  )
}

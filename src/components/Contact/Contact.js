import React from 'react'
import './Contact.css'
import { ContactForm } from './ContactForm'

export const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-wrapper">
        <div className="contact-boxes">
          <a
            href="https://www.linkedin.com/in/emiliasaberski/"
            target="_blank"
            rel="noreferrer">
            <div className="contact-element">
              <p>Social</p>
              <span>Linkedin</span>
            </div>
          </a>
          <a
            href="https://github.com/emiliasaberski"
            target="_blank"
            rel="noreferrer">
            <div className="contact-element">
              <p>Dev</p>
              <span>GitHub</span>
            </div>
          </a>
          <a href="tel:+46703632255">
            <div className="contact-element">
              <p>Phone</p>
              <span>+46(0)703632255</span>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1qBLr6C74lrmTy-CWb7Bnl1N5AKZIlnud/view?usp=sharing"
            target="_blank"
            rel="noreferrer">
            <div className="contact-element">
              <p>Doc</p>
              <span>Resume</span>
            </div>
          </a>
        </div>
        <ContactForm />
      </div>
      <h2>Contact</h2>
    </section>
  )
}

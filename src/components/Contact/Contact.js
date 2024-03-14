import React, { useRef } from 'react'
import { useInView } from 'framer-motion'
import './Contact.css'
import { ContactForm } from './ContactForm'

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="contact-container" ref={ref} id="contact">
      <h2
        style={{
          transform: isInView ? 'none' : 'translateX(-100%)',
          opacity: isInView ? 1 : 0,
          transition: ' 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
          // eslint-disable-next-line max-len
        }}>Contact
      </h2>
      <div className="contact-wrapper">
        <div
          className="contact-boxes"
          style={{
            transform: isInView ? 'none' : 'translateX(100%)',
            opacity: isInView ? 1 : 0,
            transition: ' 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s'
          }}>
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
    </section>
  )
}

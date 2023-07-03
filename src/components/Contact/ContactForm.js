/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })
  }

  return (
    <div className="contact-form">
      <form
        ref={form}
        onSubmit={sendEmail}>
        <label className="contact-label">Name</label>
        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder="Your name" />
        <label className="contact-label">Email</label>
        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Your email" />
        <label className="contact-label">Message</label>
        <textarea
          className="contact-input"
          name="message"
          placeholder="Write your message..." />
        <input
          className="contact-btn"
          type="submit"
          value="Send" />
      </form>
    </div>
  )
}

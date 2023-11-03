/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import './Contact.css'
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorsState, setErrorsState] = useState({});
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-use-before-define
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrorsState(validationErrors);
      return;
    }

    emailjs.sendForm(
      'service_spzdi3d',
      'template_dooaov4',
      form.current,
      'R3AjdHxCmnOjbTMDW'
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })

    setTimeout(() => {
      setEmailSent(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  }

  const validateFields = () => {
    const errors = {};

    // Validate name
    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    // Validate email
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    // Validate message
    if (!message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  return (
    <div className="contact-form" ref={ref}>
      <form
        style={{
          transform: isInView ? 'none' : 'translateY(100%)',
          opacity: isInView ? 1 : 0,
          transition: ' 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s'
        }}
        ref={form}
        onSubmit={sendEmail}>
        {/* <label className="contact-label">Name</label> */}
        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)} />
        {errorsState.name && <div className="error">{errorsState.name}</div>}

        {/* <label className="contact-label">Email</label> */}
        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        {errorsState.email && <div className="error">{errorsState.email}</div>}

        {/* <label className="contact-label">Message</label> */}
        <textarea
          className="contact-input"
          name="message"
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)} />
        {errorsState.message && <div className="error">{errorsState.message}</div>}

        {emailSent && <div className="success">Email sent!</div>}

        <input
          className="button"
          type="submit"
          value="Send" />
      </form>
    </div>
  )
}

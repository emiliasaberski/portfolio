import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <div className="content-container">
      <div className="footer">
        <div className="footer-links">
          <a
            href="mailto:emilia@saberski.com"
            target="_blank"
            rel="noreferrer">
            <Mail />
          </a>
          <a
            href="https://www.linkedin.com/in/emiliasaberski/"
            target="_blank"
            rel="noreferrer">
            <Linkedin />
          </a>
          <a
            href="https://github.com/emiliasaberski"
            target="_blank"
            rel="noreferrer">
            <Github />
          </a>
        </div>
        <p>© Emilia Saberski 2023</p>
      </div>
    </div>
  )
}
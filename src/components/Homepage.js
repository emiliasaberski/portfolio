import React from 'react';
import { About } from './About/About';
import { Contact } from './Contact/Contact';
import { Portfolio } from './Portfolio/Portfolio';
import { Start } from './Start/Start';
import '../index.css'

export const HomePage = () => {
  return (
    <div className="content-container">
      <Start />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
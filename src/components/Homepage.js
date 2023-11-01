import React from 'react';
import { About } from './About/About';
import { Contact } from './Contact/Contact';
import { Portfolio } from './Portfolio/Portfolio';
import { Start } from './Start/Start';
import '../index.css'

export const HomePage = () => {
  return (
    <>
      <Start />
      <div className="content-container">
        <div className="wrapper">
          <About />
        </div>
        <div className="wrapper">
          <Portfolio />
        </div>
        <div className="wrapper">
          <Contact />
        </div>
      </div>
    </>
  );
}
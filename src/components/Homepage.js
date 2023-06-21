import React from 'react';
import { Start } from './Start/Start';
import { About } from './About/About';
import { Contact } from './Contact/Contact';
import { Portfolio } from './Portfolio/Portfolio';

export const HomePage = () => {
  return (
    <>
      <Start />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
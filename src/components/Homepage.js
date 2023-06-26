import React from 'react';
import { About } from './About/About';
import { Contact } from './Contact/Contact';
import { Portfolio } from './Portfolio/Portfolio';
import { Start } from './Start/Start';

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
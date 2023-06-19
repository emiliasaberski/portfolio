import React from 'react';
import { Start } from './Start/Start';
import { About } from './About/About';
import { Contact } from './Contact/Contact';
import { PortfolioDev } from './Portfolio/PortfolioDev';
import { PortfolioMotion } from './Portfolio/PortfolioMotion';

export const HomePage = () => {
  return (
    <>
      <Start />
      <About />
      <PortfolioDev />
      <PortfolioMotion />
      <Contact />
    </>
  );
}
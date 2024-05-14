/* eslint-disable max-len */
import React from 'react';
import { About } from './About/About';
import { Contact } from './Contact/Contact';
import { Portfolio } from './Portfolio/Portfolio';
// import { Start } from './Start/Start';
import '../index.css'

export const HomePage = () => {
  return (
    <>
      {/* <Start /> */}
      <div className="content-container">
        <div className="wrapper">
          <About />
        </div>
        {/* <svg
          id="Layer_1"
          className="separator"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 300">
          <path className="cls-1" d="M0,174.84c146.21,8.42,195.46-139.33,378.62-138.28s270.75,164.6,434.96,165.65,183.99-114.36,297.67-119.63,108.64,115.43,261.27,119.64,138.95-169.49,311.58-169.48c187.37,0,93.68,200,310.53,200,282.15,0,294.74,231.58,294.74,231.58l-98.95,176.84s-741.05,25.26-745.26,25.26-1049.47-32.63-1049.47-32.63l-514.74-5.26L0,174.84Z" />
        </svg> */}
        <div className="wrapper">
          <Portfolio />
        </div>
        {/* <svg
          id="Layer_1"
          className="separator"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 300">
          <path className="cls-1" d="M0,174.84c146.21,8.42,195.46-139.33,378.62-138.28s270.75,164.6,434.96,165.65,183.99-114.36,297.67-119.63,108.64,115.43,261.27,119.64,138.95-169.49,311.58-169.48c187.37,0,93.68,200,310.53,200,282.15,0,294.74,231.58,294.74,231.58l-98.95,176.84s-741.05,25.26-745.26,25.26-1049.47-32.63-1049.47-32.63l-514.74-5.26L0,174.84Z" />
        </svg> */}
        <div className="wrapper">
          <Contact />
        </div>
        {/* <svg
          id="Layer_1"
          className="separator"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 300">
          <path className="cls-1" d="M0,174.84c146.21,8.42,195.46-139.33,378.62-138.28s270.75,164.6,434.96,165.65,183.99-114.36,297.67-119.63,108.64,115.43,261.27,119.64,138.95-169.49,311.58-169.48c187.37,0,93.68,200,310.53,200,282.15,0,294.74,231.58,294.74,231.58l-98.95,176.84s-741.05,25.26-745.26,25.26-1049.47-32.63-1049.47-32.63l-514.74-5.26L0,174.84Z" />
        </svg> */}
      </div>
    </>
  );
}
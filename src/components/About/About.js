/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useRef } from 'react'
import { useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react';
import './About.css'

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="intro-container" id="about">
      <h2
        style={{
          transform: isInView ? 'none' : 'translateX(-100%)',
          opacity: isInView ? 1 : 0,
          transition: ' 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}>About
      </h2>
      <div ref={ref} className="intro-wrapper">
        <h3
          style={{
            transform: isInView ? 'none' : 'translateX(100%)',
            opacity: isInView ? 1 : 0,
            transition: ' 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
          }}>I'm a creative designer with a strong passion for motion design and frontend development.
        </h3>
        <p
          style={{
            transform: isInView ? 'none' : 'translateX(100%)',
            opacity: isInView ? 1 : 0,
            transition: ' 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s'
          }}>
            Over the past decade I've worked with motion and graphic
            design in various forms. This includes shaping the visual style of social media videos
            during my time at KIT and freelancing for brands like Storytel, Skin City, Spendrups
            and Internetstiftelsen.
            I'm proficient in motion design, graphic design, 3D modeling and animation, as well as
            frontend development, particularly focusing on React, Javascript, and CSS frameworks.
            I'm excited to continue growing in my career and am enthusiastic about bringing
            my design and technology passion to my next role.
          <br />
          <br />
          <a href="#contact">
            Let's talk!
            <ChevronDown className="icon-about" />
          </a>
        </p>
      </div>
    </section>
  )
}

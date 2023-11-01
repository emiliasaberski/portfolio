/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useRef } from 'react'
import { useInView } from 'framer-motion'
import './About.css'
import '../../index.css'

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="intro-container" id="about">
      <div ref={ref} className="intro-wrapper">
        <h3
          style={{
            transform: isInView ? 'none' : 'translateX(-100%)',
            opacity: isInView ? 1 : 0,
            transition: ' 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
            // eslint-disable-next-line max-len
          }}>I'm a creative designer with a strong passion for motion design and frontend development.
        </h3>
        <p
          style={{
            transform: isInView ? 'none' : 'translateX(-100%)',
            opacity: isInView ? 1 : 0,
            transition: ' 2.2s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s'
            // eslint-disable-next-line max-len
          }}>
            Over the past decade I've worked with motion and graphic
            design in various forms. This includes shaping the visual style of social media videos
            during my time at KIT and freelancing for brands like Storytel, SOS Alarm, Stora Journalistpriset
            and Internetstiftelsen.
            I'm proficient in motion design, graphic design, 3D modeling and animation, as well as
            frontend development, particularly focusing on React, Javascript, and CSS frameworks.
            I'm excited to continue growing in my career and am enthusiastic about bringing
            my design and technology passion to my next role. If you're looking for a motivated
          and creative professional who's always eager to learn, please feel free to reach out to me.
        </p>
        {/* <div className="skills-wrapper">
            <div
              className="skills-group"
              style={{
                transform: isInView ? 'none' : 'translateY(100%)',
                opacity: isInView ? 1 : 0,
                transition: ' 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s'
              }}>
              <span className="category">Skills</span>
              <p>Motion Design</p>
              <p>Graphic Design</p>
              <p>Illustration</p>
              <p>Frontend Dev</p>
              <p>UX / UI</p>
              <p>3D</p>
              <p>Marketing</p>
            </div>
            <div
              className="skills-group"
              style={{
                transform: isInView ? 'none' : 'translateY(100%)',
                opacity: isInView ? 1 : 0,
                transition: ' 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 2.5s'
              }}>
              <span className="category">Toolbox</span>
              <p>Figma</p>
              <p>GitHub</p>
              <p>Adobe Suite</p>
              <p>Blender</p>
              <p>Google Cloud</p>
              <p>React</p>
              <p>Javascript</p>
              <p>HTML5</p>
              <p>CSS</p>
              <p>Node.js</p>
              <p>Next.js</p>
              <p>Mongo DB</p>
            </div>
          </div> */}
      </div>
      <h2>About</h2>
    </section>
  )
}

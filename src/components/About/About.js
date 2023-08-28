import React, { useRef } from 'react'
import { useInView } from 'framer-motion'
import './About.css'

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="intro-container" id="about">
      <div className="intro-wrapper">
        <div ref={ref}>
          <p
            style={{
              transform: isInView ? 'none' : 'translateX(-100%)',
              opacity: isInView ? 1 : 0,
              transition: ' 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
            }}>I am a creative frontend developer.
            In 2023 I changed career path from graphics and motion
            design to developer. I am excited to continue my career
            growth as a frontend developer, and I am eager to bring my
            passion for design and technology to my next role. If you
            are looking for a motivated and creative developer,
            please feel free to reach out to me.
          </p>
          <div className="skills-wrapper">
            <div
              className="skills-group"
              style={{
                transform: isInView ? 'none' : 'translateY(100%)',
                opacity: isInView ? 1 : 0,
                transition: ' 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s'
              }}>
              <span className="category">Skills</span>
              <p>React</p>
              <p>Javascript</p>
              <p>HTML5</p>
              <p>CSS</p>
              <p>Node.js</p>
              <p>Tailwind</p>
              <p>Mongo DB</p>
              <p>Motion Design</p>
              <p>Graphic Design</p>
              <p>Illustration</p>
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
            </div>
          </div>
        </div>
      </div>
      <h2>About</h2>
    </section>
  )
}

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
            }}>I am a creative fullstack developer.
            In 2023 I changed career path from graphics and motion
            design to developer. I am excited to continue my career
            growth as a Fullstack Developer, and I am eager to bring my
            passion for design and technology to my next role. If you
            are looking for a motivated and creative Fullstack Developer,
            please feel free to reach out to me.
          </p>
        </div>
      </div>
      <h2>About</h2>
    </section>
  )
}

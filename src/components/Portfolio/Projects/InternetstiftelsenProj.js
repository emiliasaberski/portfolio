/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/style-prop-object */
import React from 'react'
import { Link } from 'react-router-dom'
import IS1 from '../../../assets/IS_mockup_karusell-01.png'
import IS2 from '../../../assets/IS_2.gif'
import IS4 from '../../../assets/IS_6.mp4'
import './Projects.css'

const BackBtn = () => {
  return (
    <Link to="/">
      <button
        className="button-project"
        type="button">
        Back to Home
      </button>
    </Link>
  );
}

export const InternetstiftelsenProj = () => {
  return (
    <div className="project-container">
      <BackBtn />
      <div className="project-content">
        <img className="project-img" src={IS2} alt="Internetstiftelsen citatkort" />
        <div className="project-content-inline">
          <p>
            I have produced social media templates for several of Internetstiftelsen&apos;s
            media campaigns. This include both video and still content produced in line
            with Internetstiftelsen&apos;s graphical guidelines. I also did video editing, audio and
            grading.
          </p>
          <video
            className="project-video"
            width="100%"
            src={IS4}
            type="video/mp4"
            autoPlay
            loop />
          <img
            className="project-img-small"
            src={IS1}
            alt="Internetstiftelsen karusell" />
        </div>
      </div>
      <h2>Internetstiftelsen</h2>
    </div>
  )
}
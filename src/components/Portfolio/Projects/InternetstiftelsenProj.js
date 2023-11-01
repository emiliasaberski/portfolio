/* eslint-disable react/style-prop-object */
import React from 'react'
import { Link } from 'react-router-dom'
import IS1 from '../../../assets/IS_mockup_karusell-01.png'
import IS2 from '../../../assets/IS_2.gif'
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
            Production of social media templates for Internetstiftelsen.
          </p>
          <img className="project-img-small" src={IS1} alt="Internetstiftelsen karusell" />
        </div>
      </div>
      <h2>Worn Vintage</h2>
    </div>
  )
}
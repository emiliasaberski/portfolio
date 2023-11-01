/* eslint-disable react/style-prop-object */
import React from 'react'
import { Link } from 'react-router-dom'
import Worn1 from '../../../assets/Worn_pressrelease_comp_Page_1.png'
import Worn2 from '../../../assets/Worn_produktkatalog_Page_7.png'
import Worn3 from '../../../assets/Worn_pressrelease_comp_Page_3.png'
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

export const WornProj = () => {
  return (
    <div className="project-container">
      <BackBtn />
      <div className="project-content">
        <img className="project-img" src={Worn1} alt="Worn pressrelease" />
        <div className="project-content-inline">
          <p>
            For the launch of Worn&apos;s own line of leather jackets I got to do the
            press release and product catalog.
          </p>
          <img className="project-img-small" src={Worn2} alt="Worn product catalogue" />
          <img className="project-img-small" src={Worn3} alt="Worn product catalogue" />
        </div>
      </div>
      <h2>Worn Vintage</h2>
    </div>
  )
}
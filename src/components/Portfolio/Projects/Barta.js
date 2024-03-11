/* eslint-disable react/style-prop-object */
import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'
import ReactPlayer from 'react-player'
import Bärta1 from '../../../assets/Barta_1.png'
import Bärta3 from '../../../assets/Barta_3.png'

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

export const Barta = () => {
  return (
    <div className="project-container">
      <BackBtn />
      <div className="project-content">
        <ReactPlayer
          className="project-video"
          width="100%"
          url="https://www.youtube.com/watch?v=LA_NodpyL8M"
          controls />
        <div className="project-content-inline">
          <p>
            My mission was to gain awarness for Bärta with this pre roll. By highlightning the pea
            I wanted to capture the essence of Bärta&apos;s brand. From detailed storyboard to
            production of animations and 3D-models, every aspect of the film production has been
            carefully crafted.
          </p>
          <img className="project-img-small" src={Bärta1} alt="Still from Bärta video" />
          <img className="project-img-small" src={Bärta3} alt="Still from Bärta video" />
        </div>
      </div>
      <h2>Bärta</h2>
    </div>
  )
}

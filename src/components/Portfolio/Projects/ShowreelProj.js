/* eslint-disable react/style-prop-object */
import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'
import ReactPlayer from 'react-player'

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

export const ShowreelProj = () => {
  return (
    <div className="project-container">
      <BackBtn />
      <div className="project-content">
        <ReactPlayer
          className="project-video"
          width="100%"
          url="https://player.vimeo.com/video/868286928?h=76e1163932"
          controls />
        <div className="project-content-inline">
          <p>
          My showreel for 2023 containing selected projects and technologies.
          </p>
        </div>
      </div>
      <h2>Showreel</h2>
    </div>
  )
}

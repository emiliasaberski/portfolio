/* eslint-disable react/style-prop-object */
import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'
import ReactPlayer from 'react-player'
import Storytel1 from '../../../assets/Storytel_2.png'
import Storytel2 from '../../../assets/Storytel_3.png'

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

export const StorytelProj = () => {
  return (
    <div className="project-container">
      <BackBtn />
      <div className="project-content">
        <ReactPlayer
          className="project-video"
          width="100%"
          url="https://vimeo.com/880090176"
          controls />
        <div className="project-content-inline">
          <p>
          Together with Brand New Story and Storytel I produced this video to explain
          Storytel&apos;s business model for their authors and publishers. I created the storyboard
          and thereafter produced the video in line with Storytel&apos;s graphical guidelines.
          </p>
          <img className="project-img-small" src={Storytel1} alt="Still from Storytel video" />
          <img className="project-img-small" src={Storytel2} alt="Still from Storytel video" />
        </div>
      </div>
      <h2>Storytel</h2>
    </div>
  )
}

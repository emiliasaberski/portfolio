/* eslint-disable react/style-prop-object */
import React from 'react'
import { Link } from 'react-router-dom'
import { Code2 } from 'lucide-react';
import Labyrint from '../../../assets/labyrint.gif'
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

export const Labyrinth = () => {
  return (
    <div className="project-container">
      <BackBtn />
      <div className="project-content">
        <img className="project-img" src={Labyrint} alt="Labyrint mockup" />
        <div className="project-content-inline">
          <p>
          A Labyrinth game built in React and Redux.
            <br />
            <div className="project-links">
              <a
                href="https://github.com/emiliasaberski/project-labyrinth"
                target="blank">
                <Code2 className="icon" />
            Github
              </a>
            </div>
          </p>
        </div>
      </div>
      <h2>Labyrinth game</h2>
    </div>
  )
}
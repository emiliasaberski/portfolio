/* eslint-disable react/style-prop-object */
import React from 'react'
import { Link } from 'react-router-dom'
import { Code, Code2 } from 'lucide-react';
import Weatherapp from '../../../assets/weather-app-mockup.png'
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

export const WeatherAppProj = () => {
  return (
    <div className="project-container">
      <BackBtn />
      <div className="project-content">
        <img className="project-img" src={Weatherapp} alt="Weather app mockup" />
        <div className="project-content-inline">
          <p>
          A weather forecast website using two APIs to gather
          the weather information for today and for the next five days.
            <br />
            <div className="project-links">
              <a
                href="https://radiant-cobbler-4e855b.netlify.app/"
                target="blank">
                <Code className="icon" />
            View it live
              </a>
              <a
                href="https://github.com/emiliasaberski/project-weather-app"
                target="blank">
                <Code2 className="icon" />
            Github
              </a>
            </div>
          </p>
        </div>
      </div>
      <h2>Weather app</h2>
    </div>
  )
}
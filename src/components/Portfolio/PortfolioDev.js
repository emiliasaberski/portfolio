import React from 'react'
import './Portfolio.css'
import Labyrinthmockup from '../../assets/labyrinth-mockup.png'
import Todomockup from '../../assets/todo-mockup.png'
import Weatherappmockup from '../../assets/weather-app-mockup.png'
import Surveymockup from '../../assets/survey-mockup.png'

export const PortfolioDev = () => {
  return (
    <section className="portfolio-container" id="portfolio">
      <div className="portfolio-wrapper">
        <div className="portfolio-content">
          <div className="project">
            <a href="https://reliable-sorbet-d720d3.netlify.app/?" target="blank">Labyrinth Game</a>
            <p>React, Redux, APIs, Web design</p>
            <img src={Labyrinthmockup} className="hidden-img" alt="mockup" />
          </div>
          <div className="project">
            <a href="https://emilia-todo-app.netlify.app/?" target="blank">ToDo App</a>
            <p>React, Redux, Web design</p>
            <img src={Todomockup} className="hidden-img" alt="mockup" />
          </div>
          <div className="project">
            <a href="https://radiant-cobbler-4e855b.netlify.app/?" target="blank">Weather App</a>
            <p>Javascript, APIs</p>
            <img src={Weatherappmockup} className="hidden-img" alt="mockup" />
          </div>
          <div className="project">
            <a href="https://emilias-food-survey.netlify.app/?" target="blank">Survey</a>
            <p>React, Framer Motion</p>
            <img src={Surveymockup} className="hidden-img" alt="mockup" />
          </div>
        </div>
      </div>
      <h2>Portfolio Dev</h2>
    </section>
  )
}

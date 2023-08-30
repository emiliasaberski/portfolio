import React from 'react'
import './Portfolio.css'
import Showreel from '../../assets/showreel.png'
import Illustrations from '../../assets/illustrations.png'

export const PortfolioMotion = () => {
  return (
    <section className="portfolio-container" id="portfolio">
      <div className="portfolio-content">
        <div className="project">
          <a href="https://vimeo.com/859347063?share=copy" target="blank">Showreel
            <p>Motion design</p>
            <img src={Showreel} className="hidden-img" alt="mockup" />
          </a>
        </div>
        <div className="project">
          <a href="https://photos.app.goo.gl/QWKkwPwnLRXjtQSN8" target="blank">Animated illustrations
            <p>Motion design, Illustration</p>
            <img src={Illustrations} className="hidden-img" alt="mockup" />
          </a>
        </div>
      </div>
      <h2>Portfolio Design</h2>
    </section>
  )
}

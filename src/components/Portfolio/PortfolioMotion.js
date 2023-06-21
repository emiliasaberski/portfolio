import React from 'react'
import './Portfolio.css'
import Showreel from '../../assets/showreel.png'
import Illustrations from '../../assets/illustrations.png'

export const PortfolioMotion = () => {
  return (
    <section className="portfolio-container" id="portfolio">
      <div className="portfolio-wrapper" id="portfolio">
        <div className="portfolio-content">
          <div className="project">
            <a href="https://photos.google.com/album/AF1QipNxmRlrsUdyo0pQArxd7oF5oPBXBDaFLeDELjO3/photo/AF1QipNTlBDqovTHW0-RA8tI9i4aO26Te89fbBwtzN7E" target="blank">Showreel</a>
            <p>Motion design</p>
            <img src={Showreel} className="hidden-img" alt="mockup" />
          </div>
          <div className="project">
            <a href="https://photos.app.goo.gl/QWKkwPwnLRXjtQSN8" target="blank">Animated illustrations</a>
            <p>Motion design, Illustration</p>
            <img src={Illustrations} className="hidden-img" alt="mockup" />
          </div>
        </div>
      </div>
      <h2>Portfolio Design</h2>
    </section>
  )
}

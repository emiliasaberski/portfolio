/* eslint-disable react/style-prop-object */
import React, { useState } from 'react'
import './Portfolio.css'
import Showreel from '../../assets/showreel.png'
import Illustrations from '../../assets/illustrations.png'

export const PortfolioMotion = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [videoLoading, setVideoLoading] = useState(true);

  const openVideo = () => {
    setIsOpen(!isOpen)
  }

  const loader = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <section className="portfolio-container" id="portfolio">
      <div className="portfolio-content">
        <div className="project-video">
          <div className="video">
            <span>Showreel</span>
            <p>Motion design</p>
            <button
              className="hidden-img"
              type="button"
              onClick={openVideo}>
              <img src={Showreel} alt="mockup" />
              {isOpen ? (
                <div className="video-bg">
                  <div className="video-player">
                    <iframe
                      src="https://player.vimeo.com/video/859347063?badge=0"
                      className="iframe"
                      onLoad={loader}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Emilia Saberski_Showreel" />
                  </div>
                </div>
              ) : null}
            </button>
          </div>
        </div>
        {/* <div className="project">
          <a href="https://photos.app.goo.gl/QWKkwPwnLRXjtQSN8" target="blank">Animated illustrations
            <p>Motion design, Illustration</p>
            <img src={Illustrations} className="hidden-img" alt="mockup" />
          </a>
        </div> */}
      </div>
      <h2>Portfolio Design</h2>
    </section>
  )
}

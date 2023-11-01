/* eslint-disable react/style-prop-object */
import React from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css'
import { PortfolioData } from 'data/portfoliodata'

export const PortfolioNew = () => {
  return (
    <div className="portfolio-container" id="portfolio">
      {PortfolioData.map((p) => (
        <div className="portfolio-wrapper" key={p.id} data={p}>
          <Link to={p.link}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            {/* <p>{p.description}</p> */}
          </Link>
          {/* <p className="tags">{p.tags.map((tag) => `#${tag}`).join(' ')}</p> */}
          {p.tags.map((tag) => (
            <span key={p.id} className="tags">{tag}</span>
          ))}
        </div>
      ))}
      <h2>Portfolio</h2>
    </div>
  )
}
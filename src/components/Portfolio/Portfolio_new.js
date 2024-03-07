/* eslint-disable react/style-prop-object */
import React, { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Portfolio.css'
import { PortfolioData } from 'data/portfoliodata'

export const PortfolioNew = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="portfolio-container" ref={ref} id="portfolio">
      <h2
        style={{
          transform: isInView ? 'none' : 'translateX(-100%)',
          opacity: isInView ? 1 : 0,
          transition: ' 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
          // eslint-disable-next-line max-len
        }}>Portfolio
      </h2>
      {PortfolioData.map((p) => (
        <div
          ref={ref}
          className="portfolio-wrapper"
          key={p.id}
          data={p}
          style={{
            transform: isInView ? 'none' : 'translateY(100%)',
            opacity: isInView ? 1 : 0,
            transition: ' 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
          }}>
          <Link
            to={p.link}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
          </Link>
          {/* {p.tags.map((tag) => (
            <span key={p.id} className="tags">{tag}</span>
          ))} */}
        </div>
      ))}
    </div>
  )
}
import React from 'react'
import { PortfolioDev } from './PortfolioDev'
import { PortfolioMotion } from './PortfolioMotion'

export const Portfolio = () => {
  return (
    <div className="portfolio-flex">
      <PortfolioDev />
      <PortfolioMotion />
    </div>
  )
}

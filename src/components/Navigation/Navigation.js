import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Navigation.css'

export const Navigation = () => {
  return (
    <section className="navbar">
      <Link to="#about" className="link" smooth>
    About
      </Link>
      <Link to="#portfolio" className="link" smooth>
        Portfolio
      </Link>
      <Link to="#contact" className="link" smooth>
        Contact
      </Link>
    </section>
  )
}

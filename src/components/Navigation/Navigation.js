/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Navigation.css'
import { HamburgerMenu } from './HamburgerMenu'
import { Menu } from './Menu'

export const Navigation = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="navbar">
      <div className="nav-wrapper">
        <Link to="/#about" className="link" smooth>
          About
        </Link>
        <Link to="/#portfolio" className="link" smooth>
          Portfolio
        </Link>
        <Link to="/#contact" className="link" smooth>
          Contact
        </Link>
      </div>
      <HamburgerMenu open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </section>
  )
}

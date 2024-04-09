/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom';
import './Navigation.css'
import { HamburgerMenu } from './HamburgerMenu'
import { Menu } from './Menu'

export const Navigation = () => {
  const [open, setOpen] = useState(false)
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;

  return (
    <section className="navbar">
      <div className="nav-wrapper">
        <Link
          to="/#about"
          className="link"
          smooth
          style={
            isActive('#about')
              ? {
                opacity: 1
              }
              : {}
          }>
          About
        </Link>
        <Link
          to="/#portfolio"
          className="link"
          smooth
          style={
            isActive('#portfolio')
              ? {
                opacity: 1
              }
              : {}
          }>
          Portfolio
        </Link>
        <Link
          to="/#contact"
          className="link"
          smooth
          style={
            isActive('#contact')
              ? {
                opacity: 1
              }
              : {}
          }>
          Contact
        </Link>
      </div>
      <HamburgerMenu open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </section>
  )
}

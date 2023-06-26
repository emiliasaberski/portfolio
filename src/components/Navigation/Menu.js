import React from 'react';
import { bool } from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link'
import { StyledMenu } from './BurgerStyle';

export const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="#about" className="link" smooth>
          About
      </Link>
      <Link to="#portfolio" className="link" smooth>
          Portfolio
      </Link>
      <Link to="#contact" className="link" smooth>
          Contact
      </Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired
}
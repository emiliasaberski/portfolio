import React from 'react'
import { bool, func } from 'prop-types';
import { StyledBurger } from './BurgerStyle'

export const HamburgerMenu = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
HamburgerMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};

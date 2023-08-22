import React from 'react';
import logo from '../images/logo-uol-edtech-branco.svg';
import { StyledNavbar, StyledLogo } from '../styles/NavbarStyles';

function Navbar() {

    return(
      <StyledNavbar>
        <StyledLogo src={logo} alt="Logo" />
      </StyledNavbar>
    )
}

export default Navbar;
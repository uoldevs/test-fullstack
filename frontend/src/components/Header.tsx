import React from 'react';
import uolLogo from '../images/uol-logo-full.svg';
import '../styles/components/header.css';

const Header = () => {
  return (
    <header className="main-header-container">
      <div className="main-header container">
        <img className='main-logo' src={uolLogo} alt="logo uol" />
      </div>
    </header>
  );
};

export default Header;

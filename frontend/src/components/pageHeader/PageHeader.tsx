import React from 'react';
import uolLogo from '../../assets/uol-logo.png';
import './style.css';

function PageHeader() {
  return (
    <header className="page-header-container">
      <img src={uolLogo} alt="Logo da uol e do lado o nome Uol" className="page-header-uol-logo" />
    </header>
  );
}

export default PageHeader;

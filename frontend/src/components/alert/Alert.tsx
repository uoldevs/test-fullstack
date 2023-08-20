import React from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import './style.css';

function Alert({ className }: { className: string }) {
  return (
    <div className={`alert-container ${className}`}>
      <HiOutlineCheckCircle fontSize={50} />
      <div>
        <header className="alert-header">Cliente criado com sucesso</header>
      </div>
    </div>
  );
}

export default Alert;

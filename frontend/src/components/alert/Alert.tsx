import React from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import './style.css';

interface AlertProps {
  animationActive: boolean;
  message: string;
}

function Alert({ animationActive, message }: AlertProps) {
  return (
    <div className={`alert-container ${animationActive ? 'show-alert' : ''}`}>
      <HiOutlineCheckCircle fontSize={50} />
      <div>
        <header className="alert-header">{message}</header>
      </div>
    </div>
  );
}

export default Alert;

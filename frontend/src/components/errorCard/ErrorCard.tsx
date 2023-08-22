import React from 'react';
import './style.css';

interface ErrorCardProps {
  message: string;
}

function ErrorCard({ message }: ErrorCardProps) {
  return (
    <>
      {message !== '' && (
        <span className="error-message-container no-select">
          <p className="error-message-text">{message}</p>
        </span>
      )}
    </>
  );
}

export default ErrorCard;

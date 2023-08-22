import React from 'react';
import './Loading.css';

export default function Loading() {
  return (
    <div className="container">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

import React from 'react';
import ErrorCard from '../errorCard/ErrorCard';
import IInput from '../../interfaces/IInput';
import './style.css';

function Input({ id, name, onChange, type = 'text', placeholder, error, value }: IInput) {
  return (
    <div className="input-container">
      <input
        className="input-field"
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
      />
      <ErrorCard message={error || ''} />
    </div>
  );
}

export default Input;

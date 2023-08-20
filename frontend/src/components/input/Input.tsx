import React from 'react';
import ErrorCard from '../errorCard/ErrorCard';
import IInput from '../../interfaces/IInput';
import './style.css';

function Input({ id, name, onChange, type = 'text', placeholder, error }: IInput) {
  return (
    <>
      <input className="input-field" type={type} name={name} placeholder={placeholder} id={id} onChange={onChange} />
      <ErrorCard message={error || ''} />
    </>
  );
}

export default Input;

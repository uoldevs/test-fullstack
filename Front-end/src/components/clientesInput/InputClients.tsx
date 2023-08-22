import React from 'react';
import { useNavigate } from 'react-router-dom';
import './inputClients.css';

type propTypeInput = {
  name: string;
  sobrenome: string;
  email: string;
  cpf: string;
  phone: string;
  status: string;
  setName: (value: string) => void;
  setSobrenome: (value: string) => void;
  setEmail: (value: string) => void;
  setCpf: (value: string) => void;
  setPhone: (value: string) => void;
  setStatus: (value: string) => void;
  updateHandle: () => void;
  buttonName: string;
};

const InputClients = (props: propTypeInput) => {
  const navigate = useNavigate();
  const {
    name,
    setName,
    sobrenome,
    setSobrenome,
    email,
    setEmail,
    cpf,
    setCpf,
    phone,
    setPhone,
    status,
    setStatus,
    updateHandle,
    buttonName,
  } = props;
  return (
    <div className='input-main'>
      <div className='input-container'>
        <input
          placeholder='Nome'
          className='input-field'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='input-container'>
        <input
          placeholder='Sobrenome'
          className='input-field'
          type='text'
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />
      </div>
      <div className='input-container'>
        <input
          placeholder='Email'
          className='input-field'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='input-container'>
        <input
          placeholder='CPF'
          className='input-field'
          type='text'
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>
      <div className='input-container'>
        <input
          placeholder='Celular'
          className='input-field'
          type='text'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className='input-container'>
        <select
          placeholder='Status'
          value={status}
          className='select-field'
          onChange={(e) => {
            setStatus(e.target.value);
          }}>
          <option value='' disabled selected>
            Status
          </option>
          <option value='ativo'>Ativo</option>
          <option value='inativo'>Inativo</option>
          <option value='desativado'>Desativado</option>
          <option value='ativação_pendente'>Aguardando ativaçao</option>
        </select>
      </div>
      <div className='button-container'>
        <button type='button' className='button-style-1' onClick={updateHandle}>
          {buttonName}
        </button>
        <button
          type='button'
          className='button-style-2'
          onClick={() => navigate('/')}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default InputClients;

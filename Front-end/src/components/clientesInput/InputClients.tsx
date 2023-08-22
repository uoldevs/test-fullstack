import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <div>
        <label>Nome:</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Sobrenome:</label>
        <input
          type='text'
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>CPF:</label>
        <input
          type='text'
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type='text'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label>Status:</label>
        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
          }}>
          <option value='ativo'>Ativo</option>
          <option value='inativo'>Inativo</option>
          <option value='desativado'>Desativado</option>
          <option value='ativação_pendente'>Aguardando ativaçao</option>
        </select>
      </div>
      <div>
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

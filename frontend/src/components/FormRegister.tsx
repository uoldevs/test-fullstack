import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCustomer } from '../services/requests';

const FormRegister = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('Ativo');
  const navigate = useNavigate();

  const registerCustomer = async () => {
    const costumer = {
      name,
      cpf,
      email,
      phone,
      status
    }
    const endpoint = '/customers';
    const response = await createCustomer(endpoint, costumer);

    if (response) {
      navigate('/');
    }

  }

  return (
    <form action="">
      <label htmlFor="input-name">
        Nome:
        <input
          type="text"
          name="name"
          value={name}
          id="input-name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="input-cpf">
        CPF:
        <input
          type="text"
          name="cpf"
          value={cpf}
          id="input-cpf"
          onChange={(e) => setCpf(e.target.value)}
        />
      </label>
      <label htmlFor="input-email">
        Email:
        <input
          type="email"
          name="email"
          value={email}
          id="input-email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="input-phone">
        Telefone:
        <input
          type="text"
          name="phone"
          value={phone}
          id="input-phone"
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label htmlFor="select-status">
        Status:
        <select
          name="status"
          id="select-status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Ativo">Ativo</option>
          <option value="Aguardando ativação">Aguardando ativação</option>
          <option value="Inativo">Inativo</option>
          <option value="Desativado">Desativado</option>
        </select>
      </label>
      <button type="button" onClick={() => registerCustomer()}>
        Salvar
      </button>
    </form>
  );
};

export default FormRegister;

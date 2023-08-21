import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

import { createCustomer } from '../services/requests';
import '../styles/components/formRegister.css';

const FormRegister = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [btn, setBtn] = useState(true);
  const navigate = useNavigate();

  const registerCustomer = async () => {
    const costumer = {
      name,
      cpf,
      email,
      phone,
      status,
    };
    const endpoint = '/customers';
    const response = await createCustomer(endpoint, costumer);

    if (response) {
      navigate('/');
    }
  };

  useEffect(() => {
    if (status.trim() !== '') {
      setBtn(false);
    }
  }, [status]);

  return (
    <div className="form-container">
      <form>
        <label htmlFor="input-name">
          <input
            type="text"
            placeholder="Nome"
            name="name"
            value={name}
            id="input-name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="input-cpf">
          <InputMask
            className='input-cpf'
            mask="999.999.999-99"
            maskChar=" "
            placeholder="CPF"
            name="cpf"
            value={cpf}
            id="input-cpf"
            onChange={(e) => setCpf(e.target.value)}
          />
        </label>
        <label htmlFor="input-email">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            id="input-email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="input-phone">
          <InputMask
            className='input-phone'
            mask="(99) 9999-9999"
            placeholder="Telefone"
            maskChar=" "
            name="phone"
            value={phone}
            id="input-phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label htmlFor="select-status">
          <select
            name="status"
            id="select-status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="" disabled selected>
              Status
            </option>
            <option value="Ativo">Ativo</option>
            <option value="Aguardando ativação">Aguardando ativação</option>
            <option value="Inativo">Inativo</option>
            <option value="Desativado">Desativado</option>
          </select>
        </label>
        <div>
          <button
            type="button"
            disabled={btn}
            onClick={() => registerCustomer()}
            className='create-btn'
          >
            Criar
          </button>
          <button className='back-btn' type="button" onClick={() => navigate('/')}>
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import InputMask from 'react-input-mask';

import ICustomer from '../interfaces/ICustomer';
import { requestData, updateCustomer } from '../services/requests';

const CustomerDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState<ICustomer | null>(null);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const saveCustomer = async () => {
    const costumer = {
      name,
      cpf,
      email,
      phone,
      status,
    };
    const endpoint = `/customers/${id}`;
    const response = await updateCustomer(endpoint, costumer);

    if (response) {
      navigate('/');
    }
  };

  useEffect(() => {
    const endpoint = `/customers/${id}`;

    if (!customer) {
      requestData(endpoint)
        .then((response) => {
          setCustomer(response);
          setName(response.name);
          setCpf(response.cpf);
          setEmail(response.email);
          setPhone(response.phone);
          setStatus(response.status);
        })
        .catch((error) => console.log(error));
    }
  }, [customer, id]);

  return (
    <div>
      <h1>Customer with ID {id}</h1>
      {customer && (
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
            <InputMask
              mask="999.999.999-99"
              maskChar=" "
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
            <InputMask
              mask="(99) 9999-9999"
              maskChar=" "
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
          <button type="button" onClick={() => saveCustomer()}>
            Salvar
          </button>
        </form>
      )}
    </div>
  );
};

export default CustomerDetails;

'use client';

import React, { useState } from 'react';
import { CustomerProps } from './Customer';
import InputMask from 'react-input-mask';
import regexTest, { formCustomer } from '@/utils/regexTest';

interface formAlertProps {
  name: boolean;
  email: boolean;
  cpf: boolean;
  telephone: boolean;
  status: boolean;
}

interface CustomerFormProps {
  customer: CustomerProps;
  setCustomer: React.Dispatch<React.SetStateAction<CustomerProps>>;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ customer, setCustomer }) => {
  const [formAlert, setFormAlert] = useState<formAlertProps>({
    name: true,
    email: true,
    cpf: true,
    telephone: true,
    status: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));

    setFormAlert(prevAlert => ({
      ...prevAlert,
      [name]: regexTest(name as keyof formCustomer, value)
    }));
  };

  return (
    <form className='w-full'>
      <input
        className='m-3 mx-auto w-full rounded border-2 border-zinc-300 p-3'
        required
        type="text"
        name="name"
        value={customer.name}
        onChange={handleChange}
        placeholder="Nome"
      />
      {!formAlert.name && <p className="text-sm text-red-500">Campo nome é obrigatório</p>}
      <input
        className='m-3 mx-auto w-full rounded border-2 border-zinc-300 p-3'
        required
        type="email"
        name="email"
        value={customer.email}
        onChange={handleChange}
        placeholder="E-mail"
      />
      {!formAlert.email && <p className="text-sm text-red-500">Email inválido, example@example.com</p>}
      <InputMask
        className='m-3 mx-auto w-full rounded border-2 border-zinc-300 p-3'
        required
        mask="999.999.999-99"
        type="text"
        name="cpf"
        value={customer.cpf}
        onChange={handleChange}
        placeholder="CPF"
      />
      {!formAlert.cpf && <p className="text-sm text-red-500">Campo CPF é obrigatório</p>}
      <InputMask
        className='m-3 mx-auto w-full rounded border-2 border-zinc-300 p-3'
        required
        mask="(99) 99999-9999"
        type="text"
        name="telephone"
        value={customer.telephone}
        onChange={handleChange}
        placeholder="Telefone"
      />
      {!formAlert.telephone && <p className="text-sm text-red-500">Campo telefone é obrigatório</p>}
      <select
        className='m-3 mx-auto w-full rounded border-2 border-zinc-300 p-3 font-extralight hover:cursor-pointer'
        required
        name="status"
        value={customer.status}
        onChange={handleChange}
      >
        <option disabled value="">Status</option>
        <option value="Ativo">Ativo</option>
        <option value="Inativo">Inativo</option>
        <option value="Aguardando ativação">Aguardando ativação</option>
        <option value="Desativado">Desativado</option>
      </select>
      {!formAlert.status && <p className="text-sm text-red-500">Campo status é obrigatório</p>}
    </form>
  );
};

export default CustomerForm;

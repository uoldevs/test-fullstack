"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { useParams } from 'next/navigation'
import { createNewUser, getUsersById } from '@/services/api';

const CustomerForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');

  const params = useParams();

  async function fetchUsersByIdAndSetOnForm(id) {
    const response = await getUsersById(id);
    setName(response.name);
    setEmail(response.email);
    setCpf(response.cpf);
    setPhone(response.phoneNumber);
    setStatus(response.status);
  }

  useEffect(() => {
    if (params.id) {
      fetchUsersByIdAndSetOnForm(params.id)
    }
  }, [params.id])

  const formatCPF = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return value;
  };

  const handleCPFChange = (e) => {
    setCpf(formatCPF(e.target.value));
  };

  const formatPhoneNumber = (value) => {
    value = removeNonNumeric(value);
    if (value.length === 10) {
      return `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
    } else if (value.length === 11) {
      return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else {
      return value;
    }
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
  };

  const removeNonNumeric = (value) => {
    return value.replace(/\D/g, '');
  };

  const validateCPF = (cpf) => {
    cpf = removeNonNumeric(cpf);

    if (cpf.length !== 11) {
      return false;
    }

    const allDigitsEqual = /^[0-9]{11}$/.test(cpf) && new Set(cpf.split('')).size === 1;

    if (allDigitsEqual) {
      return false;
    }

    let sum = 0;
    let remainder;

    for (let i = 1;i <= 9;i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(9, 10))) {
      return false;
    }

    sum = 0;
    for (let i = 1;i <= 10;i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(10, 11))) {
      return false;
    }

    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !cpf || !phone || !status) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (!validateCPF(cpf)) {
      alert('CPF inválido. Por favor, verifique o número inserido.');
      return;
    }

    const newCustomerData = {
      name,
      email,
      cpf,
      phoneNumber: phone,
      status,
    };

    await createNewUser(newCustomerData);
    setName('');
    setEmail('');
    setCpf('');
    setPhone('');
    setStatus('');
    alert('Cliente cadastrado com sucesso!');
  };

  const statusOptions = ['Ativo', 'Inativo', 'Aguardando ativação', 'Desativado'];

  return (
    <form onSubmit={handleFormSubmit} className="mt-4 md:w-1/3 md:text-2xl">
      <div className="mb-4">
        <input
          type="text"
          value={name}
          placeholder='Nome'
          onChange={(e) => setName(e.target.value)}
          className="border rounded w-full p-2"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder='E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded w-full p-2"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder='CPF'
          maxLength={14}
          value={cpf}
          onChange={handleCPFChange}
          className="border rounded w-full p-2"
        />
      </div>
      <div className="mb-4">
        <input
          type="tel"
          placeholder='Telefone'
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
          className="border rounded w-full p-2"
        />
      </div>
      <div className="mb-4">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className={`${status === '' ? 'text-gray-400 ' : 'text-gray-950'} border rounded w-full py-2 bg-white `}
        >
          <option value="" >Status</option>
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-around">
        <button className="bg-orange-400 text-white px-4 py-2 rounded mt-2 mx-2 w-1/3 text-center">
          Criar
        </button>
        <Link href="/" className="bg-orange-400 text-white px-4 py-2 rounded mt-2 mx-2 w-1/3 text-center">
          Voltar
        </Link>
      </div>
    </form>
  );
};

export default CustomerForm;

import * as React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { registerClient, updateClient } from '../../services/clientRequests';
import { Client, dbStatus } from '../../types';
import './clientForm.css'
import CPFInput from '../maskedInputs/CPFInput';
import PhoneInput from '../maskedInputs/PhoneInput';

function ClientForm( ) {
  const { pathname } = useLocation()
  const create = pathname.includes('new') ? true : false

  const [formData, setFormData] = useState<Client>({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    status: 'Ativo',
  });
  const [errors, setErrors] = useState<Partial<Client>>({});

  const params = useParams();

  const navigate = useNavigate();
  console.log(formData.phone);


  function onSubmit(e:  React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    validateFormInput();
  }

  function resetForm() {
    setFormData({
      name: '',
      email: '',
      cpf: '',
      phone: '',
      status: 'Ativo',
    });
    setErrors({});
  }

  function genericOnChangeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value.toString(),
    });
  }

  async function saveData() {
    const formatedData = {
      name: formData.name,
      email: formData.email,
      cpf: formData.cpf,
      phone: formData.phone,
      status: (formData.status === 'Aguardando-ativação' ? 'Aguardando ativação' : formData.status) as dbStatus,
    }

    create
    ? await registerClient(formatedData)
    : await updateClient({
        id: Number(params.id),
        ...formatedData
      });
  }

  function validateFormInput() {
    const newErrors: Partial<Client> = {};

    if (formData.name.trim() === '') {
      newErrors.name = 'Por favor, digite o nome.'
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Por favor, digite o e-mail.'
    }
    if (formData.cpf.trim() === '' || formData.cpf.trim().length > 11) {
      newErrors.cpf = 'Por favor, digite um CPF válido.'
    }
    if (formData.phone.trim() === ''
      || (formData.phone.trim().length > 11 || formData.phone.trim().length < 10 )) {
      newErrors.phone = 'Por favor, digite telefone com DDD.'
    }

    if(Object.keys(newErrors).length === 0) {
      saveData();
      resetForm();
      create ? alert('Dados inseridos com sucesso') : alert('Dados alterados com sucesso');
      navigate('/')
    } else {
      setErrors(newErrors);
    }
  }

  return(
    <form className='form-container' onSubmit={onSubmit}>
      <input
        name='name'
        placeholder='Nome'
        type='text'
        value={formData.name}
        onChange={genericOnChangeHandler}
        autoComplete="name"
      />
      {errors.name && <span>{errors.name}</span>}
      <input
        name='email'
        placeholder='E-mail'
        type='text'
        value={formData.email}
        onChange={genericOnChangeHandler}
        autoComplete="email"
      />
      {errors.email && <span>{errors.email}</span>}
      <CPFInput
        value={formData.cpf}
        onChange={genericOnChangeHandler}
        name='cpf'
      />

      {/* <input
        name='cpf'
        placeholder='CPF'
        type='number'
        value={formData.cpf}
        onChange={genericOnChangeHandler}
        autoComplete="cpf"
      /> */}
      {errors.cpf && <span>{errors.cpf}</span>}
      {/* <input
        name='phone'
        placeholder='Telefone'
        type='number'
        value={formData.phone}
        onChange={genericOnChangeHandler}
        autoComplete="phone"
      /> */}
      <PhoneInput
        value={formData.phone}
        onChange={genericOnChangeHandler}
        name='phone'
      />
      {errors.phone && <span>{errors.phone}</span>}
      <select
        name='status'
        value={formData.status}
        onChange={genericOnChangeHandler}
      >
        <option value='Ativo'>Ativo</option>
        <option value='Inativo'>Inativo</option>
        <option value='Aguardando-ativação'>Aguardando ativação</option>
        <option value='Desativado'>Desativado</option>
      </select>
      <div className='buttons-container'>
      <button className='create-edit-button'>{ create ? 'Criar': 'Editar' }</button>
      <button
        className='return-button'
        onClick={(() => navigate('/home'))}
      >Voltar</button>
      </div>
    </form>
  )
}

export default ClientForm;
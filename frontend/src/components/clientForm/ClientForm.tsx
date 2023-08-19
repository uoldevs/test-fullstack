import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerClient } from '../../services/clientRequests';
import { Client, dbStatus } from '../../types';
import './clientForm.css'
// import InputMask from 'react-input-mask';

type FormProps = {
  create: boolean;
};

function ClientForm( create: FormProps ) {
  const [formData, setFormData] = useState<Client>({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    status: 'Ativo',
  });

  const navigate = useNavigate();

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    saveData();
    setFormData({
      name: '',
      email: '',
      cpf: '',
      phone: '',
      status: 'Ativo',
    })
  }

  function genericOnChangeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.toString(),
    })
  }

  async function saveData() {

    const formatedData = {
      name: formData.name,
      email: formData.email,
      cpf: formData.cpf,
      phone: formData.phone,
      status: (formData.status === 'Aguardando-ativação' ? 'Aguardando ativação' : formData.status) as dbStatus,
    }

    await registerClient(formatedData);
  }

  return(
    <form className='form-container' onSubmit={handleFormSubmit}>
      <input
        name='name'
        placeholder='Nome'
        type='text'
        value={formData.name}
        onChange={genericOnChangeHandler}
      />
      <input
        name='email'
        placeholder='E-mail'
        type='text'
        value={formData.email}
        onChange={genericOnChangeHandler}
      />
      <input
        name='cpf'
        placeholder='CPF'
        type='number'
        value={formData.cpf}
        onChange={genericOnChangeHandler}
        // mask='000.000.000-00'
      />
      <input
        name='phone'
        placeholder='Telefone'
        type='number'
        value={formData.phone}
        onChange={genericOnChangeHandler}
        // mask='(00) 00000-0000'
      />
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
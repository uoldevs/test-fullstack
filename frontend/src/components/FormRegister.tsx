import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';

import { createCustomer } from '../services/requests';
import '../styles/components/formRegister.css';

const FormRegister = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (customer: any) => {
    const endpoint = '/customers';
    const response = await createCustomer(endpoint, customer);

    if (response) {
      navigate('/');
    }
  };

  return (
    <div className="form-container">
      <div className='info-register'>
        <h3>Novo usuário</h3>
        <span>Informe os campos a seguir para criar o novo usuário:</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="input-name">
          <input
            type="text"
            placeholder="Nome"
            {...register('name', { required: 'Nome é obrigatório' })}
          />
        </label>
        {errors.name && typeof errors.name.message === 'string' && (
          <p className="error-message">{errors.name.message}</p>
        )}

        <label htmlFor="input-cpf">
          <InputMask
            className="input-cpf"
            mask="999.999.999-99"
            maskChar=" "
            placeholder="CPF"
            {...register('cpf', { required: 'CPF é obrigatório' })}
          />
        </label>
        {errors.cpf && typeof errors.cpf.message === 'string' && (
          <p className="error-message">{errors.cpf.message}</p>
        )}

        <label htmlFor="input-email">
          <input
            type="email"
            placeholder="Email"
            {...register('email', { required: 'Email é obrigatório' })}
          />
        </label>
        {errors.email && typeof errors.email.message === 'string' && (
          <p className="error-message">{errors.email.message}</p>
        )}

        <label htmlFor="input-phone">
          <InputMask
            className="input-phone"
            mask="(99) 9999-9999"
            maskChar=" "
            placeholder="Telefone"
            {...register('phone', { required: 'Telefone é obrigatório' })}
          />
        </label>
        {errors.phone && typeof errors.phone.message === 'string' && (
          <p className="error-message">{errors.phone.message}</p>
        )}

        <label htmlFor="select-status">
          <select {...register('status', { required: 'Status é obrigatório' })}>
            <option value="" disabled selected>
              Status
            </option>
            <option value="Ativo">Ativo</option>
            <option value="Aguardando ativação">Aguardando ativação</option>
            <option value="Inativo">Inativo</option>
            <option value="Desativado">Desativado</option>
          </select>
        </label>
        {errors.status && typeof errors.status.message === 'string' && (
          <p className="error-message">{errors.status.message}</p>
        )}

        <div>
          <button type="submit" className="create-btn">
            Criar
          </button>
          <button
            className="back-btn"
            type="button"
            onClick={() => navigate('/')}
          >
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import InputMask from 'react-input-mask';

import ICustomer from '../interfaces/ICustomer';
import { requestData, updateCustomer } from '../services/requests';

const CustomerDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState<ICustomer | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  });

  const onSubmit = async (data: any) => {
    const endpoint = `/customers/${id}`;
    const response = await updateCustomer(endpoint, data);
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
        })
        .catch((error) => console.log(error));
    }
  }, [customer, id]);

  return (
    <div>
      {customer && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="input-name">
            Nome:
            <input
              type="text"
              defaultValue={customer.name}
              id="input-name"
              {...register('name', { required: 'Nome é obrigatório' })}
            />
            {errors.name && typeof errors.name.message === 'string' && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </label>

          <label htmlFor="input-cpf">
            CPF:
            <InputMask
              className="input-cpf"
              mask="999.999.999-99"
              maskChar=" "
              defaultValue={customer.cpf}
              id="input-cpf"
              {...register('cpf', { required: 'CPF é obrigatório' })}
            />
            {errors.cpf && typeof errors.cpf.message === 'string' && (
              <p className="error-message">{errors.cpf.message}</p>
            )}
          </label>

          <label htmlFor="input-email">
            Email:
            <input
              type="email"
              defaultValue={customer.email}
              id="input-email"
              {...register('email', { required: 'E-mail é obrigatório' })}
            />
            {errors.email && typeof errors.email.message === 'string' && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </label>

          <label htmlFor="input-phone">
            Telefone:
            <InputMask
              className="input-phone"
              mask="(99) 9999-9999"
              maskChar=" "
              defaultValue={customer.phone}
              id="input-phone"
              {...register('phone', { required: 'Telefone é obrigatório' })}
            />
            {errors.phone && typeof errors.phone.message === 'string' && (
              <p className="error-message">{errors.phone.message}</p>
            )}
          </label>

          <label htmlFor="select-status">
            Status:
            <select
              id="select-status"
              defaultValue={customer.status}
              {...register('status', { required: 'Status é obrigatório' })}
            >
              <option value="Ativo">Ativo</option>
              <option value="Aguardando ativação">Aguardando ativação</option>
              <option value="Inativo">Inativo</option>
              <option value="Desativado">Desativado</option>
            </select>
            {errors.status && typeof errors.status.message === 'string' && (
              <p className="error-message">{errors.status.message}</p>
            )}
          </label>

          <button type="submit">Salvar</button>
          <button type="button" onClick={() => navigate('/')}>
            Cancelar
          </button>
        </form>
      )}
    </div>
  );
};

export default CustomerDetails;

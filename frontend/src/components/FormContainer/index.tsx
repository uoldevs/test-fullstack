import React, { useEffect, useState } from 'react';

import { useForm, Controller, UseFormSetError } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import CustomButton from '../CustomButton';
import Form from '../Form';

import { StyledInput, StyledSelect } from '../Form/styles';
import { FlexWrapper } from '../layout/styles';
import { ErrorSpan, StyledFormContainer } from './styles';

import { Status } from '@/enum';
import { CustomerTypes, FormDataTypes } from '@/types';
import { useRouter } from 'next/router';
import { createCustomer, updateCustomer } from '@/store/customers';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';

const REQUIRED_MESSAGE = 'Campo obrigatório';
const EMAIL_FORMAT_MESSAGE = 'Formato de email inválido';
const MOBILE_LENGTH = 11;
const MOBILE_LENGTH_MESSAGE = 'Telefone deve ter 11 caracteres';
const TAX_ID_LENGTH_MESSAGE = 'CPF deve ter 11 caracteres';
const STATUS_MESSAGE = 'Escolha um status para o novo cliente';
const EMAIL_CONFLICT_MESSAGE = 'E-mail já cadastrado';
const TAX_ID_CONFLICT_MESSAGE = 'CPF já cadastrado';

const formSchema = yup.object({
  name: yup.string().required(REQUIRED_MESSAGE),
  email: yup.string().email(EMAIL_FORMAT_MESSAGE).required(REQUIRED_MESSAGE),
  taxId: yup
    .string()
    .length(MOBILE_LENGTH, MOBILE_LENGTH_MESSAGE)
    .required(REQUIRED_MESSAGE),
  phone: yup
    .string()
    .length(MOBILE_LENGTH, TAX_ID_LENGTH_MESSAGE)
    .required(REQUIRED_MESSAGE),
});

type Props = {
  customerToUpdate?: CustomerTypes;
};

const FormContainer: React.FC<Props> = ({ customerToUpdate }) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { created, updated } = useSelector(
    (state: RootState) => state.customers
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setError,
  } = useForm<FormDataTypes>({
    resolver: yupResolver(formSchema),
    mode: 'onSubmit',
  });

  const onSubmit = (formData: FormDataTypes | CustomerTypes) => {
    if (customerToUpdate) {
      dispatch(
        updateCustomer({
          formData: { ...formData, id: +router.query.id! } as CustomerTypes,
          errorCallback: (status: number) => {
            if (status === 1) {
              setError('email', { message: EMAIL_CONFLICT_MESSAGE });
            } else {
              setError('taxId', { message: TAX_ID_CONFLICT_MESSAGE });
            }
          },
        })
      );
    } else {
      dispatch(
        createCustomer({
          formData,
          errorCallback: (status: number) => {
            if (status === 1) {
              setError('email', { message: EMAIL_CONFLICT_MESSAGE });
            } else {
              setError('taxId', { message: TAX_ID_CONFLICT_MESSAGE });
            }
          },
        })
      );
    }
  };

  useEffect(() => {
    if (created === true || updated === true) {
      router.push('/');
    }
  }, [created, updated]);

  return (
    <StyledFormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <StyledInput
              placeholder="Nome"
              {...register('name')}
              onChange={onChange}
              value={value || customerToUpdate?.name}
            />
          )}
        />
        {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>}

        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <StyledInput
              placeholder="E-mail"
              {...register('email')}
              onChange={onChange}
              value={value || customerToUpdate?.email}
            />
          )}
        />
        {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}

        <Controller
          name="taxId"
          control={control}
          render={({ field: { onChange, value } }) => (
            <StyledInput
              type="number"
              placeholder="CPF"
              {...register('taxId')}
              onChange={onChange}
              value={value || customerToUpdate?.taxId}
            />
          )}
        />
        {errors.taxId && <ErrorSpan>{errors.taxId.message}</ErrorSpan>}

        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, value } }) => (
            <StyledInput
              type="number"
              placeholder="Telefone"
              {...register('phone')}
              onChange={onChange}
              value={value || customerToUpdate?.phone}
            />
          )}
        />
        {errors.phone && <ErrorSpan>{errors.phone.message}</ErrorSpan>}

        <Controller
          name="status"
          control={control}
          render={({ field: { onChange, value } }) => (
            <StyledSelect
              {...register('status')}
              onChange={onChange}
              value={value || customerToUpdate?.status}
            >
              <option value="" selected disabled>
                Status
              </option>
              <option value={Status.ACTIVE}>{Status.ACTIVE}</option>
              <option value={Status.INACTIVE}>{Status.INACTIVE}</option>
              <option value={Status.WAITING_FOR_ACTIVATION}>
                {Status.WAITING_FOR_ACTIVATION}
              </option>
              <option value={Status.DISABLE}>{Status.DISABLE}</option>
            </StyledSelect>
          )}
        />
        {errors.status && <ErrorSpan>{errors.status.message}</ErrorSpan>}

        <FlexWrapper>
          <CustomButton text={customerToUpdate ? 'Atualizar' : 'Criar'} />
          <CustomButton
            text="Voltar"
            onClick={() => router.replace('/')}
            outlined
          />
        </FlexWrapper>
      </Form>
    </StyledFormContainer>
  );
};

export default FormContainer;

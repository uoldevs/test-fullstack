import React, { ChangeEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputLabel from '../input/Input';
import './style.css';
import ErrorCard from '../errorCard/ErrorCard';
import * as createClientSchema from '../../validations/createClientValidation';
import { ClientDto } from '../../utils/dtos/Client.dto';

interface ClientFormProps {
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  clientValues: {
    name: string;
    email: string;
    cpf: string;
    phoneNumber: string;
    status: string;
  };
  submitFormBtnName: string;
  submitForm: () => Promise<void>;
  btnDisabled: boolean;
  setBtnDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

function ClientForm({
  onChange,
  clientValues,
  submitFormBtnName,
  submitForm,
  setBtnDisabled,
  btnDisabled,
}: ClientFormProps) {
  const [formDataErros, setFormDataErros] = useState({ name: '', email: '', cpf: '', phoneNumber: '', status: '' });
  const errorRef = useRef(false);
  const navigate = useNavigate();

  const validateClientInfo = (client: ClientDto) => {
    const cpfSchema = createClientSchema.cpf.validate(client.cpf);
    const emailSchema = createClientSchema.email.validate(client.email);
    const nameSchema = createClientSchema.name.validate(client.name);
    const phoneNumberSchema = createClientSchema.phoneNumber.validate(client.phoneNumber);
    const statusSchema = createClientSchema.status.validate(client.status.name);

    if (cpfSchema.error || emailSchema.error || nameSchema.error || phoneNumberSchema.error || statusSchema.error) {
      errorRef.current = true;
    } else {
      errorRef.current = false;
    }

    setFormDataErros({
      cpf: cpfSchema.error?.message || '',
      email: emailSchema.error?.message || '',
      name: nameSchema.error?.message || '',
      phoneNumber: phoneNumberSchema.error?.message || '',
      status: statusSchema.error?.message || '',
    });
  };

  const handleSubmit = () => {
    setBtnDisabled(true);
    const client = new ClientDto(
      clientValues.name,
      clientValues.cpf,
      clientValues.email,
      clientValues.phoneNumber,
      clientValues.status,
    );

    validateClientInfo(client);

    if (errorRef.current) {
      setBtnDisabled(false);
      return;
    }

    submitForm();
  };

  return (
    <div className="client-form">
      <InputLabel
        name="name"
        placeholder="Nome"
        onChange={onChange}
        error={formDataErros.name}
        value={clientValues.name}
      />
      <InputLabel
        name="email"
        placeholder="E-Mail"
        onChange={onChange}
        error={formDataErros.email}
        value={clientValues.email}
      />
      <InputLabel name="cpf" placeholder="Cpf" onChange={onChange} error={formDataErros.cpf} value={clientValues.cpf} />
      <InputLabel
        name="phoneNumber"
        placeholder="Telefone"
        onChange={onChange}
        error={formDataErros.phoneNumber}
        value={clientValues.phoneNumber}
      />
      <div>
        <select className="client-form-select-status" value={clientValues.status} name="status" onChange={onChange}>
          <option value={undefined} hidden>
            Status
          </option>
          <option value="Ativo">Ativo</option>
          <option value="Desativado">Desativado</option>
          <option value="Inativo">Inativo</option>
          <option value="Aguardando ativação">Aguardando ativação</option>
        </select>
        <ErrorCard message={formDataErros.status} />
      </div>
      <div className="client-form-btn-container">
        <button className="client-form-submit-btn" onClick={handleSubmit} disabled={btnDisabled}>
          {submitFormBtnName}
        </button>
        <button
          className="client-form-back-btn"
          onClick={() => {
            navigate('/');
          }}>
          Voltar
        </button>
      </div>
    </div>
  );
}

export default ClientForm;

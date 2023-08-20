import React, { ChangeEvent } from 'react';
import InputLabel from '../input/Input';
import './style.css';

interface ClientFormProps {
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

function ClientForm({ onChange }: ClientFormProps) {
  return (
    <div className="client-form">
      <InputLabel name="name" placeholder="Nome" onChange={onChange} />
      <InputLabel name="email" placeholder="E-Mail" onChange={onChange} />
      <InputLabel name="cpf" placeholder="Cpf" onChange={onChange} />
      <InputLabel name="phoneNumber" placeholder="Telefone" onChange={onChange} />
      <select className="client-form-select-status" name="status" onChange={onChange}>
        <option value={undefined} hidden>
          Status
        </option>
        <option value="Ativo">Ativo</option>
        <option value="Desativado">Desativado</option>
        <option value="Inativo">Inativo</option>
        <option value="Aguardando ativação">Aguardando ativação</option>
      </select>
    </div>
  );
}

export default ClientForm;

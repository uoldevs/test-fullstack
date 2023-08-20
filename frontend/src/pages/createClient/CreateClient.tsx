import React, { ChangeEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientForm from '../../components/clientForm/ClientForm';
import ClientListingHeader from '../../components/clientListingHeader/ClientListingHeader';
import './style.css';
import { CreateClientDto } from '../../utils/dtos/CreateClient.dto';
import * as createClientSchema from '../../validations/createClientValidation';
import createClient from '../../api/routes/clients/createClient';
import handleApiErrors from '../../utils/handleApiErrors';
import ErrorCard from '../../components/errorCard/ErrorCard';

function CreateClient() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', cpf: '', phoneNumber: '', status: '' });
  const [formDataErros, setFormDataErros] = useState({ name: '', email: '', cpf: '', phoneNumber: '', status: '' });
  const [apiErrorMsg, setApiErrorMsg] = useState('');
  const errorRef = useRef(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateClientInfo = (client: CreateClientDto) => {
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

  const subimitClient = async () => {
    const { cpf, email, name, phoneNumber, status } = formData;

    const client = new CreateClientDto(name, cpf, email, phoneNumber, status);

    try {
      validateClientInfo(client);

      if (!errorRef.current) {
        await createClient(client);

        setApiErrorMsg('');
      }
    } catch (error) {
      setApiErrorMsg(handleApiErrors(error));

      console.log(error);
    }
  };

  return (
    <main className="create-client-container">
      <section className="create-client-form-header-container">
        <ClientListingHeader className="create-client-listing-header" />
        <div className="create-client-listing-infos-form-container">
          <div>
            <h3>Novo usuário</h3>
            <p>Informe os campos a seguir para criar novo usuário</p>
          </div>
          <ClientForm onChange={handleChange} errorList={formDataErros} clientValues={formData} />
        </div>
        <ErrorCard message={apiErrorMsg} />
        <div className="create-client-create-back-btn">
          <button className="create-client-create-btn" onClick={subimitClient}>
            Criar
          </button>
          <button
            className="create-client-back-btn"
            onClick={() => {
              navigate('/');
            }}>
            Voltar
          </button>
        </div>
      </section>
    </main>
  );
}

export default CreateClient;

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ClientListingHeader from '../../components/clientListingHeader/ClientListingHeader';
import './style.css';
import getClientAndStatusById from '../../api/routes/clients/getClientAndStatusById';
import ClientForm from '../../components/clientForm/ClientForm';
import * as createClientSchema from '../../validations/createClientValidation';
import { UpdateClientDto } from '../../utils/dtos/UpdateClient.dto';
import updateClient from '../../api/routes/clients/editClient';
import handleApiErrors from '../../utils/handleApiErrors';
import ErrorCard from '../../components/errorCard/ErrorCard';

function EditClient() {
  const [clientInfo, setClientInfo] = useState({ name: 'Pedro', email: '', cpf: '', phoneNumber: '', status: '' });
  const [formDataErros, setFormDataErros] = useState({ name: '', email: '', cpf: '', phoneNumber: '', status: '' });
  const [apiErrorMsg, setApiErrorMsg] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const clientId = queryParams.get('clientId');
  const errorRef = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        if (clientId) {
          const client = await getClientAndStatusById(clientId);

          const formatClient = { ...client, status: client.status.name };

          setClientInfo(formatClient);
        }
      } catch (error) {}
    })();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setClientInfo(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateClientInfo = (client: UpdateClientDto) => {
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

  const handleSubmit = async () => {
    const { cpf, email, name, phoneNumber, status } = clientInfo;

    const client = new UpdateClientDto(name, cpf, email, phoneNumber, status);

    try {
      validateClientInfo(client);

      if (!errorRef.current && clientId) {
        await updateClient(client, clientId);

        setApiErrorMsg('');
      }
    } catch (error) {
      setApiErrorMsg(handleApiErrors(error));

      console.log(error);
    }
  };

  return (
    <div>
      <main className="edit-client-container">
        <section className="edit-client-form-header-container">
          <ClientListingHeader className="edit-client-listing-header" />
          <div className="edit-client-listing-infos-form-container">
            <div>
              <h3>Edite um usuário</h3>
              <p>Informe os campos a seguir para editar um usuário</p>
            </div>
          </div>
          <ClientForm clientValues={clientInfo} errorList={formDataErros} onChange={handleChange} />
          <ErrorCard message={apiErrorMsg} />
          <div className="edit-client-btn-container">
            <button onClick={handleSubmit} className="edit-client-edit-btn">
              Confirmar edição
            </button>
            <button
              className="edit-client-back-btn"
              onClick={() => {
                navigate('/');
              }}>
              Voltar
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default EditClient;

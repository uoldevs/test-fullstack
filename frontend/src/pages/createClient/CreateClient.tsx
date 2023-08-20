import React, { ChangeEvent, useRef, useState } from 'react';
import ClientForm from '../../components/clientForm/ClientForm';
import ClientListingHeader from '../../components/clientListingHeader/ClientListingHeader';
import './style.css';
import createClient from '../../api/routes/clients/createClient';
import handleApiErrors from '../../utils/handleApiErrors';
import ErrorCard from '../../components/errorCard/ErrorCard';
import { ClientDto } from '../../utils/dtos/Client.dto';
import Alert from '../../components/alert/Alert';
import useAnimatedElement from '../../hooks/useToggleAlert';

function CreateClient() {
  const [formData, setFormData] = useState({ name: '', email: '', cpf: '', phoneNumber: '', status: '' });
  const [apiErrorMsg, setApiErrorMsg] = useState('');
  const { animationActive, startAnimation } = useAnimatedElement(4000);
  const errorRef = useRef(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const subimitClient = async () => {
    const { cpf, email, name, phoneNumber, status } = formData;

    const client = new ClientDto(name, cpf, email, phoneNumber, status);

    try {
      if (!errorRef.current) {
        await createClient(client);

        setApiErrorMsg('');
        startAnimation();
      }
    } catch (error) {
      setApiErrorMsg(handleApiErrors(error));

      console.log(error);
    }
  };

  return (
    <main className="create-client-container">
      {animationActive && <Alert className={`${animationActive ? 'show-alert' : ''}`} />}
      <section className="create-client-form-header-container">
        <ClientListingHeader className="create-client-listing-header" />
        <div className="create-client-listing-infos-form-container">
          <div>
            <h3>Novo usuário</h3>
            <p>Informe os campos a seguir para criar novo usuário</p>
          </div>
          <ClientForm
            submitFormBtnName="Criar"
            onChange={handleChange}
            submitForm={subimitClient}
            clientValues={formData}
          />
        </div>
        <ErrorCard message={apiErrorMsg} />
      </section>
    </main>
  );
}

export default CreateClient;

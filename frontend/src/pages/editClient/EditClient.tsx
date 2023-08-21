import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ClientListingHeader from '../../components/clientListingHeader/ClientListingHeader';
import './style.css';
import getClientAndStatusById from '../../api/routes/clients/getClientAndStatusById';
import ClientForm from '../../components/clientForm/ClientForm';
import updateClient from '../../api/routes/clients/editClient';
import handleApiErrors from '../../utils/handleApiErrors';
import ErrorCard from '../../components/errorCard/ErrorCard';
import { ClientDto } from '../../utils/dtos/Client.dto';
import Alert from '../../components/alert/Alert';
import useAnimatedElement from '../../hooks/useToggleAlert';

function EditClient() {
  const [clientInfo, setClientInfo] = useState({ name: 'Pedro', email: '', cpf: '', phoneNumber: '', status: '' });
  const [apiErrorMsg, setApiErrorMsg] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const clientId = queryParams.get('clientId');
  const errorRef = useRef(false);
  const { animationActive, startAnimation } = useAnimatedElement(4000);
  const [btnDisabled, setBtnDisabled] = useState(false);

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

  const handleSubmit = async () => {
    const { cpf, email, name, phoneNumber, status } = clientInfo;

    const client = new ClientDto(name, cpf, email, phoneNumber, status);

    try {
      if (!errorRef.current && clientId) {
        await updateClient(client, clientId);

        setApiErrorMsg('');
        startAnimation();
        setBtnDisabled(false);
      }
    } catch (error) {
      setApiErrorMsg(handleApiErrors(error));
      setBtnDisabled(false);
      console.log(error);
    }
  };

  return (
    <div>
      <main className="edit-client-container">
        {animationActive && <Alert message="Cliente editado com sucesso" animationActive={animationActive} />}
        <section className="edit-client-form-header-container">
          <ClientListingHeader className="edit-client-listing-header" />
          <div className="edit-client-listing-infos-form-container">
            <div>
              <h3>Edite um usuário</h3>
              <p>Informe os campos a seguir para editar um usuário</p>
            </div>
          </div>
          <ClientForm
            submitFormBtnName="Confirmar edição"
            clientValues={clientInfo}
            onChange={handleChange}
            submitForm={handleSubmit}
            btnDisabled={btnDisabled}
            setBtnDisabled={setBtnDisabled}
          />
          <ErrorCard message={apiErrorMsg} />
        </section>
      </main>
    </div>
  );
}

export default EditClient;

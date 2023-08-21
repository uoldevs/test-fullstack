import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/ContextApi';
import './clientsTable.css';
import { useNavigate } from 'react-router-dom';

const ClientTable: React.FC = () => {
  const { dataClient, fetchClients } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetchClients();
  });

  return (
    <div>
      <section className='client-info'>
        <div>
          {dataClient.map(client => (
            <div key={client.id} className='table-info'>
              <div>
                <div className='name-email-div'>
                  <h3>{`${client.firstName} ${client.lastName}`}</h3>
                  <h3>{client.email}</h3>
                </div>
              </div>
              <div>
                <div className='cpf-phone-div'>
                  <h3>{client.cpf}</h3>
                  <h3>{client.cellphone}</h3>
                </div>
              </div>
              <div>
                <div className='status-div'>
                  <h3>{client.status}</h3>
                </div>
              </div>
              <div>
                <button onClick={() => navigate(`/${client.id}`, {state: client})} type='button'>Editar</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClientTable;

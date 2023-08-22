import React, { Component } from 'react';
import ClientTable from '../../components/clientsViewTable/ClientsTable';
import './showClients.css';
import SubHeader from '../../components/subHeader/SubHeader';

class ViewClients extends Component {
  render() {
    return (
      <div className='clients-view-main'>
        <SubHeader
          description={[
            'Listagem de usuários',
            'Escolha um cliente para visualizar os detalhes',
          ]}
          activateButton={true}
        />
        <ClientTable />
      </div>
    );
  }
}

export default ViewClients;

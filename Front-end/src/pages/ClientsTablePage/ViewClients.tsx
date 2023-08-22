import React, { Component } from 'react';
import ClientTable from '../../components/clientsViewTable/ClientsTable';
import './showClients.css'
import Header from '../../components/subHeader/SubHeader';

class ViewClients extends Component {

  render() {
    return (
      <div className='clients-view-main'>
        <Header />
        <ClientTable />
      </div>
    )
  }
}

export default ViewClients;
import React, { Component } from 'react';
import ClientTable from '../../components/clientsViewTable/ClientsTable';
import './showClients.css'

class Table extends Component {

  render() {
    return (
      <div className='clients-view-main'>
        <h2>Painel de clientes</h2>
        <ClientTable/>
      </div>
    )
  }
}

export default Table;
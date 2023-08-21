import React, { Component } from 'react';
import InputClients from '../../components/clientesInput/InputClients';
import './EditClient.css'

class EditClient extends Component {

  render() {
    return (
      <div className='clients-view-main'>
        <h2>Painel de clientes</h2>
        <InputClients/>
      </div>
    )
  }
}

export default EditClient;
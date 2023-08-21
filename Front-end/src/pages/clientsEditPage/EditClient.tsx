import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';

import Api from '../../services/resquest';
import InputClients from '../../components/clientesInput/InputClients';
import './EditClient.css'

const EditClient = () => {
    const location = useLocation();
    const [name, setName] = useState(location.state.firstName);
    const [sobrenome, setSobrenome]= useState(location.state.lastName);
    const [email, setEmail] = useState(location.state.email);
    const [cpf, setCpf] = useState(location.state.cpf);
    const [phone, setPhone] = useState(location.state.cellphone);
    const [status, setStatus] = useState(location.state.status);
    const { id } = useParams();
    const navigate = useNavigate();

    const updateHandle = async () => {

        const updatedClient = {
            id: Number(id),
            firstName: name,
            lastName: sobrenome,
            email,
            cpf,
            cellphone: phone,
            status: status.toLowerCase(),
        }
        const response: AxiosResponse = await Api.putUpdate('/', updatedClient);
        if (response.status === 200) {
            navigate('/');
        }
      }
    return (
      <div className='clients-view-main'>
        <h2>Painel de clientes</h2>
        <InputClients
         name={name}
         sobrenome={sobrenome}
         email={email}
         cpf={cpf}
         phone={phone}
         status={status}
         setName={setName}
         setSobrenome={setSobrenome}
         setEmail={setEmail}
         setCpf={setCpf}
         setPhone={setPhone}
         setStatus={setStatus}
         updateHandle={updateHandle}
        />
      </div>
    )
}

export default EditClient;
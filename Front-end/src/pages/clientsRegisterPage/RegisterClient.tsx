import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';

import Api from '../../services/resquest';
import InputClients from '../../components/clientesInput/InputClients';

const RegisterClient = () => {
    const [name, setName] = useState('');
    const [sobrenome, setSobrenome]= useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('ativação_pendente');
    const navigate = useNavigate();

    const registerHandle = async () => {

        const createClient = {
            firstName: name,
            lastName: sobrenome,
            email,
            cpf,
            cellphone: phone,
            status: status,
        }
        const response: AxiosResponse = await Api.postCreate('/', createClient);
        if (response.status === 200) {
            navigate('/');
        }
      }
    return (
      <div className='clients-view-main'>
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
         updateHandle={registerHandle}
         buttonName='Criar'
        />
      </div>
    )
}

export default RegisterClient;
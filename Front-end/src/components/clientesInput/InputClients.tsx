import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Api from '../../services/resquest';
import { AxiosResponse } from 'axios';

const InputClients = () => {
  const location = useLocation();
  console.log(location)
  const [name, setName] = useState(location.state.firstName);
  const [Sobrenome, setSobreNome]= useState(location.state.lastName);
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
        lastName: Sobrenome,
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
    <div>
      <div>
        <label>Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Sobrenome:</label>
        <input type="text" value={Sobrenome} onChange={(e) => setSobreNome(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>CPF:</label>
        <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => {setStatus(e.target.value)}}>
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
          <option value="desativado">Desativado</option>
          <option value="ativação_pendente">Aguardando ativaçao</option>
        </select>
      </div>
      <div>
        <button type='button' onClick={updateHandle}>Salvar</button>
        <button type='button' onClick={() => navigate('/')}>Cancelar</button>
      </div>
    </div>
  );
};

export default InputClients;

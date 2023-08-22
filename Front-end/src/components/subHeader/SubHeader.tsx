import React from 'react';
import { useNavigate } from 'react-router-dom';

import './subHeader.css';

const SubHeader = () => {
  const navigate = useNavigate();
  return (
    <div className='sub-header-main'>
      <div className='sub-header'>
        <div>
          <div className='sub-header-name'>
            <h1>Painel de clientes</h1>
          </div>
          <div className='sub-header-description'>
            <div>
              <h2>Listagem de usuários</h2>
              <h4>Escolha um cliente para visualizar os detalhes</h4>
            </div>
            <div>
              <button
                type='button'
                className='button-style-1'
                onClick={() => navigate('/cadastro')}>
                Novo Cliente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;

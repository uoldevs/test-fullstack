import React from 'react';
import { useNavigate } from 'react-router-dom';

import './subHeader.css';

type propTypeHeader = {
  description: string[];
  activateButton?: boolean;
};

const SubHeader = ({ description, activateButton = false }: propTypeHeader) => {
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
              <h2>{description[0]}</h2>
              <h4>{description[1]}</h4>
            </div>
            {activateButton && (
              <div>
                <button
                  type='button'
                  className='button-style-1'
                  onClick={() => navigate('/cadastro')}>
                  Novo Cliente
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;

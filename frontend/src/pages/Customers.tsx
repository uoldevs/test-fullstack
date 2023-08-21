import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteCustomer, requestData } from '../services/requests';
import { FiUser } from 'react-icons/fi';

import ICustomer from '../interfaces/ICustomer';
import Customer from '../components/Customer';
import '../styles/pages/customers.css';

const Customers = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`customer/${id}`);
  };

  const handleDelete = async (id: number) => {
    await deleteCustomer(`/customers/${id}`);
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  useEffect(() => {
    const endpoint = '/customers';
    requestData(endpoint)
      .then((response) => {
        setCustomers(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="main-content">
      <div className="header-section">
        <h2>
          <FiUser className="icon" />
          Painel de clientes
        </h2>
      </div>

      <div className="new-client-container">
        <div className="info-section">
          <h3>Listagem de usuários</h3>
          <p>Escolha um cliente para visualizar os detalhes</p>
        </div>
        <div className="button-container">
          <button
            className="new-client-btn"
            type="button"
            onClick={() => navigate('/register')}
          >
            Novo Cliente
          </button>
        </div>
      </div>

      {customers.length !== 0 ? (
        customers.map(({ id, name, cpf, email, phone, status }) => (
          <div key={id} className="customer-container">
            <Customer
              id={id}
              name={name}
              cpf={cpf}
              email={email}
              phone={phone}
              status={status}
            />
            <div className="buttons-container">
              <button
                className="edit-btn"
                type="button"
                onClick={() => handleClick(id)}
              >
                Editar
              </button>
              <button
                className="delete-btn"
                type="button"
                onClick={() => handleDelete(id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))
      ) : (
        <span>Nenhum cliente cadastrado.</span>
      )}
    </section>
  );
};

export default Customers;

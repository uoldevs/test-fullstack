import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteCustomer, requestData } from '../services/requests';
import ICustomer from '../interfaces/ICustomer';
import Customer from '../components/Customer';

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
    <>
      <h2>Painel de clientes</h2>

      <div>
        <h3>Listagem de usuários</h3>
        <p>Escolha um cliente para visualizar os detalhes</p>
        <div>
          <button type='button' onClick={() => navigate('/register')}>Novo Cliente</button>
        </div>
      </div>


      {customers.length !== 0 ? (
        customers.map(({ id, name, cpf, email, phone, status }) => (
          <div key={id}>
            <Customer
              id={id}
              name={name}
              cpf={cpf}
              email={email}
              phone={phone}
              status={status}
            />
            <button type="button" onClick={() => handleClick(id)}>
              Editar
            </button>
            <button onClick={() => handleDelete(id)}>Excluir</button>
          </div>
        ))
      ) : (
        <span>Nenhum cliente cadastrado.</span>
      )}
    </>
  );
};

export default Customers;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestData } from '../services/requests';
import ICustomer from '../interfaces/ICustomer';
import Customer from '../components/Customer';

const Customers = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`customer/${id}`);
  };

  useEffect(() => {
    const endpoint = '/customers';

    if (!customers.length) {
      requestData(endpoint)
        .then((response) => {
          setCustomers(response);
        })
        .catch((error) => console.log(error));
    }
  });
  
  return (
    <>
      <h3>Painel de clientes</h3>
      
      {customers?.map(({ id, name, cpf, email, phone, status }) => (
        <div key={id}>
          <Customer id={id} name={name} cpf={cpf} email={email} phone={phone} status={status} />
          <button onClick={() => handleClick(id)}>Editar</button>
        </div>
      ))}
    </>
  );
};

export default Customers;

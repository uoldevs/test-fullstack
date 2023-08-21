import React from 'react';
import ICustomer from '../interfaces/ICustomer';

const Customer = (props: ICustomer) => {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.cpf}</p>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.status}</p>
    </div>
  );
};

export default Customer;

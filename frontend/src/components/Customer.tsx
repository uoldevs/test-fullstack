import React from 'react';
import ICustomer from '../interfaces/ICustomer';
import '../styles/components/customer.css';

const Customer = (props: ICustomer) => {
  return (
    <div className="customer-info">
      <div className="customer-name-section">
        <p className="customer-name">{props.name}</p>
        <p className="customer-email">{props.email}</p>
      </div>

      <div className="customer-details">
        <p className="customer-cpf">{props.cpf}</p>
        <p className="customer-phone">{props.phone}</p>
      </div>

      <div className="customer-status-section">
        <p className="customer-status">{props.status}</p>
      </div>
    </div>
  );
};

export default Customer;

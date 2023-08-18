import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import styles from './Client.module.css';

export default function Client({ client }) {
    const navigate = useNavigate();

  return (
    <li className={styles.container}>
      <div>
        <p>{ client.name }</p>
        <p>{ client.email }</p>
      </div>
      <div>
        <p>{ client.cpf }</p>
        <p>{ client.phone }</p>
      </div>
      <p>{ client.status }</p>
      <Button onClick={()=> navigate('/client/add')}>Editar</Button>
    </li>
  );
}
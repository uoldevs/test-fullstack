import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import styles from './Client.module.css';
import Status from './Status';

export default function Client({ client }) {
    const navigate = useNavigate();

  return (
    <li className={styles.container}>
      <div className={styles.divName}>
        <p>{ client.name }</p>
        <p>{ client.email }</p>
      </div>
      <div className={styles.divCpf}>
        <p>{ client.cpf }</p>
        <p>{ client.phone }</p>
      </div>
      <Status status={client.status} />
      <Button onClick={()=> navigate('/client/add')} className={styles.button}>Editar</Button>
    </li>
  );
}
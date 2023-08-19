import React, { useContext } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import styles from './Client.module.css';
import Status from './Status';
import Context from '../context/Context';

export default function Client({ client }) {
    const navigate = useNavigate();
    const {setUpdatedClient} = useContext(Context);

    const handleClick = () => {
      setUpdatedClient(client)
      navigate(`/client/${client.id}`);
    }

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
      <Button onClick={handleClick} className={styles.button}>Editar</Button>
    </li>
  );
}
import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
import styles from './Status.module.css';

const Status = ({ status }) => {
  const renderIcon = () => {
    switch (status) {
      case 'Ativo':
        return <BsCircleFill color="green" />;
      case 'Inativo':
        return <BsCircleFill color="red" />;
      case 'Aguardando ativação':
        return <BsCircleFill color="yellow" />;
      case 'Desativado':
        return <BsCircleFill color="gray" />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      {renderIcon()}
      <p>{status}</p>
    </div>
  );
};

export default Status;

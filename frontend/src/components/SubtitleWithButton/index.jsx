import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import styles from './SubtitleWithButton.module.css';

function SubtitleWithButton({ button, title, subtitle }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      {button && (
        <Button 
          onClick={() => navigate('/client/add')} 
          isOrange
        >
          Novo Cliente
        </Button>
      )}
    </div>
  );
}

export default SubtitleWithButton;

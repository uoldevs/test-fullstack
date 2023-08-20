import React, { useContext } from 'react';
import Context from '../../context/Context';
import styles from './Input.module.css';
import { cpf as Cpf } from 'cpf-cnpj-validator';
import Input from './Input';

const CpfInput = () => {
  const {cpf, setCpf, setIsCpfValid} = useContext(Context); 

  const formatCpf = (input) => {
    const cleaned = input.replace(/\D/g, '');

    let formatted = '';
    if (cleaned.length <= 3) {
      formatted = cleaned;
    } else if (cleaned.length <= 6) {
      formatted = `${cleaned.substring(0, 3)}.${cleaned.substring(3)}`;
    } else if (cleaned.length <= 9) {
      formatted = `${cleaned.substring(0, 3)}.${cleaned.substring(3, 6)}.${cleaned.substring(6)}`;
    } else if (cleaned.length <= 11) {
      formatted = `${cleaned.substring(0, 3)}.${cleaned.substring(3, 6)}.${cleaned.substring(6, 9)}-${cleaned.substring(9)}`;
    }

    return formatted;
  };

  const handleCpfChange = (event) => {
    const input = event.target.value;
    const formattedCpf = formatCpf(input);
    setCpf(formattedCpf);

    if (Cpf.isValid(input)) {
      setIsCpfValid(true);
    } else {
      setIsCpfValid(false);
    }
  };

  return (
    <Input
      type="text"
      id="cpfInput"
      placeholder="CPF"
      className={styles.input}
      maxLength="14"
      value={cpf}
      onChange={handleCpfChange}
     />
  );
};

export default CpfInput;

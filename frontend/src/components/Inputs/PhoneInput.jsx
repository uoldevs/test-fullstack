import React, { useContext } from 'react';
import Context from '../../context/Context';
import styles from './Input.module.css';
import validatePhone from '../../utils/validatePhone';
import Input from './Input';

const PhoneInput = () => {
  const {phone, setPhone, setIsPhoneValid} = useContext(Context);

  const formatPhoneNumber = (input) => {
    const cleaned = input.replace(/\D/g, '');

    let formatted = '';
    if (cleaned.length > 0) {
      formatted = '(' + cleaned.substring(0, 2);
      if (cleaned.length > 2) {
        formatted += ') ' + cleaned.substring(2, 7);
      }
      if (cleaned.length > 7) {
        formatted += '-' + cleaned.substring(7, 11);
      }
    }

    return formatted;
  };

  const handlePhoneChange = (event) => {
    const input = event.target.value;
    setPhone(formatPhoneNumber(input));

    if (validatePhone(input)) {
      setIsPhoneValid(true);
    } else {
      setIsPhoneValid(false);
    }
  };

  return (
    <Input 
      type="text"
      className={styles.input}
      id="phoneInput"
      placeholder="Telefone"
      maxLength="15"
      value={phone}
      onChange={handlePhoneChange}
    />
  );
};

export default PhoneInput;

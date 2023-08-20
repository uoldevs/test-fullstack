import React, { useState, useEffect, useContext } from 'react';
import { cpf as Cpf } from 'cpf-cnpj-validator';
import { useLocation } from 'react-router-dom';
import validateEmail from '../../utils/validateEmail';
import validatePhone from '../../utils/validatePhone';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Form from '../../components/Form';
import Input from '../../components/Inputs/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import PhoneInput from '../../components/Inputs/PhoneInput';
import CpfInput from '../../components/Inputs/CpfInput';
import Context from '../../context/Context';
import styles from './AddClient.module.css';
import SubtitleWithButton from '../../components/SubtitleWithButton';

function AddClient() {
  const {
    addNewClient,
    phone,
    cpf,
    setPhone,
    setCpf,
    updatedClient,
    updateClients,
    isCpfValid,
    isPhoneValid,
    setIsCpfValid,
    setIsPhoneValid
  } = useContext(Context);

  const location = useLocation();
  const isNewClient = location.pathname.includes('add');

  const [client, setClient] = useState({
    name: '',
    email: '',
    status: ''
  });

  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  useEffect(() => {
    if (!isNewClient) {
      setClient({
        name: updatedClient.name,
        email: updatedClient.email,
        status: updatedClient.status
      });
      setPhone(updatedClient.phone);
      setCpf(updatedClient.cpf);
    } else {
      setPhone('');
      setCpf('');
    }
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setClient({
      ...client,
      [name]: value
    });

    if (name === 'email') {
      setIsEmailInvalid(!validateEmail(value));
    }
  };

  const isFormValid = () => {
    return (
      client.name !== '' &&
      !isEmailInvalid &&
      Cpf.isValid(cpf) &&
      validatePhone(phone) &&
      client.status !== ''
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isNewClient) {
      addNewClient({ ...client, phone, cpf });
    } else {
      updateClients({ id: updatedClient.id, ...client, phone, cpf });
    }
  };

  const handleClick = () => {
    setIsCpfValid(true);
    setIsPhoneValid(true);
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Title />
        <SubtitleWithButton
          title={isNewClient ? 'Novo usuário' : 'Editar usuário'}
          subtitle={`Informe os campos a seguir para ${
            isNewClient ? 'criar um novo usuário' : 'Editar um usuário'
          }:`}
        />
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Nome"
            type="text"
            name="name"
            value={client.name}
            onChange={handleChange}
          />
          {isEmailInvalid && (
            <p className={styles.error}>E-mail inválido</p>
          )}
          <Input
            placeholder="E-mail"
            type="email"
            name="email"
            value={client.email}
            onChange={handleChange}
          />
          {!isCpfValid && <p className={styles.error}>CPF inválido</p>}
          <CpfInput />
          {!isPhoneValid && <p className={styles.error}>Telefone inválido</p>}
          <PhoneInput />
          <Select value={client.status} onChange={handleChange} />
          <div className={styles.buttons}>
            <Button
              type="submit"
              disabled={!isFormValid()}
              isOrange
              isLarge
            >
              {isNewClient ? 'Criar' : 'Editar'}
            </Button>
            <Button type="submit" onClick={handleClick} isLarge>
              Voltar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddClient;

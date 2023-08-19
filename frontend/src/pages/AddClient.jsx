import Header from '../components/Header';
import Title from '../components/Title';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import { useContext, useEffect, useState } from 'react';
import Select from '../components/Select';
import styles from './AddClient.module.css';
import Banner from '../components/Banner';
import Context from '../context/Context';
import PhoneInput from '../components/PhoneInput';
import CpfInput from '../components/CpfInput';
import { useLocation } from 'react-router-dom';
import validateEmail from '../utils/validateEmail';
import validatePhone from '../utils/validatePhone';
import {cpf as Cpf} from 'cpf-cnpj-validator';

function AddClient() {
  const {addNewClient, phone, cpf, setPhone, setCpf, 
    updatedClient, updateClients, isCpfValid, isPhoneValid} = useContext(Context);
  const location = useLocation();
  const isNewClient = location.pathname.includes('add');
    const [client, setClient] = useState({
      name: '',
      email: '',
      status: '',
    });

    useEffect(() => {
      if (!isNewClient) {
        setClient({
          name: updatedClient.name,
          email: updatedClient.email,
          status: updatedClient.status,
        });
        setPhone(updatedClient.phone);
        setCpf(updatedClient.cpf);
      } else {
        setPhone('');
        setCpf('');
      }
      
    }, [])

    const handleChange = ({ target: { name, value } }) => {
      setClient({
        ...client,
        [name]: value,
      });
      console.log(client);
    };

    const isFormValid = () => {
      return (
        client.name !== '' &&
        validateEmail(client.email) &&
        Cpf.isValid(cpf) &&
        validatePhone(phone) &&
        client.status !== ''
      );
    };
  

    const handleSubmit = (event)=>{
        event.preventDefault();
        if (isNewClient) {
          addNewClient({...client, phone, cpf});
        } else {
          console.log(updatedClient.id);
          updateClients({ id: updatedClient.id, ...client, phone, cpf})
        }
    }

  return (
    <div >
      <Header />
      <div className={styles.container}>
      <Title />
      <Banner title={isNewClient ? 'Novo usuário' : 'Editar usuário'}
      subtitle={`Informe os campos a seguir para ${isNewClient ? 'criar um novo usuário' : 'Editar um usuário'}:`} />
      <Form onSubmit={handleSubmit}>
        <Input placeholder='Nome'
          type="text"
          name="name" 
          value={ client.name }
          onChange={handleChange}/>
        <Input placeholder='E-mail'
          type="email"
          name="email"
          value={ client.email } 
          onChange={handleChange}/>
        {!isCpfValid && <p>CPF inválido</p>}
        <CpfInput />
        {!isPhoneValid && <p>Telefone inválido</p>}
        <PhoneInput />
        <Select value={client.status} onChange={handleChange} />
        <div className={styles.buttons}>
         <Button type="submit" disabled={!isFormValid()} isOrange isLarge>{
          isNewClient ? 'Criar' : 'Editar'
         }</Button>
         <Button type="submit" isLarge>Voltar</Button>
        </div>
      </Form>
      </div>
    </div>
  )
}

export default AddClient;
import Header from '../components/Header';
import Title from '../components/Title';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import { addClient } from '../services/ clientApi';
import { useNavigate } from 'react-router-dom';
import Select from '../components/Select';
import styles from './AddClient.module.css';
import Banner from '../components/Banner';

function AddClient() {
    const [client, setClient] = useState({
      name: '',
      email: '',
      cpf: '',
      phone: '',
      status: '',
    });
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
      setClient({
        ...client,
        [name]: value,
      });
      console.log(client);
    };

    const addNewClient = async (client)=>{
      await addClient(client);
      navigate('/');
  }

    const handleSubmit = (event)=>{
        event.preventDefault();
        addNewClient(client);
        console.log(client);
    }

  return (
    <div >
      <Header />
      <div className={styles.container}>
      <Title />
      <Banner title="Novo usuário"
      subtitle="Informe os campos a seguir para criar um novo usuário:" />
      <Form onSubmit={handleSubmit}>
        <Input placeholder='Nome'
          type="text"
          name="name" 
          value={ client.name }
          required
          onChange={handleChange}/>
        <Input placeholder='E-mail'
          type="email"
          name="email"
          value={ client.email } 
          required
          onChange={handleChange}/>
        <Input placeholder='CPF'
          type="text"
          name="cpf"
          value={ client.cpf } 
          required
          onChange={handleChange}/>
        <Input placeholder='Telefone'
          type="text"
          name="phone"
          value={ client.phone } 
          required
          onChange={handleChange}/>
        <Select value={client.status} onChange={handleChange} />
        <div className={styles.buttons}>
         <Button type="submit" isOrange isLarge>Criar</Button>
         <Button type="submit" isLarge>Voltar</Button>
        </div>
      </Form>
      </div>
    </div>
  )
}

export default AddClient;
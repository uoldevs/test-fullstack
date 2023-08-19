import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { clientApi } from '../services/ clientApi';
import Client from '../components/Client';
import Banner from '../components/Banner';
import Title from '../components/Title';
import styles from './ListClient.module.css';

function ListClients () {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTodos = async ()=> {
      setLoading(true);
      const result = await clientApi();
      console.log(result);
      setClients(result);
      setLoading(false);
  }
  getTodos();
  }, [])
  

  return (
    <div>
      <Header />
      <div className={styles.container}>
      <Title />
      <Banner button title="Listagem de usuários"
      subtitle="Escolha um cliente para vizualizar os detalhes" />
      <ul>
        {loading ? <p>Loading...</p> :
          clients.map((data)=>(
            <Client client={data} />
          ))}
      </ul>
      <p>Exibindo {clients.length} clientes</p>
      </div>
    </div>
  )
}

export default ListClients;
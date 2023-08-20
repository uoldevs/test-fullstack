import { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import Client from '../../components/Client';
import Title from '../../components/Title';
import styles from './ListClient.module.css';
import Context from '../../context/Context';
import SubtitleWithButton from '../../components/SubtitleWithButton';

function ListClients () {
  const {clients, getClients, loading} = useContext(Context);

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.container}>
      <Title />
      <SubtitleWithButton button title="Listagem de usuários"
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
import { useEffect, useState } from 'react';
import { listClients } from '../../services/clientResources';
import { IDataForm } from '../../interfaces';
import { Button } from '../../components/Button';
import styles from './styles.module.scss';
import ClientCard from '../../components/ClientCard';
import ClientHeader from '../../components/ClientHeader';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [clients, setClients] = useState<IDataForm[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await listClients();
      if (data) setClients(data);
    };
    fetchData();
  }, []);

  return (
    <main className={styles.container}>
      <ClientHeader />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className={styles.subtext}>
          <h3>Listagem de usuários</h3>
          <p>Escolha um cliente para visualizar os detalhes</p>
        </div>
        <Button title="Novo cliente" onClick={() => navigate('/create')} />
      </div>
      <ul className={styles.list}>
        {clients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </ul>
      <p style={{ color: '#919191' }}>Exibindo {clients.length} clientes</p>
    </main>
  );
}

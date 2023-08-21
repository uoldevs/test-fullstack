import { ClientProps } from '../../interfaces';
import { Button } from '../Button';
import { PiCircleFill } from 'react-icons/pi';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

export default function ClientCard({ client }: ClientProps) {
  const navigate = useNavigate();

  const handleCircleColor = () => {
    if (client.status === 'Ativo') return { color: '#4aad5b' };
    if (client.status === 'Inativo') return { color: '#d63240' };
    if (client.status === 'Aguardando ativação') return { color: '#d3a710' };
    if (client.status === 'Desativado') return { color: '#d2d2d2' };
  };

  return (
    <li className={styles.listItem}>
      <div className={styles.subtext}>
        <p>{client.name}</p>
        <span>{client.email}</span>
      </div>
      <div className={styles.subtext}>
        <p>
          {client.cpf
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')}
        </p>
        <span>
          {client.phonenumber
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4,5})(\d{4})/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1')}
        </span>
      </div>
      <p style={{ minWidth: '11rem', color: '#555454', margin: 'auto 0' }}>
        <span className={styles.statusCircle} style={handleCircleColor()}>
          {<PiCircleFill />}
        </span>
        {client.status}
      </p>
      <Button title="Editar" onClick={() => navigate(`/update/${client.id}`)} />
    </li>
  );
}

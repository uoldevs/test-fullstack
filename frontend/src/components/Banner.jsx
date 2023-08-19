import { useNavigate } from 'react-router-dom';
import Button from './Button';
import styles from './Banner.module.css';

function Banner() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div>
        <h3>Listagem de usuários</h3>
        <p>Escolha um cliente para visualizar os detalhes</p>
      </div>
      <Button onClick={()=> navigate('/client/add')}>Novo Cliente</Button>
    </div>
  )
}

export default Banner;
import {GoPerson} from 'react-icons/go';
import styles from './Title.module.css';

function Title() {
  return (
    <div className={styles.container}>
      <GoPerson className={styles.icon} />
      <h1>Painel de clientes</h1>
    </div>
  )
}

export default Title;
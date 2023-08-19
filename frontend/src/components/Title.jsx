import {GoPerson} from 'react-icons/go';
import styles from './Title.module.css';

function Title() {
  return (
    <div className={styles.container}>
      <div>
       <GoPerson className={styles.icon} />
       <h1>Painel de clientes</h1>
      </div>
        <hr />
    </div>
  )
}

export default Title;
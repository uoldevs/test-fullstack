import styles from './styles.module.scss';
import logo from '../../assets/uol-logo.png';

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Uol logo" />
    </div>
  );
}

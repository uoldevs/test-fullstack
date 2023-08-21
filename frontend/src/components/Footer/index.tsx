import { BsGithub } from 'react-icons/bs';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <p className={styles.footer}>
      Desenvolvido por: Rafael Santos{' '}
      <a href="https://github.com/RafaelCunhaS" target="_blank">
        <BsGithub size={20} />
      </a>
    </p>
  );
}

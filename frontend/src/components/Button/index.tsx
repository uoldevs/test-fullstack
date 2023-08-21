import styles from './styles.module.scss';
import { ButtonProps } from '../../interfaces';

export function Button({ title, icon, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={styles.button}>
      {title}
      {icon}
    </button>
  );
}

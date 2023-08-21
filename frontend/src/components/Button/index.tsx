import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode;
}
export function Button({ title, icon, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={styles.button}>
      {title}
      {icon}
    </button>
  );
}

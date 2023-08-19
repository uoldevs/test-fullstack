import styles from './Select.module.css';

function Select({value, onChange}) {
  return(
    <select id="mySelect" value={value} onChange={onChange} name="status" 
    className={styles.select}>
      <option value="" disabled selected hidden className={styles.placeholder}>Status</option>
      <option value="Ativo">Ativo</option>
      <option value="Inativo">Inativo</option>
      <option value="Aguardando ativação">Aguardando ativação</option>
      <option value="Desativado">Desativado</option>
    </select>
  );
}

export default Select;
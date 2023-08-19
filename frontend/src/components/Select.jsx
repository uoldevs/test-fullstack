function Select({value, onChange}) {
  return(
    <div>
    <select id="mySelect" value={value} onChange={onChange} name="status">
      <option value="Ativo">Ativo</option>
      <option value="Inativo">Inativo</option>
      <option value="Aguardando Ativação">Aguardando Ativação</option>
      <option value="Desativado">Desativado</option>
    </select>
  </div>
  );
}

export default Select;
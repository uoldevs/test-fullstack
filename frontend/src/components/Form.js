function Form({ nome, email, cpf, telefone, status, handleChange, handleSubmit, validation, btn }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome" value={nome} onChange={handleChange} />
      <input type="email" name="email" placeholder="E-mail" value={email} onChange={handleChange} />
      <input type="text" name="cpf" placeholder="CPF" value={cpf} onChange={handleChange} />
      <input type="text" name="telefone" placeholder="Telefone" value={telefone} onChange={handleChange} />
      <select name="status" value={status} onChange={handleChange}>
        <option value="Ativo">Ativo</option>
        <option value="Inativo">Inativo</option>
        <option value="Aguardando ativação">Aguardando ativação</option>
        <option value="Desativado">Desativado</option>
      </select>
      {validation ? <input type="submit" value={btn} /> : <p>Digite os dados corretamente</p>}
    </form>
  );
}

export default Form;

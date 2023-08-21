import { useNavigate } from 'react-router-dom';
import './css/Form.css';

function Form({ nome, email, cpf, telefone, status, handleChange, handleSubmit, validation, btn }) {
  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="nome" placeholder="Nome" className="inputs" value={nome} onChange={handleChange} />
      <input type="email" name="email" placeholder="E-mail" className="inputs" value={email} onChange={handleChange} />
      <input type="text" name="cpf" placeholder="CPF" className="inputs" value={cpf} onChange={handleChange} />
      <input
        type="text"
        name="telefone"
        placeholder="Telefone"
        className="inputs"
        value={telefone}
        onChange={handleChange}
      />
      <select name="status" className="inputs" placeholder="Status" value={status} onChange={handleChange}>
        <option value="Ativo" selected>
          Ativo
        </option>
        <option value="Inativo">Inativo</option>
        <option value="Aguardando ativação">Aguardando ativação</option>
        <option value="Desativado">Desativado</option>
      </select>
      {validation ? <p> </p> : <p className="warning-create">Digite os dados corretamente</p>}
      <div className="create-buttons">
        <input type="submit" className="button-create" value={btn} />
        <input type="submit" className="button-return" value="Voltar" onClick={() => navigate('/')} />
      </div>
    </form>
  );
}

export default Form;

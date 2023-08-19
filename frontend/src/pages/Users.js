import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ListUsers from '../components/ListUsers';

function Users() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div>
        <div>
          <p>
            <strong>Listagem de usuários</strong>
          </p>
          <p>Escolha um cliente para visualizar os detalhes</p>
        </div>
        <input type="submit" value="Novo cliente" onClick={() => navigate('/create')} />
      </div>
      <ListUsers />
    </div>
  );
}

export default Users;

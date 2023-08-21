import { useNavigate } from 'react-router-dom';
import ListUsers from '../components/ListUsers';
import ClientPanel from '../components/ClientPanel';
import './css/Users.css';

function Users() {
  const navigate = useNavigate();
  return (
    <div className="container-users">
      <div className="users">
        <ClientPanel />
        <div className="banner-users">
          <div>
            <h3 className="font-bold">Listagem de usuários</h3>
            <p className="font-light">Escolha um cliente para visualizar os detalhes</p>
          </div>
          <input type="submit" value="Novo cliente" className="button-new" onClick={() => navigate('/create')} />
        </div>
        <ListUsers />
      </div>
    </div>
  );
}

export default Users;

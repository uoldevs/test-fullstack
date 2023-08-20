import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListUsers.css';

const url = 'http://localhost:3001/';

function ListUsers() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
    }
    fetchData();
  }, []);

  // console.log(users);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="list">
          <div className="list-content">
            <p className="font-medium">{user.nome}</p>
            <p className="font-light">{user.email}</p>
          </div>
          <div className="list-content">
            <p className="font-medium">{user.cpf}</p>
            <p className="font-light">{user.telefone}</p>
          </div>
          <div className="list-content">
            <p className="font-light">{user.status}</p>
          </div>
          <input type="submit" value="Editar" className="button-edit" onClick={() => navigate(`/edit/${user.id}`)} />
        </div>
      ))}
      <footer>
        <p>Exibindo {users.length} clientes</p>
      </footer>
    </div>
  );
}

export default ListUsers;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div key={user.id}>
          <div>
            <p>{user.nome}</p>
            <p>{user.email}</p>
          </div>
          <div>
            <p>{user.cpf}</p>
            <p>{user.telefone}</p>
          </div>
          <p>{user.status}</p>
          <input type="submit" value="Editar" onClick={() => navigate(`/edit/${user.id}`)} />
        </div>
      ))}
      <footer>
        <p>Exibindo {users.length} clientes</p>
      </footer>
    </div>
  );
}

export default ListUsers;

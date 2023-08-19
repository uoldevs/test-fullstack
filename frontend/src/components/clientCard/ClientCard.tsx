import { useNavigate } from 'react-router-dom';
import { Client } from '../../types';
import './clientCard.css'

type ClientProps = {
  client: Client
};

function ClientCard({client}: ClientProps) {
  const navigate = useNavigate();

  return(
    <div className="card-container">
      <p>{client.name}</p>
      <div cpf-phone>
        <p>{client.cpf.toString()}</p>
        <p>{client.phone.toString()}</p>
      </div>
      <p>{client.status}</p>
      <button onClick={() => navigate(`/update-client/${client.id}`)}>Editar</button>
    </div>
  )
}

export default ClientCard;
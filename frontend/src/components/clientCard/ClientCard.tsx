import { useNavigate } from 'react-router-dom';
import { Client } from '../../types';
import './clientCard.css'

type ClientProps = {
  client: Client
};

function formataCPF(cpf: string){
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function formataPhone(phone: string){
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
}

function ClientCard({client}: ClientProps) {
  const navigate = useNavigate();
  const cpf = formataCPF(client.cpf)
   const phone = formataPhone(client.phone)

  return(
    <div className="card-container">
      <div className='name-email'>
        <p className='name'>{client.name}</p>
        <p>{client.email}</p>
      </div>
      <div cpf-phone>
        <p className='cpf'>{cpf}</p>
        <p>{phone}</p>
      </div>
      <p>{client.status}</p>
      <button onClick={() => navigate(`/update-client/${client.id}`)}>Editar</button>
    </div>
  )
}

export default ClientCard;
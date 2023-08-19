import './clientCard.css'

type ClientProps = {
  client: {
    name: string;
    cpf: string;
    phone: string;
    status: string;
  }
};

function ClientCard({client}: ClientProps) {
  return(
    <div className="card-container">
      <p>{client.name}</p>
      <div cpf-phone>
        <p>{client.cpf.toString()}</p>
        <p>{client.phone.toString()}</p>
      </div>

      <p>{client.status}</p>
      <button>Editar</button>
    </div>
  )
}

export default ClientCard;
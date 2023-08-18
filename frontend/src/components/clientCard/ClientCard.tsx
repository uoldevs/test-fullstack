import './ClientCard.css'

type ClientProps = {
  client: {
    name: string;
    phone: string;
    status: string;
  }
};

function ClientCard({client}: ClientProps) {
  return(
    <div className="container">
      <p>{client.name}</p>
      <p>{client.phone}</p>
      <p>{client.status}</p>
      <button>Editar</button>
    </div>
  )
}

export default ClientCard;
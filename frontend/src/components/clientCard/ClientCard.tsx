import { useNavigate } from 'react-router-dom';
import { DbClient } from '../../types';
import './clientCard.css'
import { VscCircleLargeFilled } from 'react-icons/vsc';
import { IconContext } from "react-icons";

type ClientProps = {
  client: DbClient
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

  const mapping = {
    'Inativo': 'red',
    'Ativo' : 'green',
    'Desativado': '#d3d3d3',
    'Aguardando ativação':'#D3A710'
  }

  return(
    <div className="card-container">
      <div className='name-email'>
        <p className='name'>{client.name}</p>
        <p>{client.email}</p>
      </div>
      <div className='cpf-phone'>
        <p className='cpf'>{cpf}</p>
        <p>{phone}</p>
      </div>
      <IconContext.Provider value={{ color: mapping[client.status], className: "global-class-name" }}>
        <div className='status'>
          <VscCircleLargeFilled/><p>{client.status}</p>
        </div>
      </IconContext.Provider>
      <button onClick={() => navigate(`/update-client/${client.id}`)}>Editar</button>
    </div>
  )
}

export default ClientCard;
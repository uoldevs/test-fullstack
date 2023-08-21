import { useLocation } from "react-router-dom";
import ClientForm from "../../components/clientForm/ClientForm";
import HeaderClientDashbord from "../../components/headerClientDashbord/HeaderClientDashbord";
import './clientRegistration.css'

function ClientRegistration() {
  const { pathname } = useLocation();
  const create = pathname.includes('new');

  return(
    <div className="registration-container">
      <HeaderClientDashbord/>
      <div className="info-container">
        <div className="info">
          <p className="info-title">Novo usuário</p>
          {create
            ? <p className="info-p">Informe os campos a seguir para cadastrar um novo cliente</p>
            : <p className="info-p">Informe os campos a seguir para atualizar os dados do cliente</p>
          }

        </div>
      </div>
      <ClientForm/>
    </div>
  )
}

export default ClientRegistration;
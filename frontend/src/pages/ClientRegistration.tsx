import ClientForm from "../components/clientForm/ClientForm";
import HeaderClientDashbord from "../components/headerClientDashbord/HeaderClientDashbord";
import './clientRegistration.css'

function ClientRegistration() {
  return(
    <div className="registration-container">
      <HeaderClientDashbord/>
      <div className="info-container">
        <div className="info">
        <p className="info-title">Novo usuário</p>
        <p className="info-p">Informe os campos a seguir para criar novo usuário</p>
        </div>
      </div>
      <ClientForm create/>
    </div>
  )
}

export default ClientRegistration;
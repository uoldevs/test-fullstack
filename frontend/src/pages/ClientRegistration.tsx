import ClientForm from "../components/clientForm/ClientForm";
import HeaderClientDashbord from "../components/headerClientDashbord/HeaderClientDashbord";
import './clientRegistration.css'

function ClientRegistration() {
  return(
    <div className="registration-container">
      <HeaderClientDashbord/>
      <div>
        <p>Novo usuário</p>
        <p>Informe os campos a seguir para criar novo usuário</p>
      </div>
      <ClientForm create/>
    </div>
  )
}

export default ClientRegistration;
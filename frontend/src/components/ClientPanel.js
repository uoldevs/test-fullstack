/* eslint-disable import/no-extraneous-dependencies */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import './ClientPanel.css';

function ClientPanel() {
  return (
    <div className="clientpanel">
      <FontAwesomeIcon icon={faUser} className="usericon" />
      <h1 className="painel-nome">Painel de clientes</h1>
    </div>
  );
}

export default ClientPanel;

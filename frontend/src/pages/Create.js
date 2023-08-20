import ClientPanel from '../components/ClientPanel';
import CreateUser from '../components/CreateUser';
import './Create.css';

function Create() {
  return (
    <div className="create-container">
      <div className="create">
        <ClientPanel />
        <div className="banner-create">
          <h3 className="font-bold">Novo usuário</h3>
          <p className="font-light">Informe os campos a seguir para criar um novo usuário</p>
        </div>
        <CreateUser />
      </div>
    </div>
  );
}

export default Create;

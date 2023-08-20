import { useNavigate, useParams } from 'react-router-dom';
import ClientPanel from '../components/ClientPanel';
import EditUser from '../components/EditUser';
import './Edit.css';
import { del } from '../components/Requests';

function Edit() {
  const { id } = useParams();
  const navigation = useNavigate();

  const handleDelete = () => {
    del(id);
    navigation('/');
  };

  return (
    <div className="container-edit">
      <div className="edit">
        <ClientPanel />
        <div className="banner-edit">
          <div>
            <h3 className="font-bold">Editar usuário</h3>
            <p className="font-light">Informe os campos a seguir para editar os dados de um usuário</p>
          </div>
          <input type="submit" className="button-delete" value="Apagar" onClick={handleDelete} />
        </div>
        <EditUser />
      </div>
    </div>
  );
}

export default Edit;

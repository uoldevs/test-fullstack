import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { put } from './Requests';
import Validations from './Validations';
import Form from './Form';

function EditUser() {
  const { id } = useParams();

  const initialFormData = {
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    status: 'Ativo'
  };

  const [data, setData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Validations(data)) {
      put(data, id);
    }
    console.log(data);
    setData(initialFormData);
    // navigate('/');
  };

  return (
    <div>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        nome={data.nome}
        email={data.email}
        cpf={data.cpf}
        telefone={data.telefone}
        status={data.status}
        btn="Editar"
        validation={Validations(data)}
      />
    </div>
  );
}

export default EditUser;

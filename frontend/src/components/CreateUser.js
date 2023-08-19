import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Validations from './Validations';
import Form from './Form';
import { post } from './Requests';

function CreateUser() {
  const initialFormData = {
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    status: 'Ativo'
  };

  const [data, setData] = useState(initialFormData);

  const navigate = useNavigate();

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
      post(data);
    }
    console.log(data);
    setData(initialFormData);
    navigate('/');
  };

  return (
    <div>
      <Form
        nome={data.nome}
        email={data.email}
        cpf={data.cpf}
        telefone={data.telefone}
        status={data.status}
        btn="Criar"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        validation={Validations(data)}
      />
    </div>
  );
}

export default CreateUser;

import React, { ChangeEvent, useState } from 'react';
import ClientForm from '../../components/clientForm/ClientForm';
import ClientListingHeader from '../../components/clientListingHeader/ClientListingHeader';
import './style.css';

function CreateClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    phoneNumber: '',
    status: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const subimitClient = () => {
    console.log(formData);
  };

  return (
    <main className="create-client-container">
      <section className="create-client-form-header-container">
        <ClientListingHeader className="create-client-listing-header" />
        <div className="create-client-listing-infos-form-container">
          <div>
            <h3>Novo usuário</h3>
            <p>Informe os campos a seguir para criar novo usuário</p>
          </div>
          <ClientForm onChange={handleChange} />
        </div>
        <button onClick={subimitClient}>Criar</button>
      </section>
    </main>
  );
}

export default CreateClient;

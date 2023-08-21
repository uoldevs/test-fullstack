import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import profileIcon from "../profile.svg";
import { Link, useParams } from 'react-router-dom';

function Edicao() {
  const { id } = useParams();
  const [errorMessages, setErrorMessages] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [status, setStatus] = useState('Aguardando ativação');

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/clients/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setName(data.name);
          setEmail(data.email);
          setPhone(data.phone);
          setCpf(data.cpf);
          setStatus(data.status);
        })
      .catch((error) => {
        console.error('Erro ao carregar dados do cliente:', error);
      });
    }
  }, [id]);

  // Código retirado da fonte: https://www.devmedia.com.br/validar-cpf-com-javascript/23916
  function isCPFValid(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF === "00000000000") return false;
  
    for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
  
    if ((Resto === 10) || (Resto === 11))  Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10)) ) return false;
  
    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
  
    if ((Resto === 10) || (Resto === 11))  Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
  }
    
  const isPhoneValid = (phone) => {
    const numericPhone = phone.replace(/\D/g, '');
    if (numericPhone.length !== 11 && numericPhone.length !== 10) { 
      return false;
    }
    return true;
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessages({});
    setSuccessMessage('');
      
    const clientData = {
      name: name,
      email: email,
      phone: phone,
      cpf: cpf,
      status: status,
    };

    const validationErrors = {};

    if (!clientData.name) {
      validationErrors.name = 'O nome é obrigatório.';
    }

    if (!clientData.email) {
      validationErrors.email = 'O e-mail é obrigatório.';
    }

    if (!clientData.phone) {
      validationErrors.phone = 'O telefone é obrigatório.';
    }

    if (!clientData.cpf) {
      validationErrors.cpf = 'O CPF é obrigatório.';
    }

    if (!isEmailValid(clientData.email)) {
      validationErrors.email = 'E-mail inválido.';
    }

    if (!isCPFValid(clientData.cpf)) {
      validationErrors.cpf = 'CPF inválido.';
    }
    
    if (!isPhoneValid(clientData.phone)) {
      validationErrors.phone = 'Número de telefone inválido.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrorMessages(validationErrors);
      return;
    }

    try {
      let response;
      if (id) {
        response = await fetch(`http://localhost:3000/clients/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(clientData),
        });
      } else {
        response = await fetch('http://localhost:3000/clients', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(clientData),
        });
      }
    
      if (response.ok) {
        const successMessage = id ? 'Usuário atualizado com sucesso!' : 'Novo usuário criado com sucesso!';
        setSuccessMessage(successMessage);
      } else {
        const errorData = await response.json();
        console.error('Erro ao salvar usuário', errorData.error);
      }        
    } catch (error) {
      console.error('Erro ao fazer a solicitação', error);
    }
  };

  return (
    <div>
      <Header />
      <div className='m-20 mx-80 p-1 flex flex-col'>
        <div className='flex py-6'>
          <img 
          className='w-10 h-10' 
          src={profileIcon} 
          alt='Ícone de perfil Designed by Free icons from www.freeicons.io' 
          />
          <h1 className='text-2xl text-slate-800 self-center'>
            Painel de clientes
          </h1>
        </div>

        <hr className='border-slate-300 py-4'/>
        <h2 className='text-slate-500 text-xl font-medium py-2'>
          Novo usuário
        </h2>
        <p className='text-slate-500'>
          Informe os campos a seguir para criar novo usuário:
        </p>
        <br />
        <form 
        className='py-6'
        onSubmit={handleSubmit}
        >
          <TextInput 
          type="text" 
          placeholder="Nome" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          />
          {errorMessages.name && <p className="text-red-500">{errorMessages.name}</p>}
          <br />
          <TextInput 
          type="email" 
          placeholder="E-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          />
          {errorMessages.email && <p className="text-red-500">{errorMessages.email}</p>}
          <br />
          <TextInput 
          type="text" 
          maxLength="14" 
          placeholder="CPF" 
          value={cpf} 
          onChange={(e) => setCpf(e.target.value)} 
          />
          {errorMessages.cpf && <p className="text-red-500">{errorMessages.cpf}</p>}
          <br />
          <TextInput 
          type="tel" 
          placeholder="Telefone" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          />
          {errorMessages.phone && <p className="text-red-500">{errorMessages.phone}</p>}
          <br />
          <select 
          className="border w-60 border-slate-400 m-2 p-2 rounded-md text-xl text-slate-400" 
          value={status} 
          onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
            <option value="Aguardando ativação">Aguardando ativação</option>
            <option value="Desativado">Desativado</option>
          </select>
          <br />
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          <br />
          <button 
          className="m-2 p-1 rounded-md border border-amber-500 text-xl bg-amber-500 text-white px-4 hover:text-amber-500 hover:bg-white" 
          type="submit"
          >
            Criar
          </button>
          <Link 
          className="m-2 p-1 rounded-md border border-amber-500 text-xl text-amber-500 px-4 hover:text-white hover:bg-amber-500" 
          to="/"
          >
            Voltar
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Edicao;
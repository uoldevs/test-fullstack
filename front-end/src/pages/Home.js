import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import profileIcon from "../profile.svg";
import UserCard from '../components/UserCard';
import { Link } from 'react-router-dom';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/clients');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error('Erro ao obter a lista de usuários');
        }
      } catch (error) {
        console.error('Erro ao fazer a solicitação:', error);
      }
    };

    fetchUsers();
  }, []);

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
        <div className='flex justify-between items-center'>
          <div>
            <h2 className='text-slate-500 text-xl font-medium py-2'>
              Listagem de usuários
            </h2>
            <p className='text-slate-500'>
              Escolha um cliente para visualizar os detalhes
            </p>
          </div>

          <Link 
          className="rounded-md flex p-1 border border-amber-500 text-xl bg-amber-500 text-white px-4 h-10 hover:text-amber-500 hover:bg-white" 
          to='/edicao'>
            Novo cliente
          </Link>
        </div>

        <br />

        <div>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>        
      </div>
    </div>
  );
}

export default Home;
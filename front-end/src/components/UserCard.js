import React from 'react';
import { Link } from 'react-router-dom';

function UserCard({ user }) {
    const getStatusColor = (status) => {
        switch (status) {
          case 'Ativo':
            return 'bg-green-500';
          case 'Inativo':
            return 'bg-red-500';
          case 'Aguardando ativação':
            return 'bg-yellow-500';
          case 'Desativado':
            return 'bg-gray-300';
          default:
            return 'bg-gray-300';
        }
      };
    
      const statusColor = getStatusColor(user.status);

  return (
    <div className="border border-gray-200 p-4 my-6 flex justify-between">
      <div className='mx-4 w-1/4 flex flex-col justify-center'>
      <h3 className="text-xl text-gray-500 font-semibold">
        {user.name}
      </h3>
      <p className="text-gray-500">
        {user.email}
      </p>
      </div>

      <div className='w-1/4 flex flex-col justify-center'>
      <p className="text-gray-500 font-semibold">
        {user.cpf}
      </p>
      <p className="text-gray-500">
        {user.phone}
      </p>
      </div>

      <div className='flex w-1/4 '>
      <div className={`w-4 h-4 mx-2 rounded-full self-center ${statusColor}`}></div>
      <p className='self-center text-gray-500'>
        {user.status}
      </p>
      </div>

      <Link 
      className=" m-2 p-1 border border-amber-500 text-xl text-amber-500 hover:text-white hover:bg-amber-500 rounded-md flex px-12 py-2 items-center self-center" 
      to={`/edicao/${user.id}`}>
        Editar
      </Link>
    </div>
  );
}

export default UserCard;
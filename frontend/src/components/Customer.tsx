import React from 'react';
import Link from 'next/link';

export interface CustomerProps {
  id?: number;
  name: string;
  email: string;
  cpf: string;
  telephone: string;
  status?: '' | 'Ativo' | 'Inativo' | 'Aguardando ativação' | 'Desativado';
}

const Customer: React.FC<CustomerProps> = ({
  id,
  name,
  email,
  cpf,
  telephone,
  status
}) => {
  const statusColor = () => {
    switch (status) {
      case 'Ativo':
        return 'bg-green-500';
      case 'Aguardando ativação':
        return 'bg-yellow-500';
      case 'Inativo':
        return 'bg-red-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <section
      id={cpf.replaceAll('.', '').replaceAll('-', '')}
      className="my-6 flex flex-wrap items-center justify-between gap-2 rounded-sm border px-6 py-4 text-zinc-500 md:flex-nowrap md:gap-0"
    >
      <div className="w-full md:w-3/12">
        <p className='text-xl text-black md:text-base'>{name}</p>
        <p>Email: {email}</p>
      </div>
      <div className='w-full md:w-3/12'>
        <p className='text-lg font-light text-black'>{cpf}</p>
        <p>{telephone}</p>
      </div>
      <div className='flex w-full items-center gap-2 md:w-3/12'>
        <div className={`h-4 w-4 rounded-full ${statusColor()}`} />
        <p>{status}</p>
      </div>
      <Link
        id={'editBtn' + cpf.replaceAll('.', '').replaceAll('-', '')}
        href={`/edit/${id}`}
        className="md:
          rounded border border-x-2 border-amber-500 px-8 py-2 text-sm text-amber-500
          hover:bg-amber-500 hover:text-white
        "
        type="button"
      >
        Editar
      </Link>
    </section>
  );
};

export default Customer;

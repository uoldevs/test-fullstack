"use client";

import React, { useState, useEffect } from 'react';
import CustomerCard from '../components/CustomerCard';
import Header from '@/components/Header';
import Link from 'next/link';
import { getUsers } from '@/services/api';
import Footer from '@/components/Footer';

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);

  async function fetchUsers() {
    const response = await getUsers();
    setCustomers(response);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="md:w-3/4 md:mx-auto">
      <Header />
      <div className='flex-row justify-between items-center mb-4'>
        <div className='flex md:justify-between justify-around w-full ml-1 md:mx-2'>
          <div>
            <p className="text-gray-600 text-xs md:text-lg">Listagem de usuários</p>
            <p className="text-gray-400 text-xs md:text-lg">Escolha um cliente para visualizar os detalhes</p>
          </div>
          <Link
            href="/customer/new"
            className="bg-orange-400 text-white text-xs md:text-lg px-4 py-2 rounded mt-2 mx-2"
          >
            Novo Cliente
          </Link>
        </div>
        <div>
          {customers.map((customer) => (
            <CustomerCard key={customer.id} customer={customer} />
          ))}
        </div>
      </div>
      <Footer numberOfCustomers={customers.length} />
    </div>
  );
};

export default CustomersPage;

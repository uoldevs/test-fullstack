import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CustomersPage from './page';
import { getUsers } from '../services/api';

jest.mock('../services/api');

describe('CustomersPage', () => {
  it('renders the header and customer list correctly', async () => {
    const mockCustomers = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        cpf: '123.456.789-00',
        phoneNumber: '(12) 3456-7890',
        status: 'Ativo',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        cpf: '123.456.789-00',
        phoneNumber: '(12) 3456-7890',
        status: 'Ativo',
      },
    ];

    getUsers.mockResolvedValue(mockCustomers);

    render(<CustomersPage />);

    await waitFor(() => {
      expect(screen.getByText('Listagem de usuários')).toBeInTheDocument();
      expect(screen.getByText('Escolha um cliente para visualizar os detalhes')).toBeInTheDocument();

      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    });
  });

  it('renders a link to create a new customer', () => {
    render(<CustomersPage />);
    
    const newCustomerLink = screen.getByText('Novo Cliente');
    expect(newCustomerLink).toBeInTheDocument();
    expect(newCustomerLink.getAttribute('href')).toBe('/customer/new');
  });

});

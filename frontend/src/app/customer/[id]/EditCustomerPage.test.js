import React from 'react';
import { render, screen } from '@testing-library/react';
import EditCustomerPage from './page';

jest.mock('../../../components/Header', () => () => <div data-testid="header-mock">Mock Header</div>);
jest.mock('../../../components/CustomerForm', () => () => <div data-testid="customer-form-mock">Mock CustomerForm</div>);

describe('EditCustomerPage', () => {
  it('renders header, title, description, and CustomerForm', () => {
    render(<EditCustomerPage />);

    expect(screen.getByTestId('header-mock')).toBeInTheDocument();

    expect(screen.getByText('Editar usuário')).toBeInTheDocument();
    expect(screen.getByText('Informe os campos a seguir para Editar usuário:')).toBeInTheDocument();

    expect(screen.getByTestId('customer-form-mock')).toBeInTheDocument();
  });
});

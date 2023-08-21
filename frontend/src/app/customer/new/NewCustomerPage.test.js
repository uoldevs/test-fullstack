import React from 'react';
import { render, screen } from '@testing-library/react';
import NewCustomerPage from './page';

jest.mock('../../../components/Header', () => () => <div data-testid="header-mock">Mock Header</div>);
jest.mock('../../../components/CustomerForm', () => () => <div data-testid="customer-form-mock">Mock CustomerForm</div>);

describe('NewCustomerPage', () => {
  it('renders header, title, description, and CustomerForm', () => {
    render(<NewCustomerPage />);

    expect(screen.getByTestId('header-mock')).toBeInTheDocument();

    expect(screen.getByText('Novo usuário')).toBeInTheDocument();
    expect(screen.getByText('Informe os campos a seguir para criar novo usuário:')).toBeInTheDocument();

    expect(screen.getByTestId('customer-form-mock')).toBeInTheDocument();
  });
});

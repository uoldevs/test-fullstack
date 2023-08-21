import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import CustomerForm from './CustomerForm';
import { createNewUser } from '@/services/api';

jest.mock('../services/api');

const mockAlert = jest.fn();
global.alert = mockAlert;

beforeEach(() => {
  mockAlert.mockClear();
});

describe('CustomerForm on path /customers/new', () => {
  it('renders form inputs correctly', () => {
    render(<CustomerForm />);
    expect(screen.getByPlaceholderText('Nome')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('CPF')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Telefone')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();

    expect(screen.getByText('Criar')).toBeInTheDocument();
    expect(screen.getByText('Voltar')).toBeInTheDocument();
  });

  it('formats the CPF input as the user types', () => {
    render(<CustomerForm />);

    fireEvent.change(screen.getByPlaceholderText('CPF'), { target: { value: '12345678900' } });
    expect(screen.getByDisplayValue('123.456.789-00')).toBeInTheDocument();
  });

  it('handles form submission with missing fields', async () => {
    render(<CustomerForm />);

    fireEvent.click(screen.getByText('Criar'));

    expect(mockAlert).toHaveBeenCalledWith('Por favor, preencha todos os campos.');
  });

  it('handles form submission with invalid CPF', async () => {
    act(() => {
      render(<CustomerForm />);
    });

    fireEvent.change(screen.getByPlaceholderText('Nome'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('E-mail'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('CPF'), { target: { value: '123' } });
    fireEvent.change(screen.getByPlaceholderText('Telefone'), { target: { value: '(12) 3456-7890' } });
    fireEvent.change(screen.getByTestId('status-select'), { target: { value: 'Ativo' } });

    fireEvent.click(screen.getByText('Criar'));

    expect(window.alert).toHaveBeenCalledWith('CPF inválido. Por favor, verifique o número inserido.');
  });

  it('handles form submission with invalid CPF(all digits equal)', async () => {
    act(() => {
      render(<CustomerForm />);
    });

    fireEvent.change(screen.getByPlaceholderText('Nome'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('E-mail'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('CPF'), { target: { value: '000.000.000-00' } });
    fireEvent.change(screen.getByPlaceholderText('Telefone'), { target: { value: '(12) 3456-7890' } });
    fireEvent.change(screen.getByTestId('status-select'), { target: { value: 'Ativo' } });

    fireEvent.click(screen.getByText('Criar'));

    expect(window.alert).toHaveBeenCalledWith('CPF inválido. Por favor, verifique o número inserido.');
  });

  it('handles form submission with valid data for new user', async () => {
    const mockUser = {
      name: 'John Doe',
      email: 'john@example.com',
      cpf: '432.212.640-54',
      phoneNumber: '(12) 3456-7890',
      status: 'Ativo',
    };

    createNewUser.mockResolvedValue(mockUser);

    act(() => {
      render(<CustomerForm />);
    });

    fireEvent.change(screen.getByPlaceholderText('Nome'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('E-mail'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('CPF'), { target: { value: '087.245.840-70' } });
    fireEvent.change(screen.getByPlaceholderText('Telefone'), { target: { value: '(12) 93456-7890' } });
    fireEvent.change(screen.getByTestId('status-select'), { target: { value: 'Ativo' } });

    fireEvent.click(screen.getByText('Criar'));

    await act(() => Promise.resolve());

    expect(mockAlert).toHaveBeenCalledWith('Cliente cadastrado com sucesso!');
  });
});

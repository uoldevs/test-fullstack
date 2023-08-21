import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import CustomerForm from './CustomerForm';
import { getUsersById, updateUser } from '@/services/api';

jest.mock('../services/api');

jest.mock('next/navigation', () => ({
  useParams: () => ({
    id: 1,
  }),
}));

const mockAlert = jest.fn();
global.alert = mockAlert;

describe('CustomerForm on path /customers/1', () => {
  it('fetches user data and populates the form for editing', async () => {
    const mockUser = {
      name: 'John Doe',
      email: 'john@example.com',
      cpf: '123.456.789-00',
      phoneNumber: '(12) 3456-7890',
      status: 'Ativo',
    };

    getUsersById.mockResolvedValue(mockUser);

    act(() => {
      render(<CustomerForm />);
    });

    await screen.findByDisplayValue(mockUser.name);

    expect(screen.getByDisplayValue(mockUser.name)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockUser.email)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockUser.cpf)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockUser.phoneNumber)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockUser.status)).toBeInTheDocument();
  });

  it('handles form submission with valid data for new user', async () => {
    const mockUser = {
      name: 'John Doe',
      email: 'john@example.com',
      cpf: '432.212.640-54',
      phoneNumber: '(12) 3456-7890',
      status: 'Ativo',
    };

    updateUser.mockResolvedValue(mockUser);

    act(() => {
      render(<CustomerForm />);
    });

    fireEvent.change(screen.getByPlaceholderText('Nome'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('E-mail'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('CPF'), { target: { value: '087.245.840-70' } });
    fireEvent.change(screen.getByPlaceholderText('Telefone'), { target: { value: '(12) 93456-7890' } });
    fireEvent.change(screen.getByTestId('status-select'), { target: { value: 'Ativo' } });

    fireEvent.click(screen.getByText('Editar'));

    await act(() => Promise.resolve());

    expect(mockAlert).toHaveBeenCalledWith('Cliente editado com sucesso!');
  });
});


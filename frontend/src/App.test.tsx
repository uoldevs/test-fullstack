import { render, screen } from '@testing-library/react';
import { Main } from './components/main/index';

test('Test informations in screen without backend', () => {
  render(<Main />);
  const clientsDescription = screen.getByText(/Painel de clientes/i);
  const listElement = screen.getByText(/Listagem de usuários/i);
  expect(clientsDescription).toBeInTheDocument();
  expect(listElement).toBeInTheDocument();
});

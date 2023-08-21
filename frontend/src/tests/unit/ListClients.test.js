import Provider from '../../context/Provider';
import App from '../../App';
import mock from './helpers/mockData';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';

test('ListClients - testa a página de listagem', async () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(mock),
  });
    const { user } = renderWithRouter(
      <Provider>
        <App />
      </Provider>
    )

    const subtitle = screen.getByRole('heading', {
      name: /listagem de usuários/i
    })
    const addClientButton = screen.getByRole('button', {
      name: /novo cliente/i
    })
    const infoClient = await waitFor(() => {
      return screen.getByText('test');
    });
    const infoClient2 = screen.getByText('test2');
    const clientsNumber =screen.getByText(/exibindo 2 clientes/i)

    expect(subtitle).toBeInTheDocument();
    expect(addClientButton).toBeInTheDocument();
    expect(infoClient).toBeInTheDocument();
    expect(infoClient2).toBeInTheDocument();
    expect(clientsNumber).toBeInTheDocument();

    await user.click(addClientButton);
    
    const addPage = await waitFor(() => { 
      return screen.getByRole('heading', {
      name: /novo usuário/i
    });
  });
    
    expect(addPage).toBeInTheDocument();
})

test('edit button' , async () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(mock),
  });
    const { user } = renderWithRouter(
      <Provider>
        <App />
      </Provider>
    )

    const EditClientButton = await waitFor(() => { 
      return screen.getAllByRole('button', {
      name: /editar/i
    });
  });

  await user.click(EditClientButton[0]);

  const editPage = await waitFor(() => {
    return screen.getByRole('heading', {
      name: /editar usuário/i
    })
  })

  expect(editPage).toBeInTheDocument();
})
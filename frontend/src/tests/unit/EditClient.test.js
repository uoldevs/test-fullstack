import Provider from '../../context/Provider';
import App from '../../App';
import mock from './helpers/mockData';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';

test('EditClients - testa a página de edição', async () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(mock),
  });
  
    const { user } = renderWithRouter(
      <Provider>
        <App />
      </Provider>)

  const EditClientButton = await waitFor(() => { 
      return screen.getAllByRole('button', {
      name: /editar/i
    });
  });

  await user.click(EditClientButton[0]);

  const inputs = screen.getAllByRole('textbox');

  expect(inputs[0].value).toBe('test');
  expect(inputs[1].value).toBe('test@test.com');

  await user.type(inputs[3], '27998099819');

  const editButton = screen.getByRole('button', {
    name: /editar/i
  })

  await user.click(editButton);
  
  expect(screen.getByRole('button', {
    name: /novo cliente/i
  })).toBeInTheDocument();

})
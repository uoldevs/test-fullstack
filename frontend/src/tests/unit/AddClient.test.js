import Provider from '../../context/Provider';
import App from '../../App';
import mock from './helpers/mockData';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';

test('AddClients - testa a página de criação', async () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(mock),
  });
  
    const { user } = renderWithRouter(
      <Provider>
        <App />
      </Provider>)

  const addClientButton = screen.getByRole('button', {
    name: /novo cliente/i
  })

  await user.click(addClientButton);

  const inputs = screen.getAllByRole('textbox');
  const select = screen.getByRole('combobox');
  const option = screen.getByRole("option", { name: "Ativo" });

  await user.type(inputs[0], 'test3');
  await user.type(inputs[1], 'test3@live.com');
  await user.type(inputs[2], '07822832506');
  await user.type(inputs[3], '27998099819');
  await user.selectOptions(select, option);

  const createButton = screen.getByRole('button', {
    name: /criar/i
  })

  await user.click(createButton);
  
  expect(screen.getByRole('button', {
    name: /novo cliente/i
  })).toBeInTheDocument();

})
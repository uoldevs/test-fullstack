import IClient from '../../src/interfaces/IClient';

export const clientMock: IClient = {
  name: 'Rafael',
  email: 'rafael@test.com',
  cpf: '48006900051',
  phonenumber: '7112345678',
  status: 'Ativo',
};

export const wrongPhonenumberClientMock: IClient = {
  name: 'Rafael',
  email: 'rafael@test.com',
  cpf: '48006900051',
  phonenumber: '71123456',
  status: 'Ativo',
};

export const clientMockWithId: IClient & { id: number } = {
  id: 1,
  name: 'Rafael',
  email: 'rafael@test.com',
  cpf: '48006900051',
  phonenumber: '7112345678',
  status: 'Ativo',
};

export const clientUpdateMock: IClient = {
  name: 'Rafael',
  email: 'rafael@test.com',
  cpf: '48006900051',
  phonenumber: '7161234534',
  status: 'Inativo',
};

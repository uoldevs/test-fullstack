import * as sinon from 'sinon';
import * as chai from 'chai';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import chaiHttp = require('chai-http');
import { afterEach, describe, it } from 'node:test';
import CustomerService from '../../api/services/CustomerService';
import { app } from '../../app';

chai.use(chaiHttp);

const { expect } = chai;

const allCustomers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@email.com',
    cpf: '350.887.750-75',
    phone: '(41) 99856-0101',
    status: 'Aguardando ativação',
  },
  {
    id: 2,
    name: 'Alan Turing',
    email: 'alanturing@email.com',
    cpf: '496.013.860-25',
    phone: '(11) 94402-8922',
    status: 'Ativo',
  },
  {
    id: 3,
    name: 'Ada Lovelace',
    email: 'adalovelace@email.com',
    cpf: '727.669.940-41',
    phone: '(71) 92220-0305',
    status: 'Desativado',
  },
  {
    id: 4,
    name: 'Nikola Tesla',
    email: 'tesla@email.com',
    cpf: '257.891.020-00',
    phone: '(51) 92560-1025',
    status: 'Inativo',
  },
];

const updatedCustomer = {
  id: 1,
  name: 'John Doe',
  email: 'newemail@email.com',
  cpf: '350.887.750-75',
  phone: '(41) 99856-0101',
  status: 'Aguardando ativação',
};

const customerService = new CustomerService();

describe('Testes de unidade dos services de customers', () => {
  afterEach(() => sinon.restore());

  it('Testa se é possivel obter a lista de todos os usuarios', async () => {
    sinon.stub(customerService, 'getAll').resolves(allCustomers);
    const response = await customerService.getAll();
    expect(response).to.be.equal(allCustomers);
  });

  it('Testa se é possivel obter um usuario pelo ID', async () => {
    sinon.stub(customerService, 'getById').resolves(allCustomers[0]);
    const response = await customerService.getById(1);
    expect(response).to.be.equal(allCustomers[0]);
  });

  it('Testa se retorna um erro caso o ID seja inválido', async () => {
    sinon.stub(customerService, 'getById').resolves(undefined);
    try {
      await customerService.getById(999);
    } catch (error) {
      expect((error as Error).message).to.be.equal(
        'There is no customer with such id!',
      );
    }
  });

  it('Testa se é possivel editar um usuario', async () => {
    const response = await chai
      .request(app)
      .put(`/customers/${updatedCustomer.id}`)
      .send(updatedCustomer);

    expect(response).to.have.status(200);
  });
});

/* eslint-disable import/no-extraneous-dependencies */
const { afterEach, beforeEach, describe, it } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../app');
const db = require('../models/usersModel');
const mockUsers = require('./mocks/mockUsers');

chai.use(chaiHttp);
const { expect } = chai;

describe('Teste da API Users', () => {
  beforeEach(() => {
    sinon.stub(db, 'all');
    sinon.stub(db, 'get');
    sinon.stub(db, 'run');
  });
  afterEach(() => {
    db.all.restore();
    db.get.restore();
    db.run.restore();
  });

  describe('/GET', () => {
    it('Verifica se retorna todos os usuários', async () => {
      db.all.yields(null, mockUsers);

      const response = await chai.request(app).get('/');

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(mockUsers);
    });
  });

  describe('/GET/:id', () => {
    it('Verifica se é retornado um usuário com base no seu :id', async () => {
      db.get.yields(null, mockUsers.mockUser);

      const response = await chai.request(app).get('/1');

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(mockUsers.mockUser);
    });
  });

  describe('/POST', () => {
    it('Verifica se um usuário é criado corretamente', async () => {
      db.run.yields(null);

      const response = await chai
        .request(app)
        .post('/')
        .send(mockUsers.newUser);

      expect(response).to.have.status(201);
      expect(response.body).to.be.deep.equal({
        message: 'Usuário criado com sucesso!',
      });
    });
  });

  describe('/PUT/:id', () => {
    it('Verifica se o usuário é atualizado corretamente', async () => {
      db.run.yields(null);
      const response = await chai
        .request(app)
        .put(`/1`)
        .send(mockUsers.updatedUser);

      expect(response).to.have.status(201);
      expect(response.body).to.be.deep.equal({
        message: 'Usuário atualizado com sucesso!',
      });
    });
  });

  describe('/DELETE/:id', () => {
    it('Verifica se o usuário é deletado corretamente', async () => {
      db.run.yields(null);

      const response = await chai.request(app).delete('/1');

      expect(response).to.have.status(202);
      expect(response.body).to.deep.equal({
        message: 'Usuário deletado com sucesso!',
      });
    });
  });
});

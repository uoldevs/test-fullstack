import { expect } from 'chai';
import sinon from 'sinon';
import ClientService from '../../../src/services/ClientService';
import {
  clientMock,
  clientMockWithId,
  clientUpdateMock,
} from '../../mocks/clientMock';
import ClientController from '../../../src/controllers/ClientController';
import { NextFunction, Request, Response } from 'express';

describe('Client controller', () => {
  const clientService = new ClientService();
  const clientController = new ClientController(clientService);
  const req = {} as Request;
  const res = {} as Response;
  const next = () => ({} as NextFunction);

  describe('Create a new client', () => {
    before(() => {
      sinon.stub(clientService, 'create').resolves();

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    after(() => {
      sinon.restore();
    });

    it('Successfully created', async () => {
      req.body = clientMock;
      await clientController.create(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect(
        (res.json as sinon.SinonStub).calledWith({ message: 'Client created' })
      ).to.be.true;
    });
  });

  describe('Find a client', () => {
    before(() => {
      sinon.stub(clientService, 'findById').resolves(clientMockWithId as any);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    after(() => {
      sinon.restore();
    });

    it('Successfully found', async () => {
      req.params = { id: String(clientMockWithId.id) };
      await clientController.findById(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(clientMockWithId)).to.be
        .true;
    });
  });

  describe('List all clients', () => {
    before(() => {
      sinon.stub(clientService, 'list').resolves([clientMockWithId] as any);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    after(() => {
      sinon.restore();
    });

    it('Returns all clients in the database', async () => {
      await clientController.list(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([clientMockWithId])).to.be
        .true;
    });
  });

  describe('Update a client', () => {
    before(() => {
      sinon.stub(clientService, 'update').resolves();

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      res.end = sinon.stub().returns(res);
    });

    after(() => {
      sinon.restore();
    });

    it('Successfully updated', async () => {
      req.params = { id: String(clientMockWithId.id) };
      req.body = clientUpdateMock;
      await clientController.update(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
      expect((res.end as sinon.SinonStub).calledWith()).to.be.true;
    });
  });
});

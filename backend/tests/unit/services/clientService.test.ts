import { expect } from 'chai';
import sinon from 'sinon';
import ClientService from '../../../src/services/ClientService';
import {
  clientMock,
  clientMockWithId,
  clientUpdateMock,
} from '../../mocks/clientMock';
import ClientModel from '../../../src/models/ClientModel';

describe('Client service', () => {
  const clientModel = new ClientModel();
  const clientService = new ClientService(clientModel);

  describe('Create a new client', () => {
    before(() => {
      sinon
        .stub(clientModel, 'findByCPF')
        .onCall(0)
        .resolves(null as any)
        .onCall(1)
        .resolves(clientMockWithId as any);
      sinon.stub(clientModel, 'create').resolves();
    });

    after(() => {
      sinon.restore();
    });

    it('Successfully created', async () => {
      const result = await clientService.create(clientMock);
      expect(result).to.be.undefined;
    });

    it('CPF already registered', async () => {
      try {
        await clientService.create(clientMock);
      } catch (error) {
        expect(error.message).to.be.eq('CPF already registered');
      }
    });
  });

  describe('Find a client', () => {
    before(() => {
      sinon
        .stub(clientModel, 'findById')
        .onCall(0)
        .resolves(clientMockWithId as any)
        .onCall(1)
        .resolves(null as any);
    });

    after(() => {
      sinon.restore();
    });

    it('Successfully found', async () => {
      const client = await clientService.findById(1);
      expect(client).to.be.deep.equal(clientMockWithId);
    });

    it('Non existing id', async () => {
      try {
        await clientService.findById(9999);
      } catch (error) {
        expect(error.message).to.be.eq('Client not found');
      }
    });
  });

  describe('List all clients', () => {
    before(() => {
      sinon.stub(clientModel, 'list').resolves([clientMockWithId] as any);
    });

    after(() => {
      sinon.restore();
    });

    it('Returns all clients in the database', async () => {
      const clients = await clientService.list();
      expect(clients).to.be.deep.equal([clientMockWithId]);
    });
  });

  describe('Update a client', () => {
    before(() => {
      sinon
        .stub(clientModel, 'findByCPF')
        .onCall(0)
        .resolves(null as any)
        .onCall(1)
        .resolves(null as any)
        .onCall(2)
        .resolves(clientMockWithId as any);
      sinon
        .stub(clientModel, 'findById')
        .onCall(0)
        .resolves(clientMockWithId as any)
        .onCall(1)
        .resolves(null as any);
      sinon.stub(clientModel, 'update').resolves();
    });

    after(() => {
      sinon.restore();
    });

    it('Successfully updated', async () => {
      const result = await clientService.update(1, clientUpdateMock);
      expect(result).to.be.undefined;
    });

    it('Non existing id', async () => {
      try {
        await clientService.update(9999, clientUpdateMock);
      } catch (error) {
        expect(error.message).to.be.eq('Client not found');
      }
    });

    it('CPF already registered', async () => {
      try {
        await clientService.update(1, clientUpdateMock);
      } catch (error) {
        expect(error.message).to.be.eq('CPF already registered');
      }
    });
  });
});

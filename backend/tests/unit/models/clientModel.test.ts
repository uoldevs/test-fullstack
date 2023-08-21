import { expect } from 'chai';
import sinon from 'sinon';
import ClientModel from '../../../src/models/ClientModel';
import {
  clientMock,
  clientMockWithId,
  clientUpdateMock,
} from '../../mocks/clientMock';
import conn from '../../../src/database/connection';

describe('Client model', () => {
  const clientModel = new ClientModel();

  describe('Create a new client', () => {
    before(() => {
      sinon.stub(conn, 'execute').resolves();
    });

    after(() => {
      sinon.restore();
    });

    it('Successfully created', async () => {
      const result = await clientModel.create(clientMock);
      expect(result).to.be.undefined;
    });
  });

  describe('Find a client', () => {
    before(() => {
      sinon
        .stub(conn, 'execute')
        .onCall(0)
        .resolves([[clientMockWithId]] as any)
        .onCall(1)
        .resolves([[null]] as any);
    });

    after(() => {
      sinon.restore();
    });

    it('Successfully found', async () => {
      const client = await clientModel.findById(1);
      expect(client).to.be.deep.equal(clientMockWithId);
    });

    it('Non existing id', async () => {
      const client = await clientModel.findById(9999);
      expect(client).to.be.null;
    });
  });

  describe('List all clients', () => {
    before(() => {
      sinon.stub(conn, 'execute').resolves([[clientMockWithId]] as any);
    });

    after(() => {
      sinon.restore();
    });

    it('Returns all clients in the database', async () => {
      const clients = await clientModel.list();
      expect(clients).to.be.deep.equal([clientMockWithId]);
    });
  });

  describe('Update a client', () => {
    before(() => {
      sinon.stub(conn, 'execute').resolves();
    });

    after(() => {
      sinon.restore();
    });

    it('Successfully updated', async () => {
      const result = await clientModel.update(1, clientUpdateMock);
      expect(result).to.be.undefined;
    });
  });
});

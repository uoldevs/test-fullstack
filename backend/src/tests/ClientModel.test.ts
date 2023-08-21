import chai, { expect } from 'chai';
import sinon from 'sinon';
import { Database } from 'sqlite3';
import ClientModel from '../models/ClientModel';
import chaiAsPromised from 'chai-as-promised';
import IClient from '../interfaces/IClient';

chai.use(chaiAsPromised);

describe('ClientModel', () => {
	beforeEach(function () {
		sinon.restore();
	});
	describe('getAll', () => {
		it('should return all clients', async () => {
			const dbInstance = new Database(':memory:'); // Use an in-memory database for testing
			const dbAllStub = sinon.stub(dbInstance, 'all').yields(null, []);
			const clientModel = new ClientModel(dbInstance);

			const result = await clientModel.getAll();

			expect(result).to.deep.equal([]);
			expect(dbAllStub.calledOnce).to.be.true;

			dbAllStub.restore();
		});
	});

	describe('create', () => {
		it('should create a client', async () => {
			const dbInstance = new Database(':memory:');
			const client = { name: 'Test Client', email: 'test@example.com', cpf: '123456789', phone: '1234567890', status: 'ativo' };
			const dbRunStub = sinon.stub(dbInstance, 'run').yields(null, client);
			const clientModel = new ClientModel(dbInstance);
			
			await expect(clientModel.create(client as unknown as IClient)).to.be.fulfilled;
			expect(dbRunStub.calledOnce).to.be.true;

			dbRunStub.restore();
		});
	});

	describe('update', () => {
		it('should update a client', async () => {
			const dbInstance = new Database(':memory:');
			const client = { name: 'Updated Client', email: 'updated@example.com', cpf: '987654321', phone: '9876543210', status: 'inativo' };
			const dbRunStub = sinon.stub(dbInstance, 'run').yields(null, client);
			const clientModel = new ClientModel(dbInstance);

			await expect(clientModel.update(client as unknown as IClient, 1)).to.be.fulfilled;

			expect(dbRunStub.calledOnce).to.be.true;

			dbRunStub.restore();
		});
	});
});

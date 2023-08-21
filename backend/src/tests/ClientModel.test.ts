import chai, { expect } from 'chai';
import sinon from 'sinon';
import { Database } from 'sqlite3';
import ClientModel from '../models/ClientModel';
import chaiAsPromised from 'chai-as-promised';
import IClient from '../interfaces/IClient';
import ClientMock from './mocks/Client.mock';

chai.use(chaiAsPromised);

describe('ClientModel', () => {
	beforeEach(function () {
		sinon.restore();
	});
	describe('getAll', () => {
		it('should return all clients', async () => {
			const dbInstance = new Database(':memory:');
			const dbAllStub = sinon.stub(dbInstance, 'all').yields(null, ClientMock.mock);
			const clientModel = new ClientModel(dbInstance);

			const result = await clientModel.getAll();

			expect(result).to.deep.equal(ClientMock.mock);
			expect(dbAllStub.calledOnce).to.be.true;

			dbAllStub.restore();
		});
	});

	describe('create', () => {
		it('should create a client', async () => {
			const dbInstance = new Database(':memory:');
			const dbRunStub = sinon.stub(dbInstance, 'run').yields(null, ClientMock.mockCreate);
			const clientModel = new ClientModel(dbInstance);
			
			await expect(clientModel.create(ClientMock.mockCreate as unknown as IClient)).to.be.fulfilled;
			expect(dbRunStub.calledOnce).to.be.true;

			dbRunStub.restore();
		});
	});

	describe('update', () => {
		it('should update a client', async () => {
			const dbInstance = new Database(':memory:');
			const dbRunStub = sinon.stub(dbInstance, 'run').yields(null, ClientMock.mockCreate);
			const clientModel = new ClientModel(dbInstance);

			await expect(clientModel.update(ClientMock.mockCreate as unknown as IClient, 1)).to.be.fulfilled;

			expect(dbRunStub.calledOnce).to.be.true;

			dbRunStub.restore();
		});
	});
});

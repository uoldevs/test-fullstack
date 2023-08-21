import { expect } from 'chai';
import sinon from 'sinon';
import ClientService from '../services/ClientService';
import ClientModel from '../models/ClientModel';
import IClient from '../interfaces/IClient';
import ClientMock from './mocks/Client.mock';

describe('ClientService', () => {

	beforeEach(function () {
		sinon.restore();
	});
	describe('getAll', () => {
		it('should return all clients', async () => {
			const getAllStub = sinon.stub(ClientModel.prototype, 'getAll').resolves(ClientMock.mock);
     
			const clientService = new ClientService();
			const result = await clientService.getAll();

			expect(result).to.deep.equal(ClientMock.mock);
			expect(getAllStub.calledOnce).to.be.true;

			getAllStub.restore();
		});
	});

	describe('create', () => {
		it('should create a client', async () => {
			const createStub = sinon.stub(ClientModel.prototype, 'create');

			const clientService = new ClientService();
			await clientService.create(ClientMock.mockCreate);

			expect(createStub.calledOnceWith(ClientMock.mockCreate)).to.be.true;

			createStub.restore();
		});
	});

	describe('update', () => {
		it('should update a client', async () => {
			const client: IClient = { name: 'Updated Client', email: 'updated@example.com', cpf: '07822832506', phone: '(73) 99808-9919', status: 'ativo' };
			const updateStub = sinon.stub(ClientModel.prototype, 'update');

			const clientService = new ClientService();
			const id = 1;
			await clientService.update(client, id);

			expect(updateStub.calledOnceWith(client, id)).to.be.true;

			updateStub.restore();
		});
	});
});

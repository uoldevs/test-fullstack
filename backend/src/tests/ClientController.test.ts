import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ClientService from '../services/ClientService';
import mocks from './mocks/Client.mock';
import ClientController from '../controllers/ClientController';
import IClient from '../interfaces/IClient';

chai.use(sinonChai);

describe('ClientController', () => {
	const req = {} as Request;
	const res = {} as Response;
	beforeEach(function () {
		res.status = sinon.stub().returns(res);
		res.json = sinon.stub().returns(res);
		sinon.restore();
	});
	describe('getAll', () => {
		it('should return all clients', async () => {
			const getAllStub = sinon.stub(ClientService.prototype, 'getAll').resolves(mocks.mock as unknown as IClient[]);
	
			const controller = new ClientController();
			await controller.getAll(req, res);

			expect(getAllStub.calledOnce).to.be.true;
			expect(res.status).to.have.been.calledWith(200);
			expect(res.json).to.have.been.calledWith(mocks.mock);
		});
	});

	describe('create', () => {
		it('should create a client', async () => {
			const createStub = sinon.stub(ClientService.prototype, 'create').resolves();
      
			const controller = new ClientController();
			await controller.create(req, res);

			expect(createStub.calledOnce).to.be.true;
			expect(res.status).to.have.been.calledWith(201);
			expect(res.json).to.have.been.calledWith({ message: 'Client Created' });
		});
	});

	describe('update', () => {
		it('should update a client', async () => {
			const updateStub = sinon.stub(ClientService.prototype, 'update').resolves();
			const req = { body: mocks.mockCreate, params: { id: '1' } } as unknown as Request;
			const res = {
				status: sinon.stub().returnsThis(),
				json: sinon.stub()
			} as unknown as Response;
      
			const controller = new ClientController();
			await controller.update(req, res);

			expect(updateStub.calledOnceWith(req.body, 1)).to.be.true;
			expect(res.status).to.have.been.calledWith(200);
			expect(res.json).to.have.been.calledWith({ message: 'Client updated' });
		});
	});
});

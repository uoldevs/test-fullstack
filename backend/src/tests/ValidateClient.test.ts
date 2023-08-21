import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import validateClient from '../middlewares/validateclient';

chai.use(sinonChai);
  
describe('validateClient middleware', () => {
	let req: Partial<Request>;
	let res: Partial<Response>;
	let next: sinon.SinonSpy;

	beforeEach(() => {
		req = { body: {} };
		res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
		next = sinon.spy();
	});

	it('should pass validation for valid input', () => {
		req.body = {
			email: 'test@example.com',
			name: 'John Doe',
			cpf: '078.228.325-06',
			phone: '(73) 99808-9919',
			status: 'ativo'
		};

		validateClient(req as Request, res as Response, next);

		expect(res.status).to.not.have.been.called;
		expect(res.json).to.have.been.not.called;
		expect(next).to.have.been.calledOnce;
	});

	it('should return 400 when required fields are missing', () => {
		validateClient(req as Request, res as Response, next);

		expect(res.status).to.have.been.calledOnceWith(400);
		expect(res.json).to.have.been.calledOnceWith({ message: 'All fields must be filled' });
		expect(next.notCalled).to.be.true;
	});

	it('should return 401 when email is invalid', () => {
		req.body = { email: 'invalid-email', name: 'John Doe', cpf: '123.456.789-09', phone: '1234567890', status: 'active' };

		validateClient(req as Request, res as Response, next);

		expect(res.status).to.have.been.calledOnceWith(401);
		expect(res.json).to.have.been.calledOnceWith({ message: 'Invalid email' });
		expect(next.notCalled).to.be.true;
	});

	it('should return 401 when cpf is invalid', () => {
		req.body = { email: 'test@example.com', name: 'John Doe', cpf: 'invalid-cpf', phone: '1234567890', status: 'active' };

		validateClient(req as Request, res as Response, next);

		expect(res.status).to.have.been.calledOnceWith(401);
		expect(res.json).to.have.been.calledOnceWith({ message: 'Invalid cpf' });
		expect(next.notCalled).to.be.true;
	});

	it('should return 401 when phone number is invalid', () => {
		req.body = { email: 'test@example.com', name: 'John Doe', cpf: '07822832506', phone: 'invalid-phone', status: 'active' };

		validateClient(req as Request, res as Response, next);

		expect(res.status).to.have.been.calledOnceWith(401);
		expect(res.json).to.have.been.calledOnceWith({ message: 'Invalid phone number' });
		expect(next.notCalled).to.be.true;
	});
});

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importStar(require("chai"));
const sinon_1 = __importDefault(require("sinon"));
const sinon_chai_1 = __importDefault(require("sinon-chai"));
const validateclient_1 = __importDefault(require("../middlewares/validateclient"));
chai_1.default.use(sinon_chai_1.default);
describe('validateClient middleware', () => {
    let req;
    let res;
    let next;
    beforeEach(() => {
        req = { body: {} };
        res = { status: sinon_1.default.stub().returnsThis(), json: sinon_1.default.stub() };
        next = sinon_1.default.spy();
    });
    it('should pass validation for valid input', () => {
        req.body = {
            email: 'test@example.com',
            name: 'John Doe',
            cpf: '078.228.325-06',
            phone: '(73) 99808-9919',
            status: 'ativo'
        };
        (0, validateclient_1.default)(req, res, next);
        (0, chai_1.expect)(res.status).to.not.have.been.called;
        (0, chai_1.expect)(res.json).to.have.been.not.called;
        (0, chai_1.expect)(next).to.have.been.calledOnce;
    });
    it('should return 400 when required fields are missing', () => {
        (0, validateclient_1.default)(req, res, next);
        (0, chai_1.expect)(res.status).to.have.been.calledOnceWith(400);
        (0, chai_1.expect)(res.json).to.have.been.calledOnceWith({ message: 'All fields must be filled' });
        (0, chai_1.expect)(next.notCalled).to.be.true;
    });
    it('should return 401 when email is invalid', () => {
        req.body = { email: 'invalid-email', name: 'John Doe', cpf: '123.456.789-09', phone: '1234567890', status: 'active' };
        (0, validateclient_1.default)(req, res, next);
        (0, chai_1.expect)(res.status).to.have.been.calledOnceWith(401);
        (0, chai_1.expect)(res.json).to.have.been.calledOnceWith({ message: 'Invalid email' });
        (0, chai_1.expect)(next.notCalled).to.be.true;
    });
    it('should return 401 when cpf is invalid', () => {
        req.body = { email: 'test@example.com', name: 'John Doe', cpf: 'invalid-cpf', phone: '1234567890', status: 'active' };
        (0, validateclient_1.default)(req, res, next);
        (0, chai_1.expect)(res.status).to.have.been.calledOnceWith(401);
        (0, chai_1.expect)(res.json).to.have.been.calledOnceWith({ message: 'Invalid cpf' });
        (0, chai_1.expect)(next.notCalled).to.be.true;
    });
    it('should return 401 when phone number is invalid', () => {
        req.body = { email: 'test@example.com', name: 'John Doe', cpf: '07822832506', phone: 'invalid-phone', status: 'active' };
        (0, validateclient_1.default)(req, res, next);
        (0, chai_1.expect)(res.status).to.have.been.calledOnceWith(401);
        (0, chai_1.expect)(res.json).to.have.been.calledOnceWith({ message: 'Invalid phone number' });
        (0, chai_1.expect)(next.notCalled).to.be.true;
    });
});

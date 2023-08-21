"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = __importDefault(require("sinon"));
const ClientService_1 = __importDefault(require("../services/ClientService"));
const ClientModel_1 = __importDefault(require("../models/ClientModel"));
const Client_mock_1 = __importDefault(require("./mocks/Client.mock"));
describe('ClientService', () => {
    beforeEach(function () {
        sinon_1.default.restore();
    });
    describe('getAll', () => {
        it('should return all clients', () => __awaiter(void 0, void 0, void 0, function* () {
            const getAllStub = sinon_1.default.stub(ClientModel_1.default.prototype, 'getAll').resolves(Client_mock_1.default.mock);
            const clientService = new ClientService_1.default();
            const result = yield clientService.getAll();
            (0, chai_1.expect)(result).to.deep.equal(Client_mock_1.default.mock);
            (0, chai_1.expect)(getAllStub.calledOnce).to.be.true;
            getAllStub.restore();
        }));
    });
    describe('create', () => {
        it('should create a client', () => __awaiter(void 0, void 0, void 0, function* () {
            const createStub = sinon_1.default.stub(ClientModel_1.default.prototype, 'create');
            const clientService = new ClientService_1.default();
            yield clientService.create(Client_mock_1.default.mockCreate);
            (0, chai_1.expect)(createStub.calledOnceWith(Client_mock_1.default.mockCreate)).to.be.true;
            createStub.restore();
        }));
    });
    describe('update', () => {
        it('should update a client', () => __awaiter(void 0, void 0, void 0, function* () {
            const client = { name: 'Updated Client', email: 'updated@example.com', cpf: '07822832506', phone: '(73) 99808-9919', status: 'ativo' };
            const updateStub = sinon_1.default.stub(ClientModel_1.default.prototype, 'update');
            const clientService = new ClientService_1.default();
            const id = 1;
            yield clientService.update(client, id);
            // expect(result).to.deep.equal({id: 1, ...client});
            (0, chai_1.expect)(updateStub.calledOnceWith(client, id)).to.be.true;
            updateStub.restore();
        }));
    });
});

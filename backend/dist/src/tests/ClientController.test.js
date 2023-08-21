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
const chai_1 = __importStar(require("chai"));
const sinon_1 = __importDefault(require("sinon"));
const sinon_chai_1 = __importDefault(require("sinon-chai"));
const ClientService_1 = __importDefault(require("../services/ClientService"));
const Client_mock_1 = __importDefault(require("./mocks/Client.mock"));
const ClientController_1 = __importDefault(require("../controllers/ClientController"));
chai_1.default.use(sinon_chai_1.default);
describe('ClientController', () => {
    const req = {};
    const res = {};
    beforeEach(function () {
        res.status = sinon_1.default.stub().returns(res);
        res.json = sinon_1.default.stub().returns(res);
        sinon_1.default.restore();
    });
    describe('getAll', () => {
        it('should return all clients', () => __awaiter(void 0, void 0, void 0, function* () {
            const getAllStub = sinon_1.default.stub(ClientService_1.default.prototype, 'getAll').resolves(Client_mock_1.default.mock);
            const controller = new ClientController_1.default();
            yield controller.getAll(req, res);
            (0, chai_1.expect)(getAllStub.calledOnce).to.be.true;
            (0, chai_1.expect)(res.status).to.have.been.calledWith(200);
            (0, chai_1.expect)(res.json).to.have.been.calledWith(Client_mock_1.default.mock);
        }));
    });
    describe('create', () => {
        it('should create a client', () => __awaiter(void 0, void 0, void 0, function* () {
            const createStub = sinon_1.default.stub(ClientService_1.default.prototype, 'create').resolves();
            const controller = new ClientController_1.default();
            yield controller.create(req, res);
            (0, chai_1.expect)(createStub.calledOnce).to.be.true;
            (0, chai_1.expect)(res.status).to.have.been.calledWith(201);
            (0, chai_1.expect)(res.json).to.have.been.calledWith({ message: 'Client Created' });
        }));
    });
    describe('update', () => {
        it('should update a client', () => __awaiter(void 0, void 0, void 0, function* () {
            const updateStub = sinon_1.default.stub(ClientService_1.default.prototype, 'update').resolves();
            const req = { body: Client_mock_1.default.mockCreate, params: { id: '1' } };
            const res = {
                status: sinon_1.default.stub().returnsThis(),
                json: sinon_1.default.stub()
            };
            const controller = new ClientController_1.default();
            yield controller.update(req, res);
            (0, chai_1.expect)(updateStub.calledOnceWith(req.body, 1)).to.be.true;
            (0, chai_1.expect)(res.status).to.have.been.calledWith(200);
            (0, chai_1.expect)(res.json).to.have.been.calledWith({ message: 'Client updated' });
        }));
    });
});

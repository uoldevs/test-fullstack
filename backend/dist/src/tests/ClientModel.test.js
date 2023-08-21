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
const sqlite3_1 = require("sqlite3");
const ClientModel_1 = __importDefault(require("../models/ClientModel"));
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
const Client_mock_1 = __importDefault(require("./mocks/Client.mock"));
chai_1.default.use(chai_as_promised_1.default);
describe('ClientModel', () => {
    beforeEach(function () {
        sinon_1.default.restore();
    });
    describe('getAll', () => {
        it('should return all clients', () => __awaiter(void 0, void 0, void 0, function* () {
            const dbInstance = new sqlite3_1.Database(':memory:');
            const dbAllStub = sinon_1.default.stub(dbInstance, 'all').yields(null, Client_mock_1.default.mock);
            const clientModel = new ClientModel_1.default(dbInstance);
            const result = yield clientModel.getAll();
            (0, chai_1.expect)(result).to.deep.equal(Client_mock_1.default.mock);
            (0, chai_1.expect)(dbAllStub.calledOnce).to.be.true;
            dbAllStub.restore();
        }));
    });
    describe('create', () => {
        it('should create a client', () => __awaiter(void 0, void 0, void 0, function* () {
            const dbInstance = new sqlite3_1.Database(':memory:');
            const dbRunStub = sinon_1.default.stub(dbInstance, 'run').yields(null, Client_mock_1.default.mockCreate);
            const clientModel = new ClientModel_1.default(dbInstance);
            yield (0, chai_1.expect)(clientModel.create(Client_mock_1.default.mockCreate)).to.be.fulfilled;
            (0, chai_1.expect)(dbRunStub.calledOnce).to.be.true;
            dbRunStub.restore();
        }));
    });
    describe('update', () => {
        it('should update a client', () => __awaiter(void 0, void 0, void 0, function* () {
            const dbInstance = new sqlite3_1.Database(':memory:');
            const dbRunStub = sinon_1.default.stub(dbInstance, 'run').yields(null, Client_mock_1.default.mockCreate);
            const clientModel = new ClientModel_1.default(dbInstance);
            yield (0, chai_1.expect)(clientModel.update(Client_mock_1.default.mockCreate, 1)).to.be.fulfilled;
            (0, chai_1.expect)(dbRunStub.calledOnce).to.be.true;
            dbRunStub.restore();
        }));
    });
});

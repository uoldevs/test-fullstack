"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock = [
    {
        id: 1,
        name: 'test',
        email: 'test@live.com',
        cpf: '88389016192',
        phone: '(73) 99868-9718',
        status: 'Ativo'
    },
    {
        id: 2,
        name: 'test2',
        email: 'test2@live.com',
        cpf: '69525293572',
        phone: '(73) 99856-9412',
        status: 'Desativado'
    }
];
const mockCreate = {
    name: 'test3',
    email: 'tes32@live.com',
    cpf: '75504051150',
    phone: '(73) 99820-9318',
    status: 'Desativado'
};
exports.default = {
    mock, mockCreate
};

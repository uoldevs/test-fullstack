// Subir o servidor no supertest
// Criar variável de ambiente para rodar o teste no bd de teste

import request from 'supertest';
const server = require('../../src/index');
const connection  = require('../../src/db/models/index');

interface User {
    id?: Number,
    username?: String,
    email?: String,
    cpf?: String,
    status?: String,
    phone?: String,
  }

describe("Testa mensagens de falta de usuários e middlewares de falta de dados na requisição.", () => {
    it("(get-users) Testa caso não tenha usuários no banco de dados",  async () => {
        const response = await request(server).get("/get-users")
        expect(response.body.message).toEqual('Nenhum usuário encontrado!')
        expect(response.statusCode).toEqual(400)
    })

    it("(Create-user) Testando após cadastrar usuário sem username",  async () => {
        const requestData: User = {
            email: "testee@teste.com",
            cpf: "61804896020",
            status: "Desativado",
            phone: "24998655581",
        };
        const response = await request(server).post("/create-user").send(requestData);
        expect(response.body.message).toEqual('O username é obrigatório e deve ser uma string.')
        expect(response.statusCode).toEqual(400)
    })
    it("(Create-user) Testando após cadastrar usuário sem cpf",  async () => {
        const requestData: User = {
            username: "Teste",
            email: "testee@teste.com",
            status: "Desativado",
            phone: "24998655581",
        };
        const response = await request(server).post("/create-user").send(requestData);
        expect(response.body.message).toEqual('O cpf é obrigatório e deve ser uma string.')
        expect(response.statusCode).toEqual(400)
    })
    it("(Create-user) Testando após cadastrar usuário sem email",  async () => {
        const requestData: User = {
            username: "Teste",
            cpf: "61804896020",
            status: "Desativado",
            phone: "24998655581",
        };
        const response = await request(server).post("/create-user").send(requestData);
        expect(response.body.message).toEqual('O email é obrigatório e deve ser uma string.')
        expect(response.statusCode).toEqual(400)
    })
    it("(Create-user) Testando após cadastrar usuário sem status",  async () => {
        const requestData: User = {
            username: "Teste",
            email: "testee@teste.com",
            cpf: "61804896020",
            phone: "24998655581",
        };
        const response = await request(server).post("/create-user").send(requestData);
        expect(response.body.message).toEqual('O status é obrigatório e deve ser uma string.')
        expect(response.statusCode).toEqual(400)
    })
    it("(Create-user) Testando após cadastrar usuário sem phone",  async () => {
        const requestData: User = {
            username: "Teste",
            email: "testee@teste.com",
            cpf: "61804896020",
            status: "Desativado",
        };
        const response = await request(server).post("/create-user").send(requestData);
        expect(response.body.message).toEqual('O phone é obrigatório e deve ser uma string.')
        expect(response.statusCode).toEqual(400)
    })
    it("(Update-user) Testando após cadastrar usuário sem username",  async () => {
        const requestData: User = {
            email: "teste@teste.com",
            cpf: "61804896020",
            status: "Desativado",
            phone: "24998655581",

        };
        const response = await request(server).put("/update-user").send(requestData);
        expect(response.statusCode).toEqual(400)
        expect(response.body.message).toEqual('O username é obrigatório e deve ser uma string.')
    })
    it("(Update-user) Testando após cadastrar usuário sem cpf",  async () => {
        const requestData: User = {
            username: "Teste",
            email: "teste@teste.com",
            status: "Desativado",
            phone: "24998655581",

        };
        const response = await request(server).put("/update-user").send(requestData);
        expect(response.statusCode).toEqual(400)
        expect(response.body.message).toEqual('O cpf é obrigatório e deve ser uma string.')
    })
    it("(Update-user) Testando após cadastrar usuário sem email",  async () => {
        const requestData: User = {
            username: "Teste",
            cpf: "61804896020",
            status: "Desativado",
            phone: "24998655581",

        };
        const response = await request(server).put("/update-user").send(requestData);
        expect(response.statusCode).toEqual(400)
        expect(response.body.message).toEqual('O email é obrigatório e deve ser uma string.')
    })
    it("(Update-user) Testando após cadastrar usuário sem status",  async () => {
        const requestData: User = {
            username: "Teste",
            email: "teste@teste.com",
            cpf: "61804896020",
            phone: "24998655581",
        };
        const response = await request(server).put("/update-user").send(requestData);
        expect(response.statusCode).toEqual(400)
        expect(response.body.message).toEqual('O status é obrigatório e deve ser uma string.')
    })
    it("(Update-user) Testando após cadastrar usuário sem phone",  async () => {
        const requestData: User = {
            username: "Teste",
            email: "teste@teste.com",
            cpf: "61804896020",
            status: "Desativado",
        };
        const response = await request(server).put("/update-user").send(requestData);
        expect(response.statusCode).toEqual(400)
        expect(response.body.message).toEqual('O phone é obrigatório e deve ser uma string.')
    })
}
)
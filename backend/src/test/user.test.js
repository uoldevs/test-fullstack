const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { expect } = chai;
const Chance = require('chance');
const chance = new Chance();

chai.use(chaiHttp);

describe('API de Usuários', () => {

    describe('GET /user', () => {
        it('deve obter uma lista de usuários', async () => {
            const res = await chai.request(app).get('/user');
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
        });
    });

    describe('POST /user', () => {
        it('deve criar um novo usuário', async () => {
            const novoUsuario = {
                name: chance.name(),
                email: chance.email(),
                cpf: "098.765.432-00",
                telefone: "(87) 98765-4321",
                status: 'Ativo'
            };

            const res = await chai.request(app).post('/user').send(novoUsuario);
            expect(res).to.have.status(201);
            expect(res.body).to.have.property('id');
        });

        it('não deve criar um usuário com dados inválidos', async () => {
            const usuarioInvalido = {
                name: 'Usuário Inválido',
                email: 'invalido',
                cpf: '123.456.789-00',
                telefone: '(11) 1234-5678',
                status: 'Inválido'
            };

            const res = await chai.request(app).post('/user').send(usuarioInvalido);
            expect(res).to.have.status(400);
        });


        it('não deve criar um usuário que já está cadastrado', async () => {
            const usuarioExistente = {
                name: 'Zaira',
                email: 'zaza@test.com',
                cpf: '200.000.000-00',
                telefone: '(10) 02000-0000',
                status: 'Ativo'
            };

            const res = await chai.request(app).post('/user').send(usuarioExistente);
            expect(res).to.have.status(400);
        });
    });

    describe('PUT /user/:id', () => {
        it('deve atualizar um usuário existente', async () => {
            const dadosAtualizados = {
                name: 'Usuário Atualizado',
                email: 'atualizado@example.com',
                cpf: '123.456.789-00',
                telefone: '(11) 1234-5678',
                status: 'Ativo'
            };

            const res = await chai.request(app).put('/user/1').send(dadosAtualizados);
            expect(res).to.have.status(200);
        });

        it('não deve atualizar um usuário com dados inválidos', async () => {
            const dadosInvalidos = {
                name: 'Usuário Atualizado',
                email: 'invalido',
                cpf: '123.456.789-00',
                telefone: '(11) 1234-5678',
                status: 'Inválido'
            };

            const res = await chai.request(app).put('/user/1').send(dadosInvalidos);
            expect(res).to.have.status(400);
        });

        it('deve retornar 404 se o usuário não existir', async () => {
            const dadosAtualizados = {
                name: chance.name(),
                email: chance.email(),
                cpf: '123.456.789-00',
                telefone: '(11) 1234-5678',
                status: 'Ativo'
            };

            const res = await chai.request(app).put('/user/9999').send(dadosAtualizados);
            expect(res).to.have.status(404);
        });
    });

});

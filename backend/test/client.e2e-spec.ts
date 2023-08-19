import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import ApiRoutes from '../src/constants/ApiRoutes';
import { PrismaClient } from '@prisma/client';
import PrismaTest from './utils/PrismaTest';
import * as dataMock from './dataMock/clientst';
import SerializeBody from './utils/SerializeBody';

describe('Testing route /clients', () => {
  let app: INestApplication;
  const originalEnv = process.env;
  const prisma = new PrismaClient({
    datasources: { db: { url: 'file:./dev-test.db' } },
  });
  const prismaTest = new PrismaTest(prisma);

  beforeAll(async () => {
    process.env = {
      ...originalEnv,
      DATABASE_URL: 'file:./dev-test.db',
    };

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    await prismaTest.createManyClients(dataMock.getClients);
  });

  afterAll(async () => {
    jest.restoreAllMocks();
    await prismaTest.deleteManyClients();

    process.env = originalEnv;
    await app.close();
  });

  describe('/clients (GET)', () => {
    it('Testing when /clients (GET) have sucess', async () => {
      const { status, body } = await request(app.getHttpServer()).get(
        ApiRoutes.CLIENTS,
      );

      expect(status).toBe(200);
      body.map((e, i) => {
        expect(e.name).toBe(dataMock.getClients[i].name);
        expect(e.email).toBe(dataMock.getClients[i].email);
        expect(e.cpf).toBe(dataMock.getClients[i].cpf);
        expect(e.phoneNumber).toBe(dataMock.getClients[i].phoneNumber);
        expect(e.status).toEqual(dataMock.getClients[i].status);
      });
      expect(body).toBeInstanceOf(Array);
      expect(body).toHaveLength(3);
    });
  });

  describe('/clients (POST)', () => {
    it('Testing when create a client successfully', async () => {
      const { status, body } = await request(app.getHttpServer())
        .post(ApiRoutes.CLIENTS)
        .send(dataMock.clientToCreate);

      expect(status).toBe(201);
      expect(body.name).toBe(dataMock.clientToCreate.name);
      expect(body.email).toBe(dataMock.clientToCreate.email);
      expect(body.cpf).toBe(dataMock.clientToCreate.cpf);
      expect(body.phoneNumber).toBe(dataMock.clientToCreate.phoneNumber);
      expect(body.status).toEqual(dataMock.clientToCreate.status);
    });

    describe('Testing when have a error in create', () => {
      const dataConflictErrorMsg = 'Dados de úsuario que já estão cadastrado';
      const serializeBody = new SerializeBody(dataMock.clientToCreate);
      const repeatedEmail = dataMock.getClients[0].email;
      const repeatedCpf = dataMock.getClients[0].cpf;
      const repeatedPhoneNumber = dataMock.getClients[0].phoneNumber;

      it('When create with a client email repeated', async () => {
        const { status, body } = await request(app.getHttpServer())
          .post(ApiRoutes.CLIENTS)
          .send(serializeBody.changeKeyValue('email', repeatedEmail));

        expect(status).toBe(409);
        expect(body.message).toBe(dataConflictErrorMsg);
        expect(body.error).toBe('Conflict');
        expect(body.statusCode).toBe(409);
      });

      it('When create with a client cpf repeated', async () => {
        const { status, body } = await request(app.getHttpServer())
          .post(ApiRoutes.CLIENTS)
          .send(serializeBody.changeKeyValue('cpf', repeatedCpf));

        expect(status).toBe(409);
        expect(body.message).toBe(dataConflictErrorMsg);
        expect(body.error).toBe('Conflict');
        expect(body.statusCode).toBe(409);
      });

      it('When create with a client phoneNumber repeated', async () => {
        const { status, body } = await request(app.getHttpServer())
          .post(ApiRoutes.CLIENTS)
          .send(
            serializeBody.changeKeyValue('phoneNumber', repeatedPhoneNumber),
          );

        expect(status).toBe(409);
        expect(body.message).toBe(dataConflictErrorMsg);
        expect(body.error).toBe('Conflict');
        expect(body.statusCode).toBe(409);
      });
    });

    describe('Testing when have a error in body', () => {
      const serializeBody = new SerializeBody(dataMock.clientToCreate);

      describe('Error in name field', () => {
        it('Name is not send', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.removeKey('name'));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O nome não pode ser vazio');
        });

        it('Name is empty', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('name', ''));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O nome não pode ser vazio');
        });

        it('Name is not a string', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('name', 1));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O nome deve ser uma string');
        });

        it('Name have over than 100 char', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.repeatChar('name', 20));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O nome deve ter no máximo 100 caracteres');
        });
      });

      describe('Error in cpf field', () => {
        it('Cpf is not send', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.removeKey('cpf'));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O CPF não pode ser vazio');
        });

        it('Cpf is empty', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('cpf', ''));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O CPF não pode ser vazio');
        });

        it('Cpf is not a string', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('cpf', 1));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O CPF deve ser uma string');
        });

        it('Cpf have a length different of 11', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('cpf', 1));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O CPF deve ser uma string');
        });
      });

      describe('Error in email field', () => {
        it('Email is not send', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.removeKey('email'));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O email não pode ser vazio');
        });

        it('Email is empty', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('email', ''));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O email não pode ser vazio');
        });

        it('Email is not a string', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('email', 1));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O email deve ser uma string');
        });

        it('Email is not a valid email', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('email', 'not_valid.com'));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O email é inválido');
        });
      });

      describe('Error in phoneNumber field', () => {
        it('Phone Number is not send', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.removeKey('phoneNumber'));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O número de telefone não pode ser vazio');
        });

        it('Phone Number is empty', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('phoneNumber', ''));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O número de telefone não pode ser vazio');
        });

        it('Phone Number is empty', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('phoneNumber', 1));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O número de telefone deve ser uma string');
        });

        it('Phone Number have length different of 11', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('phoneNumber', '81982'));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O número de telefone deve ter 11 digítos');
        });

        it('Phone Number is invalid DDD which not exist', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('phoneNumber', '56967676767'));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('Número de telefone é inválido');
        });

        it('Phone Number is invalid not have 9 before of number', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('phoneNumber', '81867676767'));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('Número de telefone é inválido');
        });
      });

      describe('Error in status field', () => {
        it('Status is not send', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.removeKey('status'));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O status não pode ser vazio');
        });

        it('Status is not a object', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('status', ''));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O status deve ser um objeto');
        });

        it("Status name ins't Ativo|Inativo|Desativado|Aguardando ativação", async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('status', { name: 'Ativado' }));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe(
            'O nome do status deve ser Ativo|Inativo|Desativado|Aguardando ativação',
          );
        });

        it('Status name is not send', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('status', { none: '' }));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O nome do status não pode ser vazio');
        });

        it('Status name is empty', async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('status', { name: '' }));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O nome do status não pode ser vazio');
        });

        it("Status name ins't a string", async () => {
          const { status, body } = await request(app.getHttpServer())
            .post(ApiRoutes.CLIENTS)
            .send(serializeBody.changeKeyValue('status', { name: 1 }));

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O nome do status deve ser uma string');
        });
      });
    });
  });

  describe('/clients (PATCH)', () => {
    let clientId: string;

    beforeAll(async () => {
      const { body: newClient } = await request(app.getHttpServer()).get(
        ApiRoutes.CLIENTS,
      );

      clientId = newClient[newClient.length - 1].id;
    });

    it('Testing when update a client successfully', async () => {
      const { status, body } = await request(app.getHttpServer())
        .patch(`${ApiRoutes.CLIENTS}?clientId=${clientId}`)
        .send(dataMock.clientToUpdated);

      expect(status).toBe(200);
      expect(body.name).toBe(dataMock.clientUpdated.name);
      expect(body.email).toBe(dataMock.clientUpdated.email);
      expect(body.cpf).toBe(dataMock.clientUpdated.cpf);
      expect(body.phoneNumber).toBe(dataMock.clientUpdated.phoneNumber);
      expect(body.status).toEqual(dataMock.clientUpdated.status);
    });

    describe('Testing when have a error in update', () => {
      const dataConflictErrorMsg = 'Dados de úsuario que já estão cadastrado';
      const repeatedEmail = dataMock.getClients[0].email;
      const repeatedCpf = dataMock.getClients[0].cpf;
      const repeatedPhoneNumber = dataMock.getClients[0].phoneNumber;

      it('When create with a client email repeated', async () => {
        const { status, body } = await request(app.getHttpServer())
          .patch(`${ApiRoutes.CLIENTS}?clientId=${clientId}`)
          .send({ email: repeatedEmail });

        expect(status).toBe(409);
        expect(body.message).toBe(dataConflictErrorMsg);
        expect(body.error).toBe('Conflict');
        expect(body.statusCode).toBe(409);
      });

      it('When create with a client cpf repeated', async () => {
        const { status, body } = await request(app.getHttpServer())
          .patch(`${ApiRoutes.CLIENTS}?clientId=${clientId}`)
          .send({ cpf: repeatedCpf });

        expect(status).toBe(409);
        expect(body.message).toBe(dataConflictErrorMsg);
        expect(body.error).toBe('Conflict');
        expect(body.statusCode).toBe(409);
      });

      it('When create with a client phoneNumber repeated', async () => {
        const { status, body } = await request(app.getHttpServer())
          .patch(`${ApiRoutes.CLIENTS}?clientId=${clientId}`)
          .send({ phoneNumber: repeatedPhoneNumber });

        expect(status).toBe(409);
        expect(body.message).toBe(dataConflictErrorMsg);
        expect(body.error).toBe('Conflict');
        expect(body.statusCode).toBe(409);
      });
    });

    describe('Testing when have a error in body', () => {
      describe('Error in name field', () => {
        it('Name is empty', async () => {
          const { status, body } = await request(app.getHttpServer())
            .patch(`${ApiRoutes.CLIENTS}?clientId=${clientId}`)
            .send({ name: '' });

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O nome não pode ser vazio');
        });

        it('Name is not a string', async () => {
          const { status, body } = await request(app.getHttpServer())
            .patch(`${ApiRoutes.CLIENTS}?clientId=${clientId}`)
            .send({ name: 1 });

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O nome deve ser uma string');
        });

        it('Name have over than 100 char', async () => {
          const { status, body } = await request(app.getHttpServer())
            .patch(`${ApiRoutes.CLIENTS}?clientId=${clientId}`)
            .send({ name: 'Jonh Doe'.repeat(15) });

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O nome deve ter no máximo 100 caractere');
        });
      });

      describe('Error in cpf field', () => {
        it('CPF is empty', async () => {
          const { status, body } = await request(app.getHttpServer())
            .patch(`${ApiRoutes.CLIENTS}?clientId=${clientId}`)
            .send({ cpf: '' });

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O CPF não pode ser vazio');
        });

        it('CPF is not a string', async () => {
          const { status, body } = await request(app.getHttpServer())
            .patch(`${ApiRoutes.CLIENTS}?clientId=${clientId}`)
            .send({ cpf: 1 });

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O CPF deve ser uma string');
        });

        it('CPF have a legth different of 11', async () => {
          const { status, body } = await request(app.getHttpServer())
            .patch(`${ApiRoutes.CLIENTS}?clientId=${clientId}`)
            .send({ cpf: '1' });

          expect(status).toBe(400);
          expect(body.message).toBeDefined();
          expect(body.message).toBe('O CPF deve ter 11 digítos');
        });
      });

      describe('Error in email field', () => {});
      describe('Error in phoneNumber field', () => {});
      describe('Error in status field', () => {});
    });
  });
});

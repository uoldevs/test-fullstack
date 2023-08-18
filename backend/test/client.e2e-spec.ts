import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import ApiRoutes from '../src/constants/ApiRoutes';
import { PrismaClient } from '@prisma/client';
import PrismaTest from './utils/PrismaTest';
import * as dataMock from './dataMock/clientst';

describe('Testing route /clients', () => {
  let app: INestApplication;
  const prisma = new PrismaClient();
  const prismaTest = new PrismaTest(prisma);

  beforeAll(async () => {
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
});

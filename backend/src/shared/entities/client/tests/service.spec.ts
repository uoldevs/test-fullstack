import { PrismaService } from '../../../../db/prisma.service';
import ClientController from '../client.controller';
import ClientRepository from '../client.repository';
import ClientService from '../client.service';
import { Test, TestingModule } from '@nestjs/testing';
import * as dataMock from './dataMock/clients';

describe('ClientService', () => {
  let clientService: ClientService;
  let clientRepository: ClientRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [ClientController],
      providers: [ClientService, ClientRepository, PrismaService],
    }).compile();

    clientService = module.get<ClientService>(ClientService);
    clientRepository = module.get<ClientRepository>(ClientRepository);
  });

  describe('findAllClientsAndStatus', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('shoud return all client and your status', async () => {
      jest
        .spyOn(clientRepository, 'findAllClientsAndStatus')
        .mockResolvedValue(dataMock.allClientsMock);

      const result = await clientService.findAllClientsAndStatus();

      expect(result).toStrictEqual(dataMock.allClientsMock);
    });
  });
});

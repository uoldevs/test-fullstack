import { PrismaService } from '../../../../db/prisma.service';
import ClientController from '../client.controller';
import ClientRepository from '../client.repository';
import ClientService from '../client.service';
import { Test, TestingModule } from '@nestjs/testing';
import { allClientsMock } from './dataMock/clients';

describe('ClientController', () => {
  let clientController: ClientController;
  let clientService: ClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [ClientController],
      providers: [ClientService, ClientRepository, PrismaService],
    }).compile();

    clientController = module.get<ClientController>(ClientController);
    clientService = module.get<ClientService>(ClientService);
  });

  describe('findAllClientsAndStatus', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return an array of clients with theirs status', async () => {
      jest
        .spyOn(clientService, 'findAllClientsAndStatus')
        .mockResolvedValue(allClientsMock);

      const result = await clientController.findAllClientsAndStatus();

      expect(result).toEqual(allClientsMock);
      expect(clientService.findAllClientsAndStatus).toHaveBeenCalled();
      expect(clientService.findAllClientsAndStatus).toHaveBeenCalledWith();
    });
  });
});

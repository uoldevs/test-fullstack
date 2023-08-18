import { PrismaService } from '../../../../db/prisma.service';
import ClientController from '../client.controller';
import ClientRepository from '../client.repository';
import ClientService from '../client.service';
import { Test, TestingModule } from '@nestjs/testing';
import {
  allClientsMock,
  clientCreated,
  clientToCeate,
} from './dataMock/clients';
import { CreateClientDto } from '../dto/CreateClient.dto';
import { ConflictException } from '@nestjs/common';

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

  describe('create', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return object with client infos', async () => {
      jest.spyOn(clientService, 'create').mockResolvedValue(clientCreated);

      const client = new CreateClientDto(clientToCeate);
      const result = await clientController.create(client);

      expect(result).toEqual(clientCreated);
      expect(clientService.create).toHaveBeenCalled();
      expect(clientService.create).toHaveBeenCalledWith(client);
    });

    it('should return a error if service throw a conflict error', async () => {
      const errorMessage = 'Dados de úsuario que já estão cadastrado';
      jest
        .spyOn(clientService, 'create')
        .mockRejectedValue(new ConflictException(errorMessage));

      const client = new CreateClientDto(allClientsMock[0]);

      await expect(clientController.create(client)).rejects.toThrowError(
        errorMessage,
      );
      expect(clientService.create).toHaveBeenCalled();
      expect(clientService.create).toHaveBeenCalledWith(client);
    });
  });
});

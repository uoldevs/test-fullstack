import { PrismaService } from '../../../../db/prisma.service';
import ClientController from '../client.controller';
import ClientRepository from '../client.repository';
import ClientService from '../client.service';
import { Test, TestingModule } from '@nestjs/testing';
import * as dataMock from './dataMock/clients';
import { CreateClientDto } from '../dto/CreateClient.dto';
import { ConflictException } from '@nestjs/common';
import { UpdateClientDto } from '../dto/UpdateClient.dto';

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
        .mockResolvedValue(dataMock.allClientsMock);

      jest
        .spyOn(clientService, 'findById')
        .mockResolvedValue(dataMock.allClientsMock[0]);

      const result = await clientController.findAllClientsAndStatus({
        clientId: undefined,
      });

      expect(result).toStrictEqual(dataMock.allClientsMock);
      expect(clientService.findAllClientsAndStatus).toHaveBeenCalled();
      expect(clientService.findAllClientsAndStatus).toHaveBeenCalledWith();
      expect(clientService.findById).not.toHaveBeenCalled();
    });

    it('should return a client info with theirs status if pass clientId', async () => {
      jest
        .spyOn(clientService, 'findAllClientsAndStatus')
        .mockResolvedValue(dataMock.allClientsMock);

      jest
        .spyOn(clientService, 'findById')
        .mockResolvedValue(dataMock.allClientsMock[0]);

      const result = await clientController.findAllClientsAndStatus({
        clientId: '8215b4b9-b9ed-4f99-9aaa-0f1715f4139e',
      });

      expect(result).toStrictEqual(dataMock.allClientsMock[0]);
      expect(clientService.findById).toHaveBeenCalled();
      expect(clientService.findById).toHaveBeenCalledWith(
        '8215b4b9-b9ed-4f99-9aaa-0f1715f4139e',
      );
      expect(clientService.findAllClientsAndStatus).not.toHaveBeenCalled();
    });
  });

  describe('create', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return object with client infos', async () => {
      jest
        .spyOn(clientService, 'create')
        .mockResolvedValue(dataMock.clientCreated);

      const client = new CreateClientDto(dataMock.clientToCreate);
      const result = await clientController.create(client);

      expect(result).toStrictEqual(dataMock.clientCreated);
      expect(clientService.create).toHaveBeenCalled();
      expect(clientService.create).toHaveBeenCalledWith(client);
    });

    it('should return a error if service throw a conflict error', async () => {
      const errorMessage = 'Dados de úsuario que já estão cadastrado';

      jest
        .spyOn(clientService, 'create')
        .mockRejectedValue(new ConflictException(errorMessage));

      const client = new CreateClientDto(dataMock.allClientsMock[0]);

      await expect(clientController.create(client)).rejects.toThrowError(
        errorMessage,
      );
      expect(clientService.create).toHaveBeenCalled();
      expect(clientService.create).toHaveBeenCalledWith(client);
    });
  });

  describe('udpate', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return object with updated client infos', async () => {
      jest
        .spyOn(clientService, 'update')
        .mockResolvedValue(dataMock.clientUpdated);

      const clientId = dataMock.allClientsMock[0].id;

      const client = new UpdateClientDto(dataMock.clientToUpdate);
      const result = await clientController.update(client, { clientId });

      expect(result).toStrictEqual(dataMock.clientUpdated);
      expect(clientService.update).toHaveBeenCalled();
      expect(clientService.update).toHaveBeenCalledWith(clientId, client);
    });

    it('should return a error if service throw a conflict error', async () => {
      const errorMessage = 'Dados de úsuario que já estão cadastrado';

      jest
        .spyOn(clientService, 'update')
        .mockRejectedValue(new ConflictException(errorMessage));

      const clientId = dataMock.allClientsMock[0].id;

      const client = new UpdateClientDto(dataMock.allClientsMock[1]);

      await expect(
        clientController.update(client, { clientId }),
      ).rejects.toThrowError(errorMessage);
      expect(clientService.update).toHaveBeenCalled();
      expect(clientService.update).toHaveBeenCalledWith(clientId, client);
    });
  });
});

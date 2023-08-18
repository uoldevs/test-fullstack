import { PrismaService } from '../../../../db/prisma.service';
import ClientController from '../client.controller';
import ClientRepository from '../client.repository';
import ClientService from '../client.service';
import { Test, TestingModule } from '@nestjs/testing';
import * as dataMock from './dataMock/clients';
import { CreateClientDto } from '../dto/CreateClient.dto';
import { ConflictException } from '@nestjs/common';
import { UpdateClientDto } from '../dto/UpdateClient.dto';

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
      expect(clientRepository.findAllClientsAndStatus).toHaveBeenCalled();
      expect(clientRepository.findAllClientsAndStatus).toHaveBeenCalledWith();
    });
  });

  describe('create', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('shoud return the info of the client that was created ', async () => {
      jest
        .spyOn(clientRepository, 'create')
        .mockResolvedValue(dataMock.clientCreated);

      jest.spyOn(clientService, 'checkConflicts').mockResolvedValue();

      const client = new CreateClientDto(dataMock.clientToCreate);
      const result = await clientService.create(client);

      expect(result).toStrictEqual(dataMock.clientCreated);
      expect(clientRepository.create).toHaveBeenCalled();
      expect(clientRepository.create).toHaveBeenCalledWith(client);
    });

    it('shoud return the info of the client that was created ', async () => {
      const errorMessage = 'Dados de úsuario que já estão cadastrado';

      jest
        .spyOn(clientRepository, 'create')
        .mockResolvedValue(dataMock.clientCreated);

      jest
        .spyOn(clientService, 'checkConflicts')
        .mockRejectedValue(new ConflictException(errorMessage));

      const client = new CreateClientDto(dataMock.allClientsMock[0]);

      await expect(clientService.create(client)).rejects.toThrowError(
        errorMessage,
      );
      expect(clientRepository.create).not.toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should return object with updated client infos', async () => {
      jest
        .spyOn(clientRepository, 'update')
        .mockResolvedValue(dataMock.clientUpdated);

      jest.spyOn(clientService, 'checkConflicts').mockResolvedValue();

      const clientId = dataMock.allClientsMock[0].id;

      const client = new UpdateClientDto(dataMock.clientToUpdate);
      const result = await clientService.update(clientId, client);

      expect(result).toStrictEqual(dataMock.clientUpdated);
      expect(clientRepository.update).toHaveBeenCalled();
      expect(clientRepository.update).toHaveBeenCalledWith(clientId, client);
    });

    it('should return a error if service throw a conflict error', async () => {
      const errorMessage = 'Dados de úsuario que já estão cadastrado';

      jest
        .spyOn(clientRepository, 'update')
        .mockResolvedValue(dataMock.clientCreated);

      jest
        .spyOn(clientService, 'checkConflicts')
        .mockRejectedValue(new ConflictException(errorMessage));

      const client = new UpdateClientDto(dataMock.allClientsMock[1]);
      const clientId = dataMock.allClientsMock[0].id;

      await expect(clientService.update(clientId, client)).rejects.toThrowError(
        errorMessage,
      );
      expect(clientRepository.update).not.toHaveBeenCalled();
    });
  });

  describe('checkConflicts', () => {
    it('should return void if no have conflict', async () => {
      jest
        .spyOn(clientRepository, 'findByCpfEmailAndPhoneNumber')
        .mockResolvedValue(null);

      const result = await clientService.checkConflicts(
        dataMock.allClientsMock[0].cpf,
        dataMock.allClientsMock[0].phoneNumber,
        dataMock.allClientsMock[0].email,
      );

      expect(result).toBe(undefined);
    });

    it('should return void if have conflicts', async () => {
      const errorMessage = 'Dados de úsuario que já estão cadastrado';

      jest
        .spyOn(clientRepository, 'findByCpfEmailAndPhoneNumber')
        .mockResolvedValue({
          ...dataMock.allClientsMock[0],
          statusId: '853c3948-098d-4190-bc8c-984b2882db46',
        });

      await expect(
        clientService.checkConflicts(
          dataMock.allClientsMock[0].cpf,
          dataMock.allClientsMock[0].phoneNumber,
          dataMock.allClientsMock[0].email,
        ),
      ).rejects.toThrowError(errorMessage);
    });
  });
});

import { PrismaService } from '../../../../db/prisma.service';
import ClientController from '../client.controller';
import ClientRepository from '../client.repository';
import ClientService from '../client.service';
import { Test, TestingModule } from '@nestjs/testing';
import * as dataMock from './dataMock/clients';
import { CreateClientDto } from '../dto/CreateClient.dto';
import { ConflictException, NotFoundException } from '@nestjs/common';
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

  describe('findById', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('shoud return a client and your status', async () => {
      jest
        .spyOn(clientRepository, 'findById')
        .mockResolvedValue(dataMock.allClientsMock[0]);

      const clientId = dataMock.allClientsMock[0].id;
      const result = await clientService.findById(clientId);

      expect(result).toStrictEqual(dataMock.allClientsMock[0]);
      expect(clientRepository.findById).toHaveBeenCalled();
      expect(clientRepository.findById).toHaveBeenCalledWith(clientId);
    });

    it('should return a error if service throw a not found error', async () => {
      const errorMessage = 'Usuário não encontrado';

      jest.spyOn(clientRepository, 'findById').mockResolvedValue(null);

      const invalidId = '0a3b2646-88f7-40e5-9289-dfa50ebb750a';

      await expect(clientService.findById(invalidId)).rejects.toThrowError(
        errorMessage,
      );
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

      jest.spyOn(clientService, 'checkCreateConflicts').mockResolvedValue();

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
        .spyOn(clientService, 'checkCreateConflicts')
        .mockRejectedValue(new ConflictException(errorMessage));

      const client = new CreateClientDto(dataMock.allClientsMock[0]);

      await expect(clientService.create(client)).rejects.toThrowError(
        errorMessage,
      );
      expect(clientRepository.create).not.toHaveBeenCalled();
    });
  });

  describe('update', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return object with updated client infos', async () => {
      jest
        .spyOn(clientRepository, 'update')
        .mockResolvedValue(dataMock.clientUpdated);

      jest
        .spyOn(clientRepository, 'findById')
        .mockResolvedValue(dataMock.allClientsMock[0]);

      jest.spyOn(clientService, 'checkUpdateConflicts').mockResolvedValue();

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
        .spyOn(clientService, 'findById')
        .mockResolvedValue(dataMock.allClientsMock[0]);

      jest.spyOn(clientRepository, 'update');

      jest
        .spyOn(clientService, 'checkUpdateConflicts')
        .mockRejectedValue(new ConflictException(errorMessage));

      const client = new UpdateClientDto(dataMock.allClientsMock[1]);
      const clientId = dataMock.allClientsMock[0].id;

      await expect(clientService.update(clientId, client)).rejects.toThrowError(
        errorMessage,
      );
      expect(clientRepository.update).not.toHaveBeenCalled();
    });

    it('should return a error if service throw a not found error', async () => {
      const errorMessage = 'Usuário não encontrado';

      jest
        .spyOn(clientService, 'findById')
        .mockRejectedValue(new NotFoundException(errorMessage));

      jest.spyOn(clientRepository, 'update');

      jest.spyOn(clientService, 'checkUpdateConflicts');

      const client = new UpdateClientDto(dataMock.allClientsMock[1]);
      const clientId = 'a2a8f4bd-0881-40ef-a64c-2b8c6b48632d';

      await expect(clientService.update(clientId, client)).rejects.toThrowError(
        errorMessage,
      );
      expect(clientRepository.update).not.toHaveBeenCalled();
      expect(clientService.checkUpdateConflicts).not.toHaveBeenCalled();
    });
  });

  describe('checkCreateConflicts', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return void if no have conflict', async () => {
      jest
        .spyOn(clientRepository, 'findByCpfEmailAndPhoneNumber')
        .mockResolvedValue(null);

      const result = await clientService.checkCreateConflicts(
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
        clientService.checkCreateConflicts(
          dataMock.allClientsMock[0].cpf,
          dataMock.allClientsMock[0].phoneNumber,
          dataMock.allClientsMock[0].email,
        ),
      ).rejects.toThrowError(errorMessage);
    });
  });

  describe('checkCreateConflicts', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return void if no have conflict', async () => {
      jest
        .spyOn(clientRepository, 'findByCpfEmailAndPhoneNumber')
        .mockResolvedValue(null);

      const result = await clientService.checkCreateConflicts(
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
        clientService.checkCreateConflicts(
          dataMock.allClientsMock[0].cpf,
          dataMock.allClientsMock[0].phoneNumber,
          dataMock.allClientsMock[0].email,
        ),
      ).rejects.toThrowError(errorMessage);
    });
  });

  describe('checkUpdateConflicts', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return void if no have conflict', async () => {
      jest
        .spyOn(clientRepository, 'findAllByCpfEmailAndPhoneNumber')
        .mockResolvedValue([dataMock.allClientsMock[0]] as any);

      const result = await clientService.checkUpdateConflicts(
        dataMock.allClientsMock[0].cpf,
        dataMock.allClientsMock[0].phoneNumber,
        dataMock.allClientsMock[0].email,
        dataMock.allClientsMock[0].id,
      );

      expect(result).toBe(undefined);
    });

    it('should return void if have conflicts', async () => {
      const errorMessage = 'Dados de úsuario que já estão cadastrado';

      jest
        .spyOn(clientRepository, 'findAllByCpfEmailAndPhoneNumber')
        .mockResolvedValue([
          dataMock.allClientsMock[0],
          dataMock.allClientsMock[1],
        ] as any);

      await expect(
        clientService.checkUpdateConflicts(
          dataMock.allClientsMock[0].cpf,
          dataMock.allClientsMock[0].phoneNumber,
          dataMock.allClientsMock[0].email,
          dataMock.allClientsMock[0].id,
        ),
      ).rejects.toThrowError(errorMessage);
    });
  });
});

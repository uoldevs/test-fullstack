import { PrismaService } from '../../../../db/prisma.service';
import ClientController from '../client.controller';
import ClientRepository from '../client.repository';
import ClientService from '../client.service';
import { Test, TestingModule } from '@nestjs/testing';
import * as dataMock from './dataMock/clients';
import { CreateClientDto } from '../dto/CreateClient.dto';
import { ConflictException } from '@nestjs/common';

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
});

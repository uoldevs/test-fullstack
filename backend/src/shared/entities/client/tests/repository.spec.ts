import { PrismaService } from '../../../../db/prisma.service';
import ClientController from '../client.controller';
import ClientRepository from '../client.repository';
import ClientService from '../client.service';
import { Test, TestingModule } from '@nestjs/testing';
import * as dataMock from './dataMock/clients';
import { CreateClientDto } from '../dto/CreateClient.dto';
import { UpdateClientDto } from '../dto/UpdateClient.dto';

describe('ClientRepository', () => {
  let clientRepository: ClientRepository;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [ClientController],
      providers: [ClientService, ClientRepository, PrismaService],
    }).compile();

    prismaService = module.get<PrismaService>(PrismaService);
    clientRepository = module.get<ClientRepository>(ClientRepository);
  });

  describe('findAllClientsAndStatus', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return all client with yours status', async () => {
      jest
        .spyOn(prismaService.client, 'findMany')
        .mockResolvedValue(dataMock.allClientsMock as any);

      const result = await clientRepository.findAllClientsAndStatus();

      expect(result).toStrictEqual(dataMock.allClientsMock);
      expect(prismaService.client.findMany).toHaveBeenCalled();
      expect(prismaService.client.findMany).toHaveBeenCalledWith(
        dataMock.filterClientRepository,
      );
    });
  });

  describe('findById', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return a client with yours status', async () => {
      const clientId = dataMock.allClientsMock[0].id;
      jest
        .spyOn(prismaService.client, 'findFirst')
        .mockResolvedValue(dataMock.allClientsMock[0] as any);

      const result = await clientRepository.findById(clientId);

      expect(result).toStrictEqual(dataMock.allClientsMock[0]);
      expect(prismaService.client.findFirst).toHaveBeenCalled();
      expect(prismaService.client.findFirst).toHaveBeenCalledWith({
        where: { id: clientId },
        ...dataMock.filterClientRepository,
      });
    });
  });

  describe('findByCpfEmailAndPhoneNumber', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return a client with based in filters', async () => {
      jest
        .spyOn(prismaService.client, 'findFirst')
        .mockResolvedValue(dataMock.allClientsMock[0] as any);

      const cpf = dataMock.client.cpf;
      const email = dataMock.client.email;
      const phoneNumber = dataMock.client.phoneNumber;

      const result = await clientRepository.findByCpfEmailAndPhoneNumber(
        cpf,
        email,
        phoneNumber,
      );

      expect(result).toStrictEqual(dataMock.allClientsMock[0]);
      expect(prismaService.client.findFirst).toHaveBeenCalled();
      expect(prismaService.client.findFirst).toHaveBeenCalledWith({
        where: {
          OR: [{ cpf }, { email }, { phoneNumber }],
        },
      });
    });
  });

  describe('findAllByCpfEmailAndPhoneNumber', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return a client with based in filters', async () => {
      jest
        .spyOn(prismaService.client, 'findMany')
        .mockResolvedValue([dataMock.allClientsMock[0]] as any);

      const cpf = dataMock.client.cpf;
      const email = dataMock.client.email;
      const phoneNumber = dataMock.client.phoneNumber;

      const result = await clientRepository.findAllByCpfEmailAndPhoneNumber(
        cpf,
        email,
        phoneNumber,
      );

      expect(result).toStrictEqual([dataMock.allClientsMock[0]]);
      expect(prismaService.client.findMany).toHaveBeenCalled();
      expect(prismaService.client.findMany).toHaveBeenCalledWith({
        where: {
          OR: [{ cpf }, { email }, { phoneNumber }],
        },
      });
    });
  });

  describe('create', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return a created client', async () => {
      jest
        .spyOn(prismaService.client, 'create')
        .mockResolvedValue(dataMock.clientCreated as any);

      const client = new CreateClientDto(dataMock.clientToCreate);
      const result = await clientRepository.create(client);

      expect(result).toStrictEqual(dataMock.clientCreated);
      expect(prismaService.client.create).toHaveBeenCalled();
      expect(prismaService.client.create).toHaveBeenCalledWith({
        data: {
          cpf: client.cpf,
          email: client.email,
          name: client.name,
          phoneNumber: client.phoneNumber,
          status: {
            connectOrCreate: {
              create: {
                name: client.status.name,
              },
              where: {
                name: client.status.name,
              },
            },
          },
        },
        ...dataMock.filterClientRepository,
      });
    });
  });

  describe('update', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return a updated client', async () => {
      jest
        .spyOn(prismaService.client, 'update')
        .mockResolvedValue(dataMock.clientUpdated as any);

      const clientId = dataMock.allClientsMock[0].id;
      const client = new UpdateClientDto(dataMock.clientToUpdate);
      const result = await clientRepository.update(clientId, client);

      expect(result).toStrictEqual(dataMock.clientUpdated);
      expect(prismaService.client.update).toHaveBeenCalled();
      expect(prismaService.client.update).toHaveBeenCalledWith({
        where: { id: clientId },
        data: {
          cpf: undefined,
          email: client.email,
          name: undefined,
          phoneNumber: undefined,
          status: undefined,
        },
        ...dataMock.filterClientRepository,
      });
    });
  });
});

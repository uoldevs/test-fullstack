import { PrismaService } from '../../../../db/prisma.service';
import ClientController from '../client.controller';
import ClientRepository from '../client.repository';
import ClientService from '../client.service';
import { Test, TestingModule } from '@nestjs/testing';
import * as dataMock from './dataMock/clients';

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

  describe('findByCpfEmailAndPhoneNumber', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return a client with based in filters', async () => {
      jest
        .spyOn(prismaService.client, 'findFirst')
        .mockResolvedValue(dataMock.client);

      const cpf = dataMock.client.cpf;
      const email = dataMock.client.email;
      const phoneNumber = dataMock.client.phoneNumber;

      const result = await clientRepository.findByCpfEmailAndPhoneNumber(
        cpf,
        email,
        phoneNumber,
      );

      expect(result).toStrictEqual(dataMock.client);
      expect(prismaService.client.findFirst).toHaveBeenCalled();
      expect(prismaService.client.findFirst).toHaveBeenCalledWith({
        where: {
          OR: [{ cpf }, { email }, { phoneNumber }],
        },
      });
    });
  });
});

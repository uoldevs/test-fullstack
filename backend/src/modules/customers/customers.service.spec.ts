import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from './customers.service';
import { PrismaService } from '../../database/prisma.service';
import { prismaMock } from '../../../test/mocks/prismaMock';
import { customersMock } from '../../../test/mocks/customersMock';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Status } from '../../enum/customerStatus';
import { UpdateCustomerDto } from './dto/update-customer.dto';

describe('CustomersService', () => {
  let service: CustomersService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomersService,
        {
          provide: PrismaService,
          useValue: prismaMock('customer', customersMock),
        },
      ],
    }).compile();

    prisma = module.get<PrismaService>(PrismaService);
    service = module.get<CustomersService>(CustomersService);
  });

  it('should be defined', () => {
    expect(prisma).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('1 - findAll', () => {
    it('should return an array of customers', async () => {
      const customers = await service.findAll();

      expect(customers).toEqual(customersMock);
      expect(prisma.customer.findMany).toHaveBeenCalledTimes(1);
      expect(prisma.customer.findMany).toHaveBeenCalledWith({
        orderBy: { id: 'asc' },
      });
    });

    it('should throw an exception', () => {
      jest.spyOn(service, 'findAll').mockRejectedValueOnce(new Error());

      expect(service.findAll()).rejects.toThrowError();
    });
  });

  describe('2 - findOne', () => {
    it('should return a customer', async () => {
      const customer = await service.findOne(1);

      expect(customer).toEqual(customersMock[0]);
      expect(prisma.customer.findUniqueOrThrow).toHaveBeenCalledTimes(1);
      expect(prisma.customer.findUniqueOrThrow).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });

    it('should throw an exception', () => {
      jest.spyOn(service, 'findOne').mockRejectedValueOnce(new Error());

      expect(service.findOne(1)).rejects.toThrowError();
    });
  });

  describe('3 - create', () => {
    const body: CreateCustomerDto = {
      name: 'Test',
      email: 'test@email.com',
      taxId: '12345123456',
      phone: '12345123456',
      status: Status.ACTIVE,
    };

    it('should register a new customer correctly', async () => {
      const response = await service.create(body);

      expect(response).toEqual(customersMock[0]);
      expect(prisma.customer.create).toHaveBeenCalledTimes(1);
      expect(prisma.customer.create).toHaveBeenCalledWith({
        data: body,
      });
    });

    it('should throw an exception', () => {
      jest.spyOn(service, 'create').mockRejectedValueOnce(new Error());

      expect(service.create(body)).rejects.toThrowError();
    });
  });

  describe('4 - update', () => {
    it('should update a customer correctly.', async () => {
      const updateBody: UpdateCustomerDto = {
        name: 'Test da Silva',
      };

      const response = await service.update(1, updateBody);

      expect(response).toEqual(customersMock[0]);
      expect(prisma.customer.update).toHaveBeenCalledTimes(1);
      expect(prisma.customer.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateBody,
      });
    });

    it('should throw an exception', () => {
      jest.spyOn(service, 'update').mockRejectedValueOnce(new Error());

      expect(service.update(1, {})).rejects.toThrowError();
    });
  });
});

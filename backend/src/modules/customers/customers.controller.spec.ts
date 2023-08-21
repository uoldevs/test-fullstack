import { Test, TestingModule } from '@nestjs/testing';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { customersMock } from '../../../test/mocks/customersMock';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Status } from '../../enum/customerStatus';
import { UpdateCustomerDto } from './dto/update-customer.dto';

const serviceMock = {
  create: jest.fn().mockReturnValue(customersMock[0]),
  findAll: jest.fn().mockResolvedValue(customersMock),
  findOne: jest.fn().mockResolvedValue(customersMock[0]),
  update: jest.fn().mockResolvedValue(customersMock[0]),
};

describe('CustomersController', () => {
  let controller: CustomersController;
  let service: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersController],
      providers: [{ provide: CustomersService, useValue: serviceMock }],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
    controller = module.get<CustomersController>(CustomersController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });

  describe('1 - findAll', () => {
    it('should return an array of customers', async () => {
      const response = await controller.findAll();

      expect(response).toEqual(customersMock);
      expect(service.findAll).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      jest.spyOn(service, 'findAll').mockRejectedValueOnce(new Error());

      expect(controller.findAll()).rejects.toThrowError();
    });
  });

  describe('2 - findOne', () => {
    it('should return a customers', async () => {
      const response = await controller.findOne('1');

      expect(response).toEqual(customersMock[0]);
      expect(service.findOne).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      jest.spyOn(service, 'findOne').mockRejectedValueOnce(new Error());

      expect(controller.findOne('1')).rejects.toThrowError();
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
      const response = await controller.create(body);

      expect(response).toEqual(customersMock[0]);
      expect(service.create).toHaveBeenCalledTimes(1);
      expect(service.create).toHaveBeenCalledWith(body);
    });

    it('should throw an exception', () => {
      jest.spyOn(service, 'create').mockRejectedValueOnce(new Error());

      expect(controller.create(body)).rejects.toThrowError();
    });
  });

  describe('4 - update', () => {
    it('should update a customer correctly.', async () => {
      const updateBody: UpdateCustomerDto = {
        email: 'test2@email.com',
      };

      const response = await controller.update('1', updateBody);

      expect(response).toEqual(customersMock[0]);
      expect(service.update).toHaveBeenCalledTimes(1);
      expect(service.update).toHaveBeenCalledWith(1, updateBody);
    });

    it('should throw an exception', () => {
      jest.spyOn(service, 'update').mockRejectedValueOnce(new Error());

      expect(controller.update('1', {})).rejects.toThrowError();
    });
  });
});

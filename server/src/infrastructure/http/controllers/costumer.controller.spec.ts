import { Test, TestingModule } from '@nestjs/testing'
import { CustomerController } from './costumer.controller'
import { CreateCustomer } from '@/application/usecases/createCustomer'
import { GetAllCustomers } from '@/application/usecases/getAllCustomers'
import { UpdateCustomer } from '@/application/usecases/updateCustomer'
import { CustomerView } from '@/infrastructure/http/views/customer.view'
import { CustomerStatus } from '@/application/entities/customer'
import { GetCustomersById } from '@/application/usecases/getCustomerById'

describe('CustomerController', () => {
  let customerController: CustomerController
  let createCustomer: CreateCustomer
  let getAllCustomers: GetAllCustomers
  let updateCustomer: UpdateCustomer
  let getCustomersById: GetCustomersById

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [
        {
          provide: CreateCustomer,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: GetAllCustomers,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: UpdateCustomer,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: GetCustomersById,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile()

    customerController = module.get<CustomerController>(CustomerController)
    createCustomer = module.get<CreateCustomer>(CreateCustomer)
    getAllCustomers = module.get<GetAllCustomers>(GetAllCustomers)
    updateCustomer = module.get<UpdateCustomer>(UpdateCustomer)
    getCustomersById = module.get<GetCustomersById>(GetCustomersById)
  })

  it('should return an array of customers', async () => {
    const customersMock: CustomerView[] = []

    getAllCustomers.execute = jest
      .fn()
      .mockResolvedValue({ customers: customersMock })

    const result = await customerController.getAll('0', '10')

    expect(result).toEqual({ customers: customersMock })
  })

  it('should update a customer and return the updated customer', async () => {
    const updatedCustomerMock: CustomerView = {
      id: '1',
      name: 'ronaldinho gaucho',
      email: 'ronaldinho@email.com',
      document: '00000000000',
      phone: '+55 11 999999999',
      status: CustomerStatus.Active,
      createdAt: new Date('2023-08-01'),
      updatedAt: new Date('2023-08-10'),
    }

    updateCustomer.execute = jest
      .fn()
      .mockResolvedValue({ customer: updatedCustomerMock })

    const result = await customerController.update('1', {
      name: 'ronaldinho gaucho',
      email: 'ronaldinho@email.com',
      document: '00000000000',
      phone: '+55 11 999999999',
      status: CustomerStatus.Active,
    })

    expect(result).toEqual({ customer: updatedCustomerMock })
  })

  it('should create a customer and return the created customer', async () => {
    const createdCustomerMock: CustomerView = {
      id: '1',
      name: 'ronaldinho gaucho',
      email: 'ronaldinho@email.com',
      document: '00000000000',
      phone: '+55 11 999999999',
      status: CustomerStatus.Active,
      createdAt: new Date('2023-08-01'),
      updatedAt: new Date('2023-08-01'),
    }

    createCustomer.execute = jest
      .fn()
      .mockResolvedValue({ customer: createdCustomerMock })

    const result = await customerController.create({
      name: 'ronaldinho gaucho',
      email: 'ronaldinho@email.com',
      document: '00000000000',
      phone: '+55 11 999999999',
      status: CustomerStatus.Active,
    })

    expect(result).toEqual({ customer: createdCustomerMock })
  })

  it('should get a customer by id', async () => {
    const customerByIdMock: CustomerView = {
      id: '1',
      name: 'ronaldinho gaucho',
      email: 'ronaldinho@email.com',
      document: '00000000000',
      phone: '+55 11 999999999',
      status: CustomerStatus.Active,
      createdAt: new Date('2023-08-01'),
      updatedAt: new Date('2023-08-01'),
    }

    getCustomersById.execute = jest
      .fn()
      .mockResolvedValue({ customer: customerByIdMock })

    const result = await customerController.getById('1')

    expect(result).toEqual({ customer: customerByIdMock })
  })
})

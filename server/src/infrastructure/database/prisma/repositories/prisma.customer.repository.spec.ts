import { PrismaCustomerRepository } from './prisma.customer.repository'
import { Customer, CustomerStatus } from '@/application/entities/customer'

describe('PrismaCustomerRepository', () => {
  const sampleCustomer = new Customer({
    name: 'ronaldinho gaucho',
    document: '00000000000',
    email: 'ronaldinho@email.com',
    phone: '+55 11 999999999',
    status: CustomerStatus.Active,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  const mockPrismaService = {
    customer: {
      update: jest.fn(),
      findFirst: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
    },
  }

  let repository: PrismaCustomerRepository

  beforeEach(() => {
    repository = new PrismaCustomerRepository(mockPrismaService as never)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should update a customer', async () => {
    await repository.update(sampleCustomer)

    expect(mockPrismaService.customer.update).toHaveBeenCalledWith({
      where: { id: sampleCustomer.id },
      data: expect.any(Object),
    })
  })

  it('should find a customer by ID', async () => {
    mockPrismaService.customer.findFirst.mockResolvedValue(sampleCustomer)

    const result = await repository.findById(sampleCustomer.id)

    expect(mockPrismaService.customer.findFirst).toHaveBeenCalledWith({
      where: { id: sampleCustomer.id },
    })
    expect(result).toEqual(sampleCustomer)
  })

  it('should not find a customer with a invalid ID', async () => {
    mockPrismaService.customer.findFirst.mockResolvedValue(null)

    const result = await repository.findById('invalid_id')

    expect(mockPrismaService.customer.findFirst).toHaveBeenCalledWith({
      where: { id: 'invalid_id' },
    })
    expect(result).toBe(null)
  })

  it('should get all customers', async () => {
    mockPrismaService.customer.findMany.mockResolvedValue([sampleCustomer])

    const result = await repository.getAll()

    expect(mockPrismaService.customer.findMany).toHaveBeenCalled()
    expect(result).toEqual(expect.arrayContaining([sampleCustomer]))
  })

  it('should create a customer', async () => {
    await repository.create(sampleCustomer)

    expect(mockPrismaService.customer.create).toHaveBeenCalledWith({
      data: expect.any(Object),
    })
  })
})

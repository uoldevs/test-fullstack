import { CustomerMapper } from './customer.mapper'
import { CustomerStatus, Customer } from '@/application/entities/customer'

describe('CustomerMapper', () => {
  const customer = new Customer(
    {
      name: 'ronaldinho',
      document: '00000000000',
      email: 'ronaldinho@example.com',
      phone: '+55 11 999999999',
      status: CustomerStatus.Active,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    'sample-id',
  )

  const samplePrismaCustomer = {
    id: 'sample-id',
    name: 'ronaldinho',
    document: '00000000000',
    email: 'ronaldinho@example.com',
    phone: '+55 11 999999999',
    status: CustomerStatus.Active,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  it('should convert Customer to PrismaCustomer', () => {
    const prismaCustomer = CustomerMapper.toPrisma(customer)
    expect(prismaCustomer).toEqual(samplePrismaCustomer)
  })

  it('should convert PrismaCustomer to Customer', () => {
    const customer = CustomerMapper.prismaToDomain(samplePrismaCustomer)
    expect(customer).toEqual(customer)
  })
})

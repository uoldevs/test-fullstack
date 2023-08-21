import { MockCustomerRepository } from '@/test/repositories/mock.customer.repository'
import { CreateCustomer } from './createCustomer'
import { CustomerStatus } from '../entities/customer'

describe('createCustomer', () => {
  const customerRepository = new MockCustomerRepository()
  const createCustomer = new CreateCustomer(customerRepository)

  it('should be able create a new customer', async () => {
    const { customer } = await createCustomer.execute({
      document: '00000000000',
      email: 'ronaldinho@email.com',
      name: 'ronaldinho gaúcho',
      phone: '+55 11 999999999',
      status: CustomerStatus.Active,
    })

    expect(customerRepository.customers).toHaveLength(1)
    expect(
      customerRepository.customers.find((c) => c.id === customer.id),
    ).toBeTruthy()
  })
})

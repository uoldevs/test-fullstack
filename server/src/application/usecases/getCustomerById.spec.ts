import { MockCustomerRepository } from '@/test/repositories/mock.customer.repository'
import { GetCustomersById } from './GetCustomerById'
import { CreateCustomer } from './createCustomer'
import { CustomerStatus } from '../entities/customer'

describe('getCustomerById', () => {
  const customerRepository = new MockCustomerRepository()
  const createCustomer = new CreateCustomer(customerRepository)
  const getCustomersById = new GetCustomersById(customerRepository)

  it('should be able list all customers', async () => {
    const { customer: createdCustomer } = await createCustomer.execute({
      document: '00000000000',
      email: 'ronaldinho@email.com',
      name: 'ronaldinho gaúcho',
      phone: '+55 11 999999999',
      status: CustomerStatus.Active,
    })

    const { customer } = await getCustomersById.execute({
      id: createdCustomer.id,
    })
    expect(customer).toBeDefined()
  })
})

import { MockCustomerRepository } from '@/test/repositories/mock.customer.repository'
import { GetAllCustomers } from './getAllCustomers'

describe('getAllCustomer', () => {
  const customerRepository = new MockCustomerRepository()
  const getAllCustomers = new GetAllCustomers(customerRepository)

  it('should be able list all customers', async () => {
    const { customers } = await getAllCustomers.execute({
      page: 1,
      quantity: 10,
    })
    expect(customers).toEqual(customerRepository.customers)
  })
})

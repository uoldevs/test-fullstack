import { Customer, CustomerStatus } from '@/application/entities/customer'
import { CustomerView } from './customer.view'

describe('CustomerView', () => {
  const mockCustomer = new Customer(
    {
      name: 'ronaldinho gaucho',
      email: 'ronaldinho@email.com',
      document: '00000000000',
      phone: '+55 11 999999999',
      status: CustomerStatus.Active,
      createdAt: new Date('2023-08-01'),
      updatedAt: new Date('2023-08-10'),
    },
    '1',
  )

  it('should correctly convert a Customer object to an HTTP object', () => {
    const httpObject = CustomerView.toHTTP(mockCustomer)

    expect(httpObject).toEqual({
      id: '1',
      name: 'ronaldinho gaucho',
      email: 'ronaldinho@email.com',
      document: '00000000000',
      phone: '+55 11 999999999',
      status: CustomerStatus.Active,
      createdAt: new Date('2023-08-01'),
      updatedAt: new Date('2023-08-10'),
    })
  })
})

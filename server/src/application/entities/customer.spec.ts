import { randomUUID } from 'crypto'
import { Customer, CustomerStatus } from './customer'

describe('Customer', () => {
  let customer: Customer

  beforeEach(() => {
    customer = new Customer({
      document: '0000000000',
      email: 'ronaldinho@email.com',
      name: 'ronaldinho',
      phone: '+55 11 111111111',
      status: CustomerStatus.Active,
    })
  })

  it('shoudl be able create a new user when a pass id, createAt and updateAt', () => {
    customer = new Customer(
      {
        document: '0000000000',
        email: 'ronaldinho@email.com',
        name: 'ronaldinho',
        phone: '+55 11 111111111',
        status: CustomerStatus.Active,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      randomUUID(),
    )

    expect(customer).toBeTruthy()
  })

  it('should be able to create a new customer', () => {
    expect(customer).toBeTruthy()
    expect(customer.id).toBeDefined()
    expect(customer.createdAt).toBeDefined()
    expect(customer.updatedAt).toBeDefined()
  })

  it('should set name', () => {
    customer.name = 'ronaldo fenomeno'
    expect(customer.name).toEqual('ronaldo fenomeno')
  })

  it('should set email', () => {
    customer.email = 'ronaldo@email.com'
    expect(customer.email).toEqual('ronaldo@email.com')
  })

  it('should set document', () => {
    customer.document = '11111111111'
    expect(customer.document).toEqual('11111111111')
  })

  it('should set phone', () => {
    customer.phone = '+55 21 999999999'
    expect(customer.phone).toEqual('+55 21 999999999')
  })

  it('should set status', () => {
    customer.status = CustomerStatus.Inactive
    expect(customer.status).toEqual('inativo')
  })

  it('should update', () => {
    customer.update()
    expect(customer.updatedAt).toBeDefined()
  })
})

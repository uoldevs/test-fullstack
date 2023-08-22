import { MockCustomerRepository } from '@/test/repositories/mock.customer.repository'
import { UpdateCustomer } from './updateCustomer'
import { CreateCustomer } from './createCustomer'
import { Customer, CustomerStatus } from '../entities/customer'

describe('updateCustomer', () => {
  let customerRepository: MockCustomerRepository
  let createCustomer: CreateCustomer
  let updateCustomers: UpdateCustomer
  let createdCustomer: Customer

  beforeEach(async () => {
    customerRepository = new MockCustomerRepository()
    createCustomer = new CreateCustomer(customerRepository)
    updateCustomers = new UpdateCustomer(customerRepository)

    const { customer } = await createCustomer.execute({
      name: 'ronaldinho gaucho',
      email: 'ronaldinho@email.com',
      document: '00000000000',
      phone: '+55 11 999999999',
      status: CustomerStatus.Active,
    })

    createdCustomer = customer
  })

  it('should be able to update all properties', async () => {
    const { customer: updatedCustomer } = await updateCustomers.execute({
      id: createdCustomer.id,
      props: {
        name: 'ronaldo fenomeno',
        email: 'ronaldo@email.com',
        document: '11111111111',
        phone: '+55 11 111111111',
        status: CustomerStatus.Inactive,
      },
    })

    expect(updatedCustomer.id).toEqual(createdCustomer.id)
    expect(updatedCustomer.name).toEqual('ronaldo fenomeno')
    expect(updatedCustomer.email).toEqual('ronaldo@email.com')
    expect(updatedCustomer.document).toEqual('11111111111')
    expect(updatedCustomer.phone).toEqual('+55 11 111111111')
    expect(updatedCustomer.status).toEqual(CustomerStatus.Inactive)
  })

  it('should be able to update only the name', async () => {
    const { customer: updatedCustomer } = await updateCustomers.execute({
      id: createdCustomer.id,
      props: { name: 'ronaldo fenomeno' },
    })

    expect(updatedCustomer.id).toEqual(createdCustomer.id)
    expect(updatedCustomer.name).toEqual('ronaldo fenomeno')
    expect(updatedCustomer.email).toEqual('ronaldinho@email.com')
    expect(updatedCustomer.document).toEqual('00000000000')
    expect(updatedCustomer.phone).toEqual('+55 11 999999999')
    expect(updatedCustomer.status).toEqual(CustomerStatus.Active)
  })

  it('should be able to update only the email', async () => {
    const { customer: updatedCustomer } = await updateCustomers.execute({
      id: createdCustomer.id,
      props: { email: 'ronaldo@email.com' },
    })

    expect(updatedCustomer.id).toEqual(createdCustomer.id)
    expect(updatedCustomer.name).toEqual('ronaldinho gaucho')
    expect(updatedCustomer.email).toEqual('ronaldo@email.com')
    expect(updatedCustomer.document).toEqual('00000000000')
    expect(updatedCustomer.phone).toEqual('+55 11 999999999')
    expect(updatedCustomer.status).toEqual(CustomerStatus.Active)
  })

  it('should be able to update only the document', async () => {
    const { customer: updatedCustomer } = await updateCustomers.execute({
      id: createdCustomer.id,
      props: { document: '11111111111' },
    })

    expect(updatedCustomer.id).toEqual(createdCustomer.id)
    expect(updatedCustomer.name).toEqual('ronaldinho gaucho')
    expect(updatedCustomer.email).toEqual('ronaldinho@email.com')
    expect(updatedCustomer.document).toEqual('11111111111')
    expect(updatedCustomer.phone).toEqual('+55 11 999999999')
    expect(updatedCustomer.status).toEqual(CustomerStatus.Active)
  })

  it('should be able to update only the phone', async () => {
    const { customer: updatedCustomer } = await updateCustomers.execute({
      id: createdCustomer.id,
      props: { phone: '+55 11 111111111' },
    })

    expect(updatedCustomer.id).toEqual(createdCustomer.id)
    expect(updatedCustomer.name).toEqual('ronaldinho gaucho')
    expect(updatedCustomer.email).toEqual('ronaldinho@email.com')
    expect(updatedCustomer.document).toEqual('00000000000')
    expect(updatedCustomer.phone).toEqual('+55 11 111111111')
    expect(updatedCustomer.status).toEqual(CustomerStatus.Active)
  })

  it('should not be able to update a non-existing customer', async () => {
    await expect(async () => {
      await updateCustomers.execute({
        id: 'invalid_id',
        props: {
          document: '00000000000',
          email: 'ronaldinho@email.com',
          name: 'ronaldinho',
          phone: '+55 11 0000000000',
          status: CustomerStatus.Active,
        },
      })
    }).rejects.toThrow()
  })
})

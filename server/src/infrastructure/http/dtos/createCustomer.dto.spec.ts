import { CustomerStatus } from '@/application/entities/customer'
import { CreateCustomerDTO } from './createCustomer.dto'
import { validate } from 'class-validator'

describe('CreateCustomerDTO', () => {
  it('should pass validation with valid data', async () => {
    const validData = {
      name: 'ronaldinho gaucho',
      email: 'ronaldinho@email.com',
      document: '00000000000',
      phone: '+55 11 999999999',
      status: CustomerStatus.Active,
    }

    const dto = new CreateCustomerDTO()
    Object.assign(dto, validData)

    const errors = await validate(dto)

    expect(errors.length).toBe(0)
  })

  it('should fail validation with invalid data', async () => {
    const invalidData = {
      name: '',
      email: 'invalid_email',
      document: '123456789',
      phone: '123',
      status: '',
    }

    const dto = new CreateCustomerDTO()

    Object.assign(dto, invalidData)

    const errors = await validate(dto)

    expect(errors.length).toBeGreaterThan(0)
  })
})

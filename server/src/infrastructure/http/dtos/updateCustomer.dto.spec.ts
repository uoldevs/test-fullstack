import { UpdateCustomerDTO } from './updateCustomer.dto'
import { validate } from 'class-validator'

describe('UpdateCustomerDTO', () => {
  it('should pass validation with valid data', async () => {
    const validData = { name: 'ronaldinho gaucho' }

    const dto = new UpdateCustomerDTO()

    Object.assign(dto, validData)

    const errors = await validate(dto)

    expect(errors.length).toBe(0)
  })

  it('should fail validation with invalid data', async () => {
    const invalidData = {
      email: 'invalid_email',
      phone: '123',
    }

    const dto = new UpdateCustomerDTO()

    Object.assign(dto, invalidData)

    const errors = await validate(dto)

    expect(errors.length).toBeGreaterThan(0)
  })
})

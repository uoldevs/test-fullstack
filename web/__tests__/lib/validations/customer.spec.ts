import { customerSchema } from '@/lib/validations/customer.schema'

describe('Management Customer Schema Validation', () => {
  it('should validate a valid customer object', () => {
    const validCustomer = {
      name: 'John Doe',
      email: 'john@example.com',
      document: '123.456.789-09',
      phone: '(123) 456-7890',
      status: 'Active',
    }

    expect(() => {
      customerSchema.parse(validCustomer)
    }).not.toThrow()
  })

  it('should throw error for invalid name', () => {
    const invalidCustomer = {
      name: 'J',
      email: 'john@example.com',
      document: '123.456.789-09',
      phone: '(123) 456-7890',
      status: 'Active',
    }

    expect(() => {
      customerSchema.parse(invalidCustomer)
    }).toThrow('O nome deve ter pelo menos 2 caracteres.')
  })

  it('should throw error for invalid email', () => {
    const invalidCustomer = {
      name: 'John Doe',
      email: 'invalid-email',
      document: '123.456.789-09',
      phone: '(123) 456-7890',
      status: 'Active',
    }

    expect(() => {
      customerSchema.parse(invalidCustomer)
    }).toThrow('Email inválido.')
  })

  it('should throw error for invalid document', () => {
    const invalidCustomer = {
      name: 'John Doe',
      email: 'john@example.com',
      document: '111.111.111-11',
      phone: '(123) 456-7890',
      status: 'Active',
    }

    expect(() => {
      customerSchema.parse(invalidCustomer)
    }).toThrow('Documento inválido')
  })

  it('should throw error for invalid phone', () => {
    const invalidCustomer = {
      name: 'John Doe',
      email: 'john@example.com',
      document: '123.456.789-09',
      phone: '123',
      status: 'Active',
    }

    expect(() => {
      customerSchema.parse(invalidCustomer)
    }).toThrow('Telefone inválido')
  })

  it('should throw error for missing required fields', () => {
    const invalidCustomer = {
      name: 'John Doe',
      email: '',
      document: '123.456.789-09',
      phone: '(123) 456-7890',
      status: '',
    }

    expect(() => {
      customerSchema.parse(invalidCustomer)
    }).toThrow('Obrigatório')
  })
})

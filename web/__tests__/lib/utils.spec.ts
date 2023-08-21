import {
  validateCPF,
  generateCPF,
  validatePhoneNumber,
  phoneDomainToView,
  phoneToView,
  phoneViewToDomain,
  generateEmail,
  generateName,
  generatePhone,
  cpfToView,
} from '@/lib/utils'

describe('CPF Validation', () => {
  it('validates a valid CPF', () => {
    expect(validateCPF('123.456.789-09')).toBe(true)
  })

  it('invalidates an invalid CPF', () => {
    expect(validateCPF('111.111.111-11')).toBe(false)
    expect(validateCPF('123.456.789-00')).toBe(false)
    expect(validateCPF('123')).toBe(false)
    expect(validateCPF('123.456.789-091')).toBe(false)
  })
})

describe('CPF Formatting', () => {
  it('formats a CPF', () => {
    expect(cpfToView('12345678909')).toBe('123.456.789-09')
    expect(cpfToView('11111111111')).toBe('111.111.111-11')
  })
})

describe('Phone Number Validation', () => {
  it('validates a valid phone number', () => {
    expect(validatePhoneNumber('(11) 1234-5678')).toBe(true)
  })

  it('invalidates an invalid phone number', () => {
    expect(validatePhoneNumber('(11) 1234')).toBe(false)
    expect(validatePhoneNumber('(11) 123456789')).toBe(true)
  })
})

describe('Phone Number Formatting', () => {
  it('formats a phone number for view', () => {
    expect(phoneToView('11987654321')).toBe('(11) 98765-4321')
    expect(phoneToView('63987654321')).toBe('(63) 98765-4321')
  })

  it('formats a phone number from domain to view', () => {
    expect(phoneDomainToView('+5563987654321')).toBe('(63) 98765-4321')
    expect(phoneDomainToView('+5511987654321')).toBe('(11) 98765-4321')
  })

  it('formats a phone number from view to domain', () => {
    expect(phoneViewToDomain('(11) 98765-4321')).toBe('+55 11 98765-4321')
    expect(phoneViewToDomain('(63) 98765-4321')).toBe('+55 63 98765-4321')
  })
})

describe('Customer Generation', () => {
  it('generates a valid CPF', () => {
    const cpf = generateCPF()
    expect(cpf.length).toBe(11)
  })

  it('generates a valid name', () => {
    const name = generateName()
    expect(name.split(' ').length).toBe(2)
  })

  it('generates a valid email', () => {
    const name = 'Ronaldinho Gaucho'
    const email = generateEmail(name)
    expect(email).toMatch(/^[\w.-]+@[\w.-]+\.\w+$/)
    expect(email.startsWith('ronaldinhogaucho')).toBe(true)
  })

  it('generates a valid phone number', () => {
    const phone = generatePhone()
    expect(phone.length).toBe(11)
  })
})

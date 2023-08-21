import {
  cpfToView,
  generateCPF,
  generateEmail,
  generateName,
  generatePhone,
  phoneToView,
} from '@/lib/utils'

describe('create customer', () => {
  it('should crate a new customer', () => {
    const name = generateName()
    const email = generateEmail(name)
    const document = generateCPF()
    const phone = generatePhone()

    cy.visit('/dashboard')

    cy.get('a[href*="create"]').click()

    cy.url().should('include', '/dashboard/create')

    cy.get('input[name=name]').type(name)
    cy.get('input[name=email]').type(email)
    cy.get('input[name=document]').type(document)
    cy.get('input[name=phone]').type(phone)
    cy.get('select[name=status]').select('ativo')

    cy.get('form').submit()

    cy.url().should('include', '/dashboard')

    cy.contains(name).should('exist')
    cy.contains(email).should('exist')
    cy.contains(cpfToView(document)).should('exist')
    cy.contains(phoneToView(phone)).should('exist')
  })

  it('should apper message required if dont field all input in form', () => {
    cy.visit('/dashboard')
    cy.get('a[href*="create"]').click()
    cy.get('form').submit()
    cy.contains('Required').should('exist')
  })

  it('should not create a new customer with invalid phone', () => {
    const name = generateName()
    const email = generateEmail(name)
    const document = generateCPF()
    const invalidPhone = '123'

    cy.visit('/dashboard')

    cy.get('a[href*="create"]').click()

    cy.get('input[name=name]').type(name)
    cy.get('input[name=email]').type(email)
    cy.get('input[name=document]').type(document)
    cy.get('input[name=phone]').type(invalidPhone)
    cy.get('select[name=status]').select('desativado')

    cy.get('form').submit()

    cy.contains('Telefone inválido').should('exist')
  })

  it('should not create a new customer with invalid document', () => {
    const name = generateName()
    const email = generateEmail(name)
    const document = '11111111111'
    const invalidPhone = generatePhone()

    cy.visit('/dashboard')
    cy.get('a[href*="create"]').click()

    cy.url().should('include', '/dashboard/create')

    cy.get('input[name=name]').type(name)
    cy.get('input[name=email]').type(email)
    cy.get('input[name=document]').type(document)
    cy.get('input[name=phone]').type(invalidPhone)
    cy.get('select[name=status]').select('desativado')

    cy.get('form').submit()

    cy.contains('Documento inválido').should('exist')
  })

  it('should be possible back to dashboard', () => {
    cy.visit('/dashboard')
    cy.get('a[href*="create"]').click()
    cy.url().should('include', '/dashboard/create')
    cy.get('form').find('a[href*="dashboard"]').click()
    cy.url().should('include', '/dashboard')
  })
})

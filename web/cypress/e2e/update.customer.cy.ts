import {
  cpfToView,
  generateCPF,
  generateEmail,
  generateName,
  generatePhone,
  phoneToView,
} from '@/lib/utils'

describe('update customer', () => {
  it('should be able update a customer', () => {
    const name = generateName()
    const email = generateEmail(name)
    const document = generateCPF()
    const phone = generatePhone()

    cy.visit('/dashboard')

    cy.get('[data-testid="dashboard-container"]')
      .first()
      .find('a')
      .contains('Editar')
      .click()

    cy.get('input[name=name]').clear().type(name)
    cy.get('input[name=email]').clear().type(email)
    cy.get('input[name=document]').clear().type(document)
    cy.get('input[name=phone]').clear().type(phone)
    cy.get('select[name=status]').select('inativo')

    cy.get('form').submit()

    cy.url().should('include', '/dashboard')

    cy.contains(name).should('exist')
    cy.contains(email).should('exist')
    cy.contains(cpfToView(document)).should('exist')
    cy.contains(phoneToView(phone)).should('exist')
    cy.contains('inativo').should('exist')
  })

  it('should no be able update a customer if dont field all input form', () => {
    cy.visit('/dashboard')

    cy.get('[data-testid="dashboard-container"]')
      .first()
      .find('a')
      .contains('Editar')
      .click()

    cy.get('form').submit()

    cy.get('input[name=name]').clear()
    cy.get('input[name=email]').clear()
    cy.get('input[name=document]').clear()
    cy.get('input[name=phone]').clear()

    cy.contains('Required').should('exist')
  })

  it('should not be able update a customer with invalid document', () => {
    const name = generateName()
    const email = generateEmail(name)
    const document = '11111111111'
    const phone = generatePhone()

    cy.visit('/dashboard')

    cy.get('[data-testid="dashboard-container"]')
      .first()
      .find('a')
      .contains('Editar')
      .click()

    cy.get('input[name=name]').clear().type(name)
    cy.get('input[name=email]').clear().type(email)
    cy.get('input[name=document]').clear().type(document)
    cy.get('input[name=phone]').clear().type(phone)
    cy.get('select[name=status]').select('inativo')

    cy.get('form').submit()

    cy.contains('Documento inválido').should('exist')
  })

  it('should not be able update a customer with invalid phone', () => {
    const name = generateName()
    const email = generateEmail(name)
    const document = generateCPF()
    const phone = '123'

    cy.visit('/dashboard')

    cy.get('[data-testid="dashboard-container"]')
      .first()
      .find('a')
      .contains('Editar')
      .click()

    cy.get('input[name=name]').clear().type(name)
    cy.get('input[name=email]').clear().type(email)
    cy.get('input[name=document]').clear().type(document)
    cy.get('input[name=phone]').clear().type(phone)
    cy.get('select[name=status]').select('inativo')

    cy.get('form').submit()

    cy.contains('Telefone inválido').should('exist')
  })
})

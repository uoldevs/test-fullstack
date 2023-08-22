describe('Edit page', () => {
  after(() => {
    cy.exec('cd .. && cd backend && DATABASE_URL=file:./dev-test.db npx prisma migrate reset --force')
  });

  it('Testing if visit from home is possible edit a client', () => {
    cy.visit('/');

    cy.get('.client-card:first-child .client-card-edit-btn').click();
    cy.get('.input-field[name="email"]').clear();
    cy.get('.input-field[name="email"]').type('test3@gmail.com');
    
    cy.get('.client-form-submit-btn').click();
    cy.wait(1000);
    cy.get('.alert-container').should('be.visible');
  });

  it('Testing if visit home the user has be edited', () => {
    cy.visit('/');

    cy.get('.client-card:first-child .client-card-edit-btn').click();
    cy.get('.input-field[name="email"]').clear();
    cy.get('.input-field[name="email"]').type('test4@gmail.com');
    
    cy.get('.client-form-submit-btn').click();
    cy.wait(5000);
    cy.get('.client-form-back-btn').click();

    cy.get('.client-card:first-child .client-card-name-email-container > *:last-child').should('have.text', 'test4@gmail.com');
  });

  it('Testing if have errror when try edit with repeted data', () => {
    cy.visit('/');

    cy.get('.client-card:first-child .client-card-edit-btn').click();
    cy.get('.input-field[name="email"]').clear();
    cy.get('.input-field[name="email"]').type('pedro@gmail.com');

    cy.get('.client-form-submit-btn').click();
    
    cy.get('.error-message-text').should('have.text', 'Dados de úsuario que já estão cadastrado');
  });

  describe('Testing error edit form', () => {
    it('Testing if have errors when fields is empty', () => {
      cy.visit('/');

      cy.get('.client-card:first-child .client-card-edit-btn').click();

      cy.get('.input-field[name="name"]').clear();
      cy.get('.input-field[name="email"]').clear();
      cy.get('.input-field[name="cpf"]').clear();
      cy.get('.input-field[name="phoneNumber"]').clear();
      cy.get('.client-form-select-status[name="status"]').select('Ativo');

      cy.get('.client-form-submit-btn').click();

      cy.get('.error-message-text').should('contain', 'O nome não pode ser vazio');
      cy.get('.error-message-text').should('contain', 'O CPF não pode ser vazio');
      cy.get('.error-message-text').should('contain', 'O email não pode ser vazio');
      cy.get('.error-message-text').should('contain', 'O número de telefone não pode ser vazio');
    });
  });
});

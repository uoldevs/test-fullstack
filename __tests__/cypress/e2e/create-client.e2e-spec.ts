describe('Create page', () => {
  after(() => {
    cy.exec('cd .. && cd backend && DATABASE_URL=file:./dev-test.db npx prisma migrate reset --force')
  });

  it('Testing if visit from home is possible create a client', () => {
    cy.visit('/');

    cy.get('.home-page-listing-view-header-new-client-btn').click();
    cy.get('.input-field[name="name"]').type('Test 1');
    cy.get('.input-field[name="email"]').type('test1@gmail.com');
    cy.get('.input-field[name="cpf"]').type('80477413064');
    cy.get('.input-field[name="phoneNumber"]').type('82996798270');
    cy.get('.client-form-select-status[name="status"]').select('Ativo');
    
    cy.get('.client-form-submit-btn').click();
    cy.wait(1000);
    cy.get('.alert-container').should('be.visible');
  });

  it('Testing if visit home the user has be created', () => {
    cy.visit('/client/create');

    cy.get('.input-field[name="name"]').type('Test 2');
    cy.get('.input-field[name="email"]').type('test2@gmail.com');
    cy.get('.input-field[name="cpf"]').type('75490171073');
    cy.get('.input-field[name="phoneNumber"]').type('68986773663');
    cy.get('.client-form-select-status[name="status"]').select('Ativo');
    
    cy.get('.client-form-submit-btn').click();
    cy.wait(5000);
    cy.get('.client-form-back-btn').click();

    cy.get('.client-card:last-child .client-card-name-email-container > *:first-child').should('have.text', 'Test 2');
    cy.get('.client-card:last-child .client-card-name-email-container > *:last-child').should('have.text', 'test2@gmail.com');
    cy.get('.client-card:last-child .client-card-cpf-phoneNumber-container > *:first-child').should('have.text', '754.901.710-73');
    cy.get('.client-card:last-child .client-card-cpf-phoneNumber-container > *:last-child').should('have.text', '(68) 98677-3663');
  });

  it('Testing if have errror when try create with repeted data', () => {
    cy.visit('/client/create');

    cy.get('.input-field[name="name"]').type('Test 1');
    cy.get('.input-field[name="email"]').type('test1@gmail.com');
    cy.get('.input-field[name="cpf"]').type('80477413064');
    cy.get('.input-field[name="phoneNumber"]').type('82996798270');
    cy.get('.client-form-select-status[name="status"]').select('Ativo');

    cy.get('.client-form-submit-btn').click();
    
    cy.get('.error-message-text').should('have.text', 'Dados de úsuario que já estão cadastrado');
  });

  describe('Testing error create form', () => {
    it('Testing if have errors when fields is empty', () => {
      cy.visit('/client/create');
      
      cy.get('.client-form-submit-btn').click();

      cy.get('.error-message-text').should('contain', 'O nome não pode ser vazio');
      cy.get('.error-message-text').should('contain', 'O CPF não pode ser vazio');
      cy.get('.error-message-text').should('contain', 'O email não pode ser vazio');
      cy.get('.error-message-text').should('contain', 'O número de telefone não pode ser vazio');
      cy.get('.error-message-text').should('contain', 'O status não pode ser vazio');
    })
  });
});

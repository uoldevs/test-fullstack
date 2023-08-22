describe('Home page', () => {
  it('Testing if all clients to be in page when visit', () => {
    cy.visit('/');

    cy.get('.client-card').should('have.length', '3');
    cy.get('.home-page-client-count').should('have.text', 'Exibindo 3 número de clientes');
  });

  it('Testing if create client button have in page', () => {
    cy.visit('/');

    cy.get('.home-page-listing-view-header-new-client-btn').should('exist');
    cy.get('.home-page-client-count').should('have.text', 'Exibindo 3 número de clientes');
  });

  it('Testing if create client button redirect for the correct page', () => {
    cy.visit('/');

    cy.get('.home-page-listing-view-header-new-client-btn').click();
    cy.url().should('contain', 'client/create');
  });

  it('Testing if edot client button redirect for the correct page', () => {
    cy.visit('/');

    cy.get('div.home-page-listing-view > section > div:nth-child(1) > button.client-card-edit-btn').click();
    cy.url().should('contain', 'client/edit?clientId=');
  });
});

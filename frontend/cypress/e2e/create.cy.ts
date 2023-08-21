import getRandomStatus from './utils/getRandomStatus';

describe('Visit /new-customer', () => {
	it('botão "Novo cliente" deve mudar a url', () => {
		cy.visit('http://localhost:3000/');
		cy.get('#novoCliente').click();
		cy.url().should('include', '/new-customer');
	});
});

describe('Create customer', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/new-customer');
	});
  
	it('testa se o campo name está vazio', () => {
    cy.get('#submitBtn').click();

    cy.on('window:alert',(txt)=>{
			expect(txt).to.contains('Erro: o campo name está vazio!');
		});
  });

  it('testa se o campo email está vazio', () => {
    cy.get('[name="name"]').type('Cypress Test');
    cy.get('#submitBtn').click();
    cy.on('window:alert',(txt)=>{
			expect(txt).to.contains('Erro: o campo email está vazio!');
		}); 
  });

  it('testa se o campo email está inválido', () => {
    cy.get('[name="name"]').type('Cypress Test');
    cy.get('[name="email"]').type(`${Math.floor(Math.random() * 10000000009).toString().padStart(11, '0')}example.com`);
    cy.get('#submitBtn').click();
    cy.on('window:alert',(txt)=>{
			expect(txt).to.contains('Erro: o campo email está inválido!');
		}); 
  });

  it('testa se o campo cpf está vazio', () => {
    cy.get('[name="name"]').type('Cypress Test');
    cy.get('[name="email"]').type(`${Math.floor(Math.random() * 10000000009).toString().padStart(11, '0')}@example.com`);
    cy.get('#submitBtn').click();
    cy.on('window:alert',(txt)=>{
			expect(txt).to.contains('Erro: o campo cpf está vazio!');
		}); 
  });

  it('testa se o campo cpf está inválido', () => {
    cy.get('[name="name"]').type('Cypress Test');
    cy.get('[name="email"]').type(`${Math.floor(Math.random() * 10000000009).toString().padStart(11, '0')}@example.com`);
    cy.get('[name="cpf"]').type(Math.floor(Math.random() * 10000000009).toString().padStart(5, '0'));
    cy.get('#submitBtn').click();
    cy.on('window:alert',(txt)=>{
			expect(txt).to.contains('Erro: o campo cpf está inválido!');
		}); 
  });

  it('testa se o campo telephone está vazio', () => {
    cy.get('[name="name"]').type('Cypress Test');
    cy.get('[name="email"]').type(`${Math.floor(Math.random() * 10000000009).toString().padStart(11, '0')}@example.com`);
    cy.get('[name="cpf"]').type(Math.floor(Math.random() * 10000000009).toString().padStart(11, '0'));
    cy.get('#submitBtn').click();
    cy.on('window:alert',(txt)=>{
			expect(txt).to.contains('Erro: o campo telephone está vazio!');
		});
  });

  it('testa se o campo telephone está inválido', () => {
    cy.get('[name="name"]').type('Cypress Test');
    cy.get('[name="email"]').type(`${Math.floor(Math.random() * 10000000009).toString().padStart(11, '0')}@example.com`);
    cy.get('[name="cpf"]').type(Math.floor(Math.random() * 10000000009).toString().padStart(11, '0'));
    cy.get('[name="telephone"]').type(Math.floor(Math.random() * 10000000009).toString().padStart(5, '0'));
    cy.get('#submitBtn').click();
    cy.on('window:alert',(txt)=>{
			expect(txt).to.contains('Erro: o campo telephone está inválido!');
		}); 
  });

  it('testa se o campo status está vazio', () => {
    cy.get('[name="name"]').type('Cypress Test');
    cy.get('[name="email"]').type(`${Math.floor(Math.random() * 10000000009).toString().padStart(11, '0')}@example.com`);
    cy.get('[name="cpf"]').type(Math.floor(Math.random() * 10000000009).toString().padStart(11, '0'));
    cy.get('[name="telephone"]').type(Math.floor(Math.random() * 10000000009).toString().padStart(11, '0'));
    cy.get('#submitBtn').click();
    cy.on('window:alert',(txt)=>{
			expect(txt).to.contains('Erro: o campo status está vazio!');
		});
  });
  const cpf = Math.floor(Math.random() * 10000000009).toString().padStart(11, '0');
  it('cria o usuário', () => {
    cy.get('[name="name"]').type('Cypress Test');
    cy.get('[name="email"]').type(`${Math.floor(Math.random() * 10000000009).toString().padStart(11, '0')}@example.com`);
    cy.get('[name="cpf"]').type(cpf);
    cy.get('[name="telephone"]').type(Math.floor(Math.random() * 10000000009).toString().padStart(11, '0'));
    cy.get('[name="status"]').select(getRandomStatus());
    cy.get('#submitBtn').click();
    cy.on('window:alert',(txt)=>{
			expect(txt).to.contains('Usuário criado com sucesso!');
		});
  });

  it('verificar se o usuário foi criado', () => {
    cy.get('#backBtn').click();
    cy.get(`#editBtn${cpf}`);
  });
});

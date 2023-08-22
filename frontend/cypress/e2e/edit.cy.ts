import getRandomStatus from './utils/getRandomStatus';

const cpf = Math.floor(Math.random() * 10000000009).toString().padStart(11, '0');
describe('cria um usuário', () => {
  it('cria o usuário', () => {
    cy.visit('http://localhost:3000/new-customer');

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
});

describe('verifica os erros do formulário', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
    cy.get(`#editBtn${cpf}`).click();
    cy.get('[name="name"]').clear();
    cy.get('[name="email"]').clear();
    cy.get('[name="cpf"]').clear();
    cy.get('[name="telephone"]').clear();
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

  it('testa se o campo campo email está inválido', () => {
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

  it('testa se o campo campo cpf está inválido', () => {
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

  it('testa se o campo campo telephone está inválido', () => {
    cy.get('[name="name"]').type('Cypress Test');
    cy.get('[name="email"]').type(`${Math.floor(Math.random() * 10000000009).toString().padStart(11, '0')}@example.com`);
    cy.get('[name="cpf"]').type(Math.floor(Math.random() * 10000000009).toString().padStart(11, '0'));
    cy.get('[name="telephone"]').type(Math.floor(Math.random() * 10000000009).toString().padStart(5, '0'));
    cy.get('#submitBtn').click();
    cy.on('window:alert',(txt)=>{
			expect(txt).to.contains('Erro: o campo telephone está inválido!');
		}); 
  });
});

describe('edita um usuário', () => {
  const newCpf = Math.floor(Math.random() * 10000000009).toString().padStart(11, '0');
  it('envia o formulário', () => {
    cy.visit('http://localhost:3000');
    cy.get(`#editBtn${cpf}`).click();
    
    cy.get('[name="name"]').clear();
    cy.get('[name="email"]').clear();
    cy.get('[name="cpf"]').clear();
    cy.get('[name="telephone"]').clear();

    cy.get('[name="name"]').type('Cypress Test');
    cy.get('[name="email"]').type(`${Math.floor(Math.random() * 10000000009).toString().padStart(11, '0')}@example.com`);
    cy.get('[name="cpf"]').type(newCpf);
    cy.get('[name="telephone"]').type(Math.floor(Math.random() * 10000000009).toString().padStart(11, '0'));
    cy.get('[name="status"]').select(getRandomStatus());
    cy.get('#submitBtn').click();
    cy.on('window:alert',(txt)=>{
			expect(txt).to.contains('Usuário atualizado com sucesso!');
		});
  });

  it('procura o novo usuario pelo cpf', () => {
    cy.visit('http://localhost:3000');
    cy.get(`#editBtn${newCpf}`);
  });
});
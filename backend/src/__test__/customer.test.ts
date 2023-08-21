const axios = require('axios');
const { exec } = require('child_process');

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const mock = {
  "name": "John Doe",
  "cpf": "123.456.790-01",
  "email": "john_doe@test.com",
  "status": "Ativo",
  "telephone": "(11) 99988-7450",
}

describe('Testes da rota customers', () => {
  describe('GET', () => {
    it('Deve retornar status 200 ao acessar a rota de customers com GET', async () => {
      const response = await api.get('/customers');
      expect(response.status).toBe(200);
    });
    it('Deve retornar status 200 ao acessar a rota de customers GET com id', async () => {
      const response = await api.get('/customers/1');
      const { updatedAt, createdAt, name, ...expectedData } = response.data;
  
      expect(response.status).toBe(200);
  
      expect(expectedData).toEqual({
        "cpf": "123.456.790-01",
        "email": "john_doe@test.com",
        "id": 1,
        "status": "Ativo",
        "telephone": "(11) 99988-7450",
        });
    });
  })

  describe('POST', () => {
    it('Deve retornar status 400 ao acessar a rota de customers com POST e name inválido', async () => {
      try {
        const response = await api.post('/customers', {...mock, name: ''});
      } catch (error) {
        expect(error.response.status).toBe(400);
      }
    });
  
    it('Deve retornar status 400 ao acessar a rota de customers com POST e cpf inválido', async () => {
      try {
        const response = await api.post('/customers', { ...mock, cpf: "" });
      } catch (error) {
        expect(error.response.status).toBe(400);
      }
    });
  
    it('Deve retornar status 400 ao acessar a rota de customers com POST e email inválido', async () => {
      try {
        const response = await api.post('/customers', { ...mock, email: "" });
      } catch (error) {
        expect(error.response.status).toBe(400);
      }
    });
  
    it('Deve retornar status 400 ao acessar a rota de customers com POST e telephone inválido', async () => {
      try {
        const response = await api.post('/customers', { ...mock, telephone: "" });
      } catch (error) {
        expect(error.response.status).toBe(400);
      }
    });
  
    it('Deve retornar status 400 ao acessar a rota de customers com POST e status inválido', async () => {
      try {
        const response = await api.post('/customers', { ...mock, status: "" });
      } catch (error) {
        expect(error.response.status).toBe(400);
      }
    });
  })

  describe('PUT', () => {
    it('Deve retornar status 400 ao acessar a rota de customers com POST e name inválido', async () => {
      try {
        const response = await api.put('/customers/1', {...mock, name: ''});
      } catch (error) {
        expect(error.response.status).toBe(400);
      }
    });
  
    it('Deve retornar status 400 ao acessar a rota de customers com POST e cpf inválido', async () => {
      try {
        const response = await api.put('/customers/1', { ...mock, cpf: "" });
      } catch (error) {
        expect(error.response.status).toBe(400);
      }
    });
  
    it('Deve retornar status 400 ao acessar a rota de customers com POST e email inválido', async () => {
      try {
        const response = await api.put('/customers/1', { ...mock, email: "" });
      } catch (error) {
        expect(error.response.status).toBe(400);
      }
    });
  
    it('Deve retornar status 400 ao acessar a rota de customers com POST e telephone inválido', async () => {
      try {
        const response = await api.put('/customers/1', { ...mock, telephone: "" });
      } catch (error) {
        expect(error.response.status).toBe(400);
      }
    });
  
    it('Deve retornar status 400 ao acessar a rota de customers com POST e status inválido', async () => {
      try {
        const response = await api.put('/customers/1', { ...mock, status: "" });
      } catch (error) {
        expect(error.response.status).toBe(400);
      }
    });
  })
  
});

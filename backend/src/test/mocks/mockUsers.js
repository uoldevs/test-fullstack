const mockUsers = [
  {
    id: 1,
    nome: 'User 1',
    email: 'user1@example.com',
    cpf: '12345678901',
    telefone: '1234567890',
    status: 'active',
  },
  {
    id: 2,
    nome: 'User 2',
    email: 'user2@example.com',
    cpf: '98765432101',
    telefone: '9876543210',
    status: 'inactive',
  },
];

const mockUser = {
  id: 1,
  nome: 'User 1',
  email: 'user1@example.com',
  cpf: '12345678901',
  telefone: '1234567890',
  status: 'active',
};

const newUser = {
  nome: 'New User',
  email: 'newuser@example.com',
  cpf: '12345678902',
  telefone: '9876543211',
  status: 'active',
};

const updatedUser = {
  nome: 'Updated User',
  email: 'updateduser@example.com',
  cpf: '12345678901',
  telefone: '5555555555',
  status: 'inactive',
};

module.exports = { mockUsers, mockUser, newUser, updatedUser };

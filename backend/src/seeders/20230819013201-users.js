'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
  [
    {
      name: 'Jonh Doe',
      email: 'jonh_doe@test.com',
      cpf: '123.456.789-00',
      telefone: '(11) 9998-8745',
      status: 'Ativo',
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      name: 'Jonh Doe',
      email: 'jonh_doe@test.com',
      cpf: '123.456.789-02',
      telefone: '(11) 9998-8746',
      status: 'Inativo',
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      name: 'Jonh Doe',
      email: 'jonh_doe@test.com',
      cpf: '123.456.789-03',
      telefone: '(11) 9998-8747',
      status: 'Aguardando ativação',
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      name: 'Jonh Doe',
      email: 'jonh_doe@test.com',
      cpf: '123.456.789-04',
      telefone: '(11) 9998-8748',
      status: 'Desativado',
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ], {}),

down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};

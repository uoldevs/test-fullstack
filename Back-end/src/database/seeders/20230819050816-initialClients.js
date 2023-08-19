'use strict';
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Clients',
      [
        {
          first_name: 'John',
          last_name: 'Doe',
          email: 'john@example.com',
          cpf: '123.456.78-90',
          cellphone: '(12)3456-7890',
          status: 'ativo',
        },
        {
          first_name: 'Jane',
          last_name: 'Doe',
          email: 'jane@example.com',
          cpf: '987.654.321-01',
          cellphone: '(98)7654-3210',
          status: 'inativo',
        },
        {
          first_name: 'Alice',
          last_name: 'Smith',
          email: 'alice@example.com',
          cpf: '555.555.555-55',
          cellphone: '(55)5555-5555',
          status: 'ativação_pendente',
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
     await queryInterface.bulkDelete('Clients', null, {});
     
  },
};

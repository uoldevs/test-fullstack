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
          cpf: '123.456.788-90',
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
        {
          first_name: 'Michael',
          last_name: 'Johnson',
          email: 'michael@example.com',
          cpf: '222.222.222-22',
          cellphone: '(22)2222-2222',
          status: 'ativo',
        },
        {
          first_name: 'Emily',
          last_name: 'Williams',
          email: 'emily@example.com',
          cpf: '333.333.333-33',
          cellphone: '(33)3333-3333',
          status: 'inativo',
        },
        {
          first_name: 'David',
          last_name: 'Brown',
          email: 'david@example.com',
          cpf: '444.444.444-44',
          cellphone: '(44)4444-4444',
          status: 'ativação_pendente',
        },
        {
          first_name: 'Sarah',
          last_name: 'Miller',
          email: 'sarah@example.com',
          cpf: '666.666.666-66',
          cellphone: '(66)6666-6666',
          status: 'ativo',
        },
        {
          first_name: 'Jessica',
          last_name: 'Davis',
          email: 'jessica@example.com',
          cpf: '777.777.777-77',
          cellphone: '(77)7777-7777',
          status: 'inativo',
        },
        {
          first_name: 'Daniel',
          last_name: 'Wilson',
          email: 'daniel@example.com',
          cpf: '888.888.888-88',
          cellphone: '(88)8888-8888',
          status: 'ativação_pendente',
        },
        {
          first_name: 'Sophia',
          last_name: 'Taylor',
          email: 'sophia@example.com',
          cpf: '999.999.999-99',
          cellphone: '(99)9999-9999',
          status: 'ativo',
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
     await queryInterface.bulkDelete('Clients', null, {});
     
  },
};

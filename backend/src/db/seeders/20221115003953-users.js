// src/seeders/[timestamp]-employees.js
// src/seeders/[timestamp]-employees.js

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [
        {
          id: 1,
          username: 'Daniel Hott',
          email: 'daniel_hott@outlook.com',
          cpf: '45184402004',
          status: 'Ativo',
          phone: '24998658881',
        },
        {
          id: 2,
          username: 'John Doe',
          email: 'john_doe@test.com',
          cpf: '62402250020',
          status: 'Inativo',
          phone: '24998658881',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};


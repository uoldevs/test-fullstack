/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'customers',
      [
        {
          name: 'John Doe',
          email: 'johndoe@email.com',
          cpf: '256.366.978-16',
          phone: '(41) 99856-0101',
          status: 'Aguardando ativação',
        },

        {
          name: 'Alan Turing',
          email: 'alanturing@email.com',
          cpf: '123.456.789-10',
          phone: '(11) 94402-8922',
          status: 'Ativo',
        },
        {
          name: 'Ada Lovelace',
          email: 'adalovelace@email.com',
          cpf: '256.366.978-17',
          phone: '(71) 92220-0305',
          status: 'Desativado',
        },
        {
          name: 'Nikola Tesla',
          email: 'tesla@email.com',
          cpf: '987.654.321-17',
          phone: '(51) 92560-1025',
          status: 'Inativo',
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('customers', null, {});
  },
};

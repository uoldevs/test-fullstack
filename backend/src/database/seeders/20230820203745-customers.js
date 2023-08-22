/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'customers',
      [
        {
          name: 'John Doe',
          email: 'johndoe@email.com',
          cpf: '350.887.750-75',
          phone: '(41) 99856-0101',
          status: 'Aguardando ativação',
        },

        {
          name: 'Alan Turing',
          email: 'alanturing@email.com',
          cpf: '496.013.860-25',
          phone: '(11) 94402-8922',
          status: 'Ativo',
        },
        {
          name: 'Ada Lovelace',
          email: 'adalovelace@email.com',
          cpf: '727.669.940-41',
          phone: '(71) 92220-0305',
          status: 'Desativado',
        },
        {
          name: 'Nikola Tesla',
          email: 'tesla@email.com',
          cpf: '257.891.020-00',
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

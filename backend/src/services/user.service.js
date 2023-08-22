const { User } = require('../models');
const sendError = require('../middlewares/sendError');

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const createUser = async (userDetails) => {
  const existingUser = await User.findOne({
    where: {
      name: userDetails.name,
      email: userDetails.email,
      cpf: userDetails.cpf,
      telefone: userDetails.telefone,
      status: userDetails.status
    }
  });

  if (existingUser) {
    throw sendError(400, 'Usuário já cadastrado com os mesmos dados.');
  }
  const newUser = await User.create(userDetails);
  return newUser;
};

const updateUser = async (id, userDetails) => {
  const existingUser = await User.findByPk(id);

  if (!existingUser) {
    throw sendError(404, 'Usuário não encontrado!');
  }

  const updatedUser = await User.update(userDetails, { where: { id } });
  return updatedUser;
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser
};

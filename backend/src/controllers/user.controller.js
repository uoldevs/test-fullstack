const UserService = require('../services/user.service');

const error500Message = 'Ocorreu um erro interno. Por favor, tente novamente mais tarde.';


const getAllUsers = async (_req, res) => {
  try {
    const users = await UserService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Ocorreu um erro!' });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, cpf, telefone, status } = req.body;
    const newUser = await UserService.createUser({ name, email, cpf, telefone, status });

    return res.status(201).json(newUser);
  } catch (error) {
    if (error.statusCode === 400) {
      return res.status(400).json({ message: error.message });
    }
    console.error(error.message);
    res.status(500).json({ message: error500Message });
  }
};


const updateUser = async (req, res) => {
  try {
    const { name, email, cpf, telefone, status } = req.body;
    const { id } = req.params;

    const updatedData = {};
    if (name) updatedData.name = name;
    if (email) updatedData.email = email;
    if (cpf) updatedData.cpf = cpf;
    if (telefone) updatedData.telefone = telefone;
    if (status) updatedData.status = status;

    await UserService.updateUser(id, updatedData);

    return res.status(200).json(updatedData);
  } catch (error) {
    if (error.statusCode === 404) {
      return res.status(404).json({ message: error.message });
    }
    console.error(error.message);
    res.status(500).json({ message: error500Message });
  }
};


module.exports = {
  getAllUsers,
  createUser,
  updateUser
};

const db = require('../models/usersModel');

const getAllUsers = (req, res) => {
  db.all('SELECT * FROM users', (err, users) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Usuários não encontrados!' });
      return;
    }
    res.status(200).json(users);
  });
};

const getUserById = (req, res) => {
  const userId = req.params.id;
  db.get('SELECT * FROM users WHERE id = ?', [userId], (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    if (!user) {
      res.status(500).json({ error: 'Usuário não encontrado!' });
      return;
    }
    res.status(200).json(user);
  });
};

const createUser = (req, res) => {
  const { nome, email, cpf, telefone, status } = req.body;
  const query =
    'INSERT INTO users (nome, email, cpf, telefone, status) VALUES (?, ?, ?, ?, ?)';

  db.run(query, [nome, email, cpf, telefone, status], (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Erro na criação do usuário' });
    }
    res.status(201).json({ message: 'Usuário criado com sucesso!' });
  });
};

const updateUser = (req, res) => {
  const userId = req.params.id;
  const { nome, email, cpf, telefone, status } = req.body;
  const query =
    'UPDATE users SET nome = ?, email = ?, cpf = ?, telefone = ?, status = ? WHERE id = ?';

  db.run(query, [nome, email, cpf, telefone, status, userId], (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Usuário não encontrado!' });
      return;
    }
    res.json({ message: 'Usuário atualizado com sucesso!' });
  });
};

const deleteUser = (req, res) => {
  const userId = req.params.id;
  const query = 'DELETE FROM users WHERE id = ?';

  db.run(query, [userId], (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(202).json({ message: 'Usuário deletado com sucesso!' });
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

const connection = require('../../database/Connection');

const getClients = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM Store.clients',
  );
  // console.log(products);
  return products;
};

const newClient = async (clientInfo) => {
  const {
    name, email, cpf, phone, status,
  } = clientInfo;
  const [{ insertId }] = await connection.execute(
    'INSERT INTO Store.clients (name, email, cpf, phone, status) VALUES (?, ?, ?, ?, ?)',
    [name, email, cpf, phone, status],
  );
  return {
    id: insertId, name, email, cpf, phone, status,
  };
};

const updateClient = async (clientInfo) => {
  const {
    id, name, email, cpf, phone, status,
  } = clientInfo;
  await connection.execute(
    'UPDATE Store.clients SET name = ?, email = ?, cpf = ?, phone = ?, status = ? WHERE id = ?',
    [name, email, cpf, phone, status, id],
  );
  return clientInfo;
};

module.exports = { getClients, newClient, updateClient };

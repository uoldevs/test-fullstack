const clientModel = require('../Model/client.model');

const getClients = async () => {
  const clientList = await clientModel.getClients();

  // if (!sellerList) throw new Error('Server internal error');

  return { type: null, message: clientList };
};

const newClient = async (clientInfo) => {
  // const { name, email, cpf, telefone, status } = clientInfo;
  // if (!name) throw new Error('Invalid entries. Try again.');

  const newClientInfo = await clientModel.newClient(clientInfo);
  return { type: null, message: newClientInfo };
};

const updateClient = async (clientInfo) => {
  const updatedClientInfo = await clientModel.updateClient(clientInfo);

  return { type: null, message: updatedClientInfo };
};

module.exports = { getClients, newClient, updateClient };

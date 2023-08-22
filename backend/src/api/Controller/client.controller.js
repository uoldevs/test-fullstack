const clientService = require('../Service/client.service');

const getClients = async (_req, res) => {
  const { message } = await clientService.getClients();
  return res.status(200).json(message);
};

const newClient = async (req, res) => {
  const newClientInfo = req.body;
  const { message } = await clientService.newClient(newClientInfo);

  return res.status(201).json(message);
};

const updateClient = async (req, res) => {
  const newClientInfo = req.body;
  const { message } = await clientService.updateClient(newClientInfo);

  return res.status(200).json(message);
};

module.exports = {
  getClients,
  newClient,
  updateClient,
};

const ClientService = require('../services/clientService');

class ClientController {
  constructor() {
    this.clientService = new ClientService();
  }

  getAllClients(req, res) {
    this.clientService.getAllClients((err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
  }

  getById(req, res) {
    const { id } = req.params;
    this.clientService.getById(id, (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!row) {
        return res.status(404).json({ error: 'Client not found!' });
      }
      res.json(row);
    });
  }

  createClient(req, res) {
    const { name, email, phone, cpf, status, } = req.body;
    this.clientService.createClient(name, email, phone, cpf, status, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Client created!' });
    });
  }

  updateClient(req, res) {
    const { id } = req.params;
    const { name, email, phone, cpf, status } = req.body;
    this.clientService.updateClient(id, name, email, phone, cpf, status, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Client updated!' });
    });
  }
}

module.exports = ClientController;

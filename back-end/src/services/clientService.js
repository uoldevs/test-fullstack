const ClientModel = require('../models/clientModel');

class ClientService {
  constructor() {
    this.clientModel = new ClientModel();
  }

  getAllClients(callback) {
    this.clientModel.getAllClients(callback);
  }

  getById(id, callback) {
    this.clientModel.getById(id, callback);
  }

  createClient(name, email, phone, cpf, status, callback) {
    this.clientModel.createClient(name, email, phone, cpf, status, callback);
  }

  updateClient(id, name, email, phone, cpf, status, callback) {
    this.clientModel.updateClient(id, name, email, phone, cpf, status, callback);
  }
}

module.exports = ClientService;

const sqlite3 = require('sqlite3').verbose();

class ClientModel {
  constructor() {
    this.db = new sqlite3.Database('clients.db');
    this.init();
  }

  init() {
    this.db.serialize(() => {
      this.db.run(`
        CREATE TABLE IF NOT EXISTS clients (
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE,
          phone TEXT,
          cpf TEXT NOT NULL,
          status TEXT NOT NULL
        )
      `);
    });
  }

  getAllClients(callback) {
    this.db.all('SELECT * FROM clients', callback);
  }

  getById(id, callback) {
    this.db.get('SELECT * FROM clients WHERE id = ?', [id], callback);
  }

  createClient(name, email, phone, cpf, status, callback) {
    const query = 'INSERT INTO clients (name, email, phone, cpf, status) VALUES (?, ?, ?, ?, ?)';
    this.db.run(query, [name, email, phone, cpf, status], callback);
  }

  updateClient(id, name, email, phone, cpf, status, callback) {
    const query = 'UPDATE clients SET name = ?, email = ?, phone = ?, cpf = ?, status = ? WHERE id = ?';
    this.db.run(query, [name, email, phone, cpf, status, id], callback);
  }
}

module.exports = ClientModel;
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.sqlite');

db.run(
  `CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  cpf TEXT NOT NULL UNIQUE,
  telefone TEXT UNIQUE,
  status TEXT
)`
);

module.exports = db;

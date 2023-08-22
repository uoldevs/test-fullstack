const mysql = require('mysql2/promise');
const { executeQueries, readQueries } = require('./queryUtils');

const conn = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  port: Number(process.env.MYSQLPORT || 3306),
});

if (['dev', 'development'].includes(process.env.NODE__ENV || 'development')) {
  const dropDatabase = readQueries('dropDatabase.sql');
  executeQueries(conn, dropDatabase).then(() => executeQueries(conn));
}

module.exports = conn;

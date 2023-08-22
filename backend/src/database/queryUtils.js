const fs = require('fs');
const path = require('path');
const connection = require('./Connection');

function readQueries(filePath = 'createDatabase.sql') {
  const importPath = path.resolve(__dirname, filePath);
  const seedDBContent = fs.readFileSync(importPath).toString();
  const queries = seedDBContent.split(';').filter((p) => p.trim());
  return queries;
}

async function executeQueries(
  conn,
  queries = readQueries(),
) {
  try {
    for (let i = 0; i < queries.length; i += 1) {
      const query = queries[i];
      // eslint-disable-next-line no-await-in-loop
      await conn.query(query);
    }
  } catch (error) {
    console.log('Database failed when executing queries', error);
  }
}

if (require.main === module) {
  executeQueries(connection)
    .then(async () => {
      console.info('Queries executed successfuly');
      await connection.end();
      process.exit(0);
    });
}

module.exports = {
  readQueries,
  executeQueries,
};

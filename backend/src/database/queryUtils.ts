import fs from 'fs';
import { Pool } from 'mysql2/promise';
import path from 'path';

const readQueries = (filePath = 'createDatabase.sql') => {
  const importPath = path.resolve(__dirname, filePath);
  const seedDBContent = fs.readFileSync(importPath).toString();
  const queries = seedDBContent.split(';').filter((q) => q.trim());
  return queries;
};

const executeQueries = async (conn: Pool, queries = readQueries()) => {
  try {
    for (let i = 0; i < queries.length; i++) {
      const query = queries[i];
      await conn.query(query);
    }
  } catch (error) {
    console.error('Database failed to execute queries', error);
  }
};

export default executeQueries;

const fs = require('fs');

const backupFilePath = './src/backup/database.sqlite';
const dbFilePath = './src/database/database.sqlite';

function copyBackupToDatabase() {
  try {
    const backupData = fs.readFileSync(backupFilePath);
    fs.writeFileSync(dbFilePath, backupData);
    console.log('Banco de dados restaurado a partir do backup.');
  } catch (error) {
    console.error('Ocorreu um erro ao restaurar o banco de dados:', error.message);
  }
}

copyBackupToDatabase();

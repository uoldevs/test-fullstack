const config = {
  // username: process.env.MYSQL_USER || 'root',
  // port: process.env.MYSQL_PORT || 3306,
  // password: process.env.MYSQL_PASSWORD || 'password',

  // Fiz inicialmente num banco MySql e depois adaptei para sqlite. Por isso a área comentada...

  host: process.env.MYSQL_HOST || 'localhost',
  dialect: 'sqlite',
};

module.exports = {
  development: {
    ...config,
    database: process.env.MYSQL_DATABASE || 'client_manager',
    storage: './database.sqlite',
  },
  test: {
    ...config,
    database: process.env.MYSQL_TEST_DATABASE || 'client_manager_test',
    storage: './test_database.sqlite',
  },
  production: config,
};


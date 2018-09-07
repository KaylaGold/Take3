module.exports = {
  "development": {
    "username": process.env.DEV_DB_USER,
    "password": process.env.DEV_DB_PASSWORD,
    "database": "booksdb",
    "host": "localhost",
    "dialect": "mysql",
    "port": "3306"
  },
  "test": {
    "username": process.env.TEST_DB_USER || "root",
    "password": process.env.TEST_DB_PASSWORD || null,
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
};
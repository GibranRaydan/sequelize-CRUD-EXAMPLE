require('dotenv').config()
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
{
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "dev_db",
    "host": DB_HOST,
    "dialect": "postgres"
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "test_db",
    "host": DB_HOST,
    "dialect": "postgres"
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "sequelize_database_prod",
    "host": DB_HOST,
    "dialect": "postgres"
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};
}

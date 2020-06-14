const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'template1',
      user: 'lambda',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/data/migrations',
    },
  },
  test: {
    client: 'pg',
    connection: {
      database: 'test',
      user: 'lambda',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/data/migrations',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};

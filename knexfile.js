// Update with your config settings.

module.exports = {
  developement: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user: 'username',
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
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
  },

  production: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};

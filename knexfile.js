// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://kouksxuf:u2t1IdI5jRVXrzT2FwFBT_1NulW4QecW@packy.db.elephantsql.com:5432/kouksxuf',
    // connection: {
    //   database: 'my_db',
    //   user: 'username',
    //   password: 'password',
    // },
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
    connection: 'postgres://fqgiwvwd:f7niilY4dC-TtefeS3_PDkmgCMQUncvr@rogue.db.elephantsql.com:5432/fqgiwvwd',
    // connection: {
    //   database: 'my_db',
    //   user: 'username',
    //   password: 'password',
    // },
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

// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password: 'postgres',
      database : 'hdv-store'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

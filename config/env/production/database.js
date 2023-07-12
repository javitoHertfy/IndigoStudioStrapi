// path: ./config/env/production/database.js

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env(" postgres://ydjdwolsefzoym:1b9a49c8915c0b1fde1425fa6276445dc2273d184e2a2375f265c9cf3e41acfd@ec2-34-240-122-104.eu-west-1.compute.amazonaws.com:5432/d7vjfbiqfpstd7"));
  
  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  }
};

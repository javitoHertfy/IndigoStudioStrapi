// Path: ./config/env/production/server.js
// starting from Strapi v 4.6.1 server.js has to be the following

module.exports = ({ env }) => ({
  proxy: true,
  host: "0.0.0.0",
  port: process.env.PORT,
  url: env('https://indigo-studio-strapi-c8d02d660bb7.herokuapp.com/'),
  app: { 
    keys: env.array('T7u8wnOUT0/U+OCxXYTSwg==,HwipnLnbBKKBjxTDUUwkWw==,dqSpUyi5jDFqbQ1O9Ieg0g==,FVBtyijjo8UNYxLuc4tCpg==')
  },
  admin: {
    auth: {
      secret: env('PZx+r7CVxQ8Ip19PjClp9w=='),
    },
  },
})

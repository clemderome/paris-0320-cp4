const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  port: process.env.PORT,
  databaseCredentials: {
    host: process.env.HOST,
    user: process.env.ACCOUNT,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  }
}
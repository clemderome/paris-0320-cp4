const mysql = require('mysql')
const {databaseCredentials} = require('./config')

const connection = mysql.createPool(databaseCredentials)

module.exports = connection
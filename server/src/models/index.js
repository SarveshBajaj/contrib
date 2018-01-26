/* fs and path modules are used to handle the path of the database */
const fs = require('fs')
const path = require('path')

const Sequelize = require('sequelize')
const db = {}

const sequelize = new Sequelize(
  process.env.DB_NAME || 'contrib',
  process.env.DB_USER || 'admin',
  process.env.DB_PASSWORD || 'root@123',
  {
    dialect: process.env.DIALECT || 'sqlite',
    host: process.env.HOST || 'localhost',
    storage: './contrib.sqlite'
  }
)

/* The following piece of code ensures that all models are exported
without having to explicity import every model from the server.js file */
fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

/* Export the sequelize and Sequelize variables with the db object
so that we have access to these variables from the server.js file */
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

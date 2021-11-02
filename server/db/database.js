const Sequelize = require('sequelize')

const db = new Sequelize('postgres://localhost:5432/BoilerPlate_db', {
  logging: false // unless you like the logs
  // ...and there are many other options you may want to play with
});

module.exports = db

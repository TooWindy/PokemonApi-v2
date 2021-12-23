const Sequelize = require('sequelize')

const databaseName= 'pokemonPicker'

const config = {
  logging: false
};

if(process.env.DATABASE_URL){
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  };
}

const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,{
  logging: false // unless you like the logs
  // ...and there are many other options you may want to play with
});

module.exports = db

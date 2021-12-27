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

const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`, config);

module.exports = db

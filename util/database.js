const Sequelize = require('sequelize');

const sequelize = new Sequelize('raj', 'root', 'Raj@3333', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

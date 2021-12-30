const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodedb', process.env.DB_USER, process.env.DB_PASSWORD, {dialect: 'mysql', host: process.env.DB_HOST});

module.exports = sequelize;
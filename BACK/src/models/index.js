'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('../config/config');
const { User } = require('./userModel');
const { Card } = require('./cardModel');
const db = {
  user: User,
  card: Card
};
const logger = require('../logger');

const sequelize = new Sequelize(config);

try {
  sequelize.authenticate();
} catch (error) {
  logger.error('Unable to connect to the database:', error);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
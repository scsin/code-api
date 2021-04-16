'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:', {
  logging: false
});

const Card = sequelize.define('Card', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  list: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

(async () => {
  await Card.sync({ force: true });
})();

module.exports = { Card };

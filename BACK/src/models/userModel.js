'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = new Sequelize('sqlite::memory:', {
  logging: false
});

const User = sequelize.define('User', {
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

(async () => {
  const encryptedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

  await User.sync({ force: true });

  await User.create({
    login: process.env.ADMIN_LOGIN,
    password: encryptedPassword
  });
})();

module.exports = { User };

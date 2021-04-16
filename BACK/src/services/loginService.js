const { User } = require('../models/userModel');
const { find } = require('../functions/find');
const { NotFound, GeneralError } = require('../utils/error');

exports.createDBUser = async (login, password) => {
    const createdUser = await User.create({ login, password });

    if (!createdUser) throw new GeneralError('Can´t create user');

    return createdUser;
};

exports.getEncryptedPassword = async (login) => {
    const user = await find(User, 'User', { login });

    if (!user) throw NotFound('Invalid credentials')

    return user.getDataValue('password');
};

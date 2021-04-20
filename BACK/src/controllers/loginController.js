const loginService = require('../services/loginService');
const { getJWT } = require('../functions/generateToken');
const bcrypt = require('bcrypt');
const { BadRequest } = require('../utils/error');

exports.createUser = async (req, res, next) => {
  try {
    const { login, password } = req.body;

    if (!login || !password) {
      throw new BadRequest('Missing required fields');
    }
    
    const encryptedPassword = await bcrypt.hash(password, 10);
    
    await loginService.createDBUser(login, encryptedPassword);

    const authenticated = await getJWT(login);

    res.send(authenticated);
  } catch (err) {
    next(err);
  }
};

exports.getLoginToken = async (req, res, next) => {
    try {
      const { login, password } = req.body;
  
      if (!login || !password) {
        throw new BadRequest('Missing required fields');
      }
      
      const encryptedPassword = await loginService.getEncryptedPassword(login);
      const comparePassword = await bcrypt.compare(password, encryptedPassword);
  
      if (!comparePassword) {
        throw new BadRequest('Invalid credentials');
      }
  
      const authenticated = getJWT(login);
  
      res.send(authenticated);
    } catch (err) {
      next(err);
    }
};

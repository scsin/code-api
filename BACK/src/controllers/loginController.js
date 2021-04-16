const loginService = require('../services/loginService');
const { getJWT } = require('../functions/generateToken');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res, next) => {
  try {
    const { login, password } = req.body;

    if (!login || !password) {
      throw new Error('Invalid params');
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
        throw new Error('Invalid params');
      }
      
      const encryptedPassword = await loginService.getEncryptedPassword(login);
      const comparePassword = await bcrypt.compare(password, encryptedPassword);
  
      if (!comparePassword) {
        throw new Error('Invalid credentials');
      }
  
      const authenticated = getJWT(login);
  
      res.send(authenticated);
    } catch (err) {
      next(err);
    }
};

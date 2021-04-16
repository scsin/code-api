const jwt = require('jsonwebtoken');

exports.getJWT = (login) => {
    const token = jwt.sign({ login: login }, process.env.JWT_KEY, {
        expiresIn: 600
    });

    const authenticated = {
        user: {
          login: login
        },
        token: token
      }

    return authenticated;
};

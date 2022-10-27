const { BadRequest } = require('../@types/errors');

module.exports = (req, _res, next) => {
  const { email, password, displayName } = req.body;

  const emailRegex = /[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}/i;

  if (!emailRegex.test(email)) {
    throw new BadRequest('"email" must be a valid email');
  }

  if (password.length < 6) {
    throw new BadRequest('"password" length must be at least 6 characters long');
  }

  if (displayName.length < 8) {
    throw new BadRequest('"displayName" length must be at least 8 characters long');
  }
  
  next();
};

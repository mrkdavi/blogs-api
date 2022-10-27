const { BadRequest } = require('../@types/errors');

module.exports = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequest('Some required fields are missing');
  }

  next();
};

const { BadRequest } = require('../@types/errors');

module.exports = (req, res, next) => {
  const { name } = req.body;
  
  if (!name) {
    throw new BadRequest('"name" is required');
  }

  next();
};

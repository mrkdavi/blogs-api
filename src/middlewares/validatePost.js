const { BadRequest } = require('../@types/errors');

module.exports = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  
  if (!title || !content) {
    throw new BadRequest('Some required fields are missing');
  }

  if (req.method === 'POST' && !categoryIds) {
    throw new BadRequest('Some required fields are missing');
  }

  next();
};

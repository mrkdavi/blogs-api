const { BadRequest } = require('../@types/errors');

module.exports = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds || !categoryIds.length) {
    throw new BadRequest('Some required fields are missing');
  }

  next();
};

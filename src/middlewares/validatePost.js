const { baseError, codes } = require('../utils/baseError');

module.exports = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    const { code, response } = baseError(
      codes.BAD_REQUEST,
      'Some required fields are missing',
    );
    return res.status(code).json(response);
  }

  next();
};

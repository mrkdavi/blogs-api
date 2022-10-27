const { baseError, codes } = require('../utils/baseError');

module.exports = (req, res, next) => {
  const { name } = req.body;
  
  if (!name) {
    const { code, response } = baseError(
      codes.BAD_REQUEST,
      '"name" is required',
    );
    return res.status(code).json(response);
  }

  next();
};

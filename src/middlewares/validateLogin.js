const { baseError, codes } = require('../utils/baseError');

module.exports = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    const { code, response } = baseError(
      codes.BAD_REQUEST,
      'Some required fields are missing',
    );
    return res.status(code).json(response);
  }

  next();
};

const { baseError, codes } = require('../utils/baseError');

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    console.log('DEU ERRO =============');
    const { code, response } = baseError(
      codes.BAD_REQUEST,
      'Some required fields are missing',
    );
    return res.status(code).json(response);
  }

  next();
};

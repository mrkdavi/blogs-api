const { baseError, codes } = require('../utils/baseError');

const validateEmail = (email) => {
  const emailRegex = /[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}/i;

  if (!emailRegex.test(email)) {
    return baseError(
      codes.BAD_REQUEST,
      '"email" must be a valid email',
    );
  }
};
const validatePassword = (password) => {
  if (password.length < 6) {
    return baseError(
      codes.BAD_REQUEST,
      '"password" length must be at least 6 characters long',
    );
  }
};
const validateDisplayName = (displayName) => {
  if (displayName.length < 8) {
    return baseError(
      codes.BAD_REQUEST,
      '"displayName" length must be at least 8 characters long',
    );
  }
};

module.exports = (req, res, next) => {
  const { email, password, displayName } = req.body;

  const errorEmail = validateEmail(email);
  const errorPassword = validatePassword(password);
  const errorDisplayName = validateDisplayName(displayName);

  if (errorEmail) {
    const { code, response } = errorEmail;
    return res.status(code).json(response);
  }
  
  if (errorPassword) {
    const { code, response } = errorPassword;
    return res.status(code).json(response);
  }
  
  if (errorDisplayName) {
    const { code, response } = errorDisplayName;
    return res.status(code).json(response);
  }
  
  next();
};

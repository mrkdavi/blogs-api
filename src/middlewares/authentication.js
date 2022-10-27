const { Unauthorized } = require('../@types/errors');
const { verifyToken } = require('../utils/token');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new Unauthorized('Token not found');
  }

  try {
    const user = verifyToken(authorization);
    req.user = user;
  } catch (e) {
    console.error(e.message);
    throw new Unauthorized('Expired or invalid token');
  }

  next();
};
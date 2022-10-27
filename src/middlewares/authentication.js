const { codes, baseError } = require('../utils/baseError');
const { verifyToken } = require('../utils/token');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    const { code, response } = baseError(codes.UNAUTHORIZED, 'Token not found');
    return res.status(code).json(response);
  }

  try {
    const user = verifyToken(authorization);

    req.user = user;
    next();
  } catch (e) {
    const { code, response } = baseError(codes.UNAUTHORIZED, 'Expired or invalid token');
    return res.status(code).json(response);
  }
};
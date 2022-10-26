const { sign, verify } = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateToken = (payload) => (
  sign(payload, JWT_SECRET)
);

const verifyToken = (token) => (
  verify(token, JWT_SECRET)
);

module.exports = {
  generateToken,
  verifyToken,
};
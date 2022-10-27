const authService = require('../services/authService');
const { codes } = require('../utils/baseError');

const login = async (req, res) => {
  const token = await authService.login(req.body);
  res.status(codes.OK).json({ token });
};

module.exports = {
  login,
};
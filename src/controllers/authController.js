const { baseError, codes } = require('../utils/baseError');
const authService = require('../services/authService');

const login = async (req, res) => {
  const token = await authService.login(req.body);

  if (!token) {
    const { code, response } = baseError(
      codes.BAD_REQUEST,
      'Invalid fields',
    );
    return res.status(code).json(response);
  }
  res.status(codes.OK).json({ token });
};

module.exports = {
  login,
};
const { codes } = require('../utils/baseError');
const userService = require('../services/userService');

const create = async (req, res) => {
  const token = await userService.create(req.body);

  if (token.code) {
    const { code, response } = token;
    return res.status(code).json(response);
  }
  res.status(codes.CREATED).json({ token });
};

const getAll = async (req, res) => {
  const users = await userService.getAll(req.body);

  res.status(codes.OK).json(users);
};

module.exports = {
  create,
  getAll,
};
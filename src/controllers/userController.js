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
  const users = await userService.getAll();

  res.status(codes.OK).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getById(id);

  if (user.code) {
    const { code, response } = user;
    return res.status(code).json(response);
  }

  res.status(codes.OK).json(user);
};

module.exports = {
  create,
  getAll,
  getById,
};
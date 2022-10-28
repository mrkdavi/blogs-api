const { codes } = require('../utils/baseError');
const userService = require('../services/userService');

const create = async (req, res) => {
  const token = await userService.create(req.body);
  res.status(codes.CREATED).json({ token });
};

const getAll = async (req, res) => {
  const users = await userService.getAll();
  res.status(codes.OK).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getById(id);
  res.status(codes.OK).json(user);
};

const deleteMe = async (req, res) => {
  const { id } = req.user;
  await userService.deleteMe(id);
  res.status(codes.NO_CONTENT).end();
};

module.exports = {
  create,
  getAll,
  getById,
  deleteMe,
};
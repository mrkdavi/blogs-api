const { codes } = require('../utils/baseError');
const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  const category = await categoryService.create(req.body);
  res.status(codes.CREATED).json(category);
};

const getAll = async (_req, res) => {
  const category = await categoryService.getAll();
  res.status(codes.OK).json(category);
};

module.exports = {
  create,
  getAll,
};
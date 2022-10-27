const { codes } = require('../utils/baseError');
const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  const category = await categoryService.create(req.body);

  if (category.code) {
    const { code, response } = category;
    return res.status(code).json(response);
  }

  res.status(codes.CREATED).json(category);
};

const getAll = async (req, res) => {
  const category = await categoryService.getAll();

  res.status(codes.OK).json(category);
};

module.exports = {
  create,
  getAll,
};
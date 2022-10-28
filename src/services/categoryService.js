const { Category } = require('../models');

const create = async (categoryData) => {
  const result = await Category.create(categoryData);
  const category = { ...result.dataValues };
  return category;
};

const getAll = async () => {
  const results = await Category.findAll();
  return results;
};

module.exports = {
  create,
  getAll,
};
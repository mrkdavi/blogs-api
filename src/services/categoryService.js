const { Category } = require('../models');
const { baseError, codes } = require('../utils/baseError');

const create = async (categoryData) => {
  try {
    const result = await Category.create(categoryData);

    const category = { ...result.dataValues, id: result.null };

    return category;
  } catch (e) {
    console.error(e);
    return baseError(codes.INTERNAL_SERVER_ERROR, 'Internal Server Error');
  }
};

const getAll = async () => {
  try {
    const results = await Category.findAll();

    return results;
  } catch (e) {
    console.error(e);
    return baseError(codes.INTERNAL_SERVER_ERROR, 'Internal Server Error');
  }
};

module.exports = {
  create,
  getAll,
};
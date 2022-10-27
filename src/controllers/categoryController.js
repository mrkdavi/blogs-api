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

// const getById = async (req, res) => {
//   const { id } = req.params;
//   const user = await userService.getById(id);

//   if (user.code) {
//     const { code, response } = user;
//     return res.status(code).json(response);
//   }

//   res.status(codes.OK).json(user);
// };

module.exports = {
  create,
  getAll,
  // getById,
};
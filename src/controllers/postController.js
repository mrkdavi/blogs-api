const { codes } = require('../utils/baseError');
const postService = require('../services/postService');

const create = async (req, res) => {
  const { user, body } = req;
  const post = await postService.create(user, body);
  res.status(codes.CREATED).json(post);
};

const getAllById = async (req, res) => {
  const { user } = req;
  const posts = await postService.getAllById(user);
  res.status(codes.OK).json(posts);
};

module.exports = {
  create,
  getAllById,
};
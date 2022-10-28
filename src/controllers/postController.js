const { codes } = require('../utils/baseError');
const postService = require('../services/postService');

const create = async (req, res) => {
  const { user, body } = req;
  const post = await postService.create(user, body);
  res.status(codes.CREATED).json(post);
};

const getAllByUserId = async (req, res) => {
  const { user, query } = req;
  const posts = await postService.getAllByUserId(user, query);
  res.status(codes.OK).json(posts);
};

const getAllByTerm = async (req, res) => {
  const { query } = req;
  const posts = await postService.getAllByTerm(query);
  res.status(codes.OK).json(posts);
};

const getAllById = async (req, res) => {
  const { id } = req.params;
  const posts = await postService.getAllById(id);
  res.status(codes.OK).json(posts);
};

const updateById = async (req, res) => {
  const { params: { id }, user, body } = req;
  const posts = await postService.updateById(id, user.id, body);
  res.status(codes.OK).json(posts);
};

const deleteById = async (req, res) => {
  const { params: { id }, user } = req;
  await postService.deleteById(id, user.id);
  res.status(codes.NO_CONTENT).end();
};

module.exports = {
  create,
  updateById,
  deleteById,
  getAllById,
  getAllByTerm,
  getAllByUserId,
};
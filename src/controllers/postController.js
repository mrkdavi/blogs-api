const { codes } = require('../utils/baseError');
const postService = require('../services/postService');

const create = async (req, res) => {
  const { user, body } = req;
  const post = await postService.create(user, body);
  res.status(codes.CREATED).json(post);
};

module.exports = {
  create,
};
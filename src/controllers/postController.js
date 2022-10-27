const { codes } = require('../utils/baseError');
const postService = require('../services/postService');

const create = async (req, res) => {
  const { user, body } = req;
  const post = await postService.create(user, body);

  if (post.code) {
    const { code, response } = post;
    return res.status(code).json(response);
  }

  res.status(codes.CREATED).json(post);
};

module.exports = {
  create,
};
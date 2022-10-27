const Sequelize = require('sequelize');

const { BlogPost, PostCategory } = require('../models');
const { baseError, codes } = require('../utils/baseError');

const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const create = async (user, postData) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const { id: userId } = user;
      const { title, content, categoryIds } = postData;
      const postResult = await BlogPost.create({
        title, content, userId, published: new Date(), updated: new Date(),
      }, { transaction: t });
      const post = { ...postResult.dataValues, id: postResult.null };
      await Promise.all(categoryIds.map((categoryId) => (
        PostCategory.create({ postId: post.id, categoryId }, { transaction: t })
      )));

      return post;
    });
    return result;
  } catch (e) {
    console.error(e);
    return baseError(codes.BAD_REQUEST, 'one or more "categoryIds" not found');
  }
};

module.exports = {
  create,
};
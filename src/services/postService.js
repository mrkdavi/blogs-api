const Sequelize = require('sequelize');

const { BlogPost, PostCategory, Category, User } = require('../models');

const config = require('../config/config');
const { BadRequest } = require('../@types/errors');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const verifyCategoryIds = async (categoryIds) => {
  const categories = await Promise.all(categoryIds.map((categoryId) => (
    Category.findOne({ where: { id: categoryId } })
  )));

  if (categories.includes(null)) {
    throw new BadRequest('one or more "categoryIds" not found');
  }
};

const create = async (user, postData) => {
  const result = await sequelize.transaction(async (t) => {
    const { id: userId } = user;
    const { title, content, categoryIds } = postData;

    await verifyCategoryIds(categoryIds);

    const postResult = await BlogPost.create({
      title, content, userId, published: new Date(), updated: new Date(),
    }, { transaction: t });
    const post = { ...postResult.dataValues };
    await Promise.all(categoryIds.map((categoryId) => (
      PostCategory.create({ postId: post.id, categoryId,
    }, { transaction: t }))));

    return post;
  });
  return result;
};

const getAllById = async (user) => {
  const { id: userId } = user;
  return BlogPost.findAll({
    where: { userId },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
};

module.exports = {
  create,
  getAllById,
};
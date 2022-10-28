const Sequelize = require('sequelize');

const { BlogPost, PostCategory, Category, User } = require('../models');

const config = require('../config/config');
const { BadRequest, NotFound, Unauthorized } = require('../@types/errors');

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

    if (!categoryIds.length) {
      throw new BadRequest('Some required fields are missing');
    }

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

const getAllByUserId = async (user) => {
  const { id: userId } = user;
  return BlogPost.findAll({
    where: { userId },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
};

const getAllById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  if (!post) {
    throw new NotFound('Post does not exist');
  }

  return post;
};

const updateById = async (id, userId, postData) => {
  const oldPost = await BlogPost.findOne({ where: { id } });

  if (!oldPost) throw new NotFound('Post does not exist');

  if (oldPost.userId !== userId) throw new Unauthorized('Unauthorized user');

  await BlogPost.update(
    { ...oldPost, ...postData },
    { where: { id } },
  );

  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return post;
};

const deleteById = async (id, userId) => {
  const post = await BlogPost.findOne({ where: { id } });

  if (!post) throw new NotFound('Post does not exist');

  if (post.userId !== userId) throw new Unauthorized('Unauthorized user');

  await BlogPost.destroy({ where: { id } });
};

module.exports = {
  create,
  getAllById,
  updateById,
  deleteById,
  getAllByUserId,
};
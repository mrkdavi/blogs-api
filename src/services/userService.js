const { Conflict, NotFound } = require('../@types/errors');
const { User } = require('../models');
const { generateToken } = require('../utils/token');

const create = async (userData) => {
  const areadyRegistered = await User.findOne({ where: { email: userData.email } });

  if (areadyRegistered) {
    throw new Conflict('User already registered');
  }

  const result = await User.create(userData);
  const user = { ...result.dataValues };
  
  delete user.password;
  const token = generateToken(user);

  return token;
};

const getAll = async () => {
  const results = await User.findAll();

  const users = results.map((result) => {
    const user = { ...result.dataValues };
    delete user.password;
    return user;
  });

  return users;
};

const getById = async (id) => {
  const result = await User.findOne({ where: { id } });

  if (!result) {
    throw new NotFound('User does not exist');
  }

  const user = { ...result.dataValues };
  delete user.password;

  return user;
};

module.exports = {
  create,
  getAll,
  getById,
};
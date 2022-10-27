const { User } = require('../models');
const { baseError, codes } = require('../utils/baseError');
const { generateToken } = require('../utils/token');

const create = async (userData) => {
  try {
    const areadyRegistered = await User.findOne({ where: { email: userData.email } });

    if (areadyRegistered) {
      return baseError(codes.CONFLICT, 'User already registered');
    }

    const result = await User.create(userData);

    const user = { ...result.dataValues };
    
    delete user.password;
    const token = generateToken(user);

    return token;
  } catch (e) {
    console.error(e);
    return baseError(codes.INTERNAL_SERVER_ERROR, 'Internal Server Error');
  }
};

const getAll = async () => {
  try {
    const results = await User.findAll();

    const users = results.map((result) => {
      const user = { ...result.dataValues };
      delete user.password;
      return user;
    });

    return users;
  } catch (e) {
    console.error(e);
    return baseError(codes.INTERNAL_SERVER_ERROR, 'Internal Server Error');
  }
};

const getById = async (id) => {
  try {
    const result = await User.findOne({ where: { id } });

    if (!result) {
      return baseError(codes.NOT_FOUND, 'User does not exist');
    }

    const user = { ...result.dataValues };

    delete user.password;

    return user;
  } catch (e) {
    console.error(e);
    return baseError(codes.INTERNAL_SERVER_ERROR, 'Internal Server Error');
  }
};

module.exports = {
  create,
  getAll,
  getById,
};
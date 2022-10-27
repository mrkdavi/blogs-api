const { BadRequest } = require('../@types/errors');
const { User } = require('../models');
const { generateToken } = require('../utils/token');

const login = async ({ email, password }) => {
  const result = await User.findOne({ where: { email } });

  if (!result) {
    throw new BadRequest('Invalid fields');
  }

  const user = { ...result.dataValues };
  
  if (!user || user.password !== password) {
    throw new BadRequest('Invalid fields');
  }
  
  delete user.password;
  const token = generateToken(user);

  return token;
};

module.exports = {
  login,
};
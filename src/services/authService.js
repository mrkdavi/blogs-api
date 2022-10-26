const { User } = require('../models');
const { generateToken } = require('../utils/token');

const login = async ({ email, password }) => {
  const result = await User.findOne({
    where: {
      email,
    },
  });

  if (!result) return;

  const user = { ...result.dataValues };
  
  if (!user || user.password !== password) {
    return;
  }
  
  delete user.password;
  const token = generateToken(user);

  return token;
};

module.exports = {
  login,
};
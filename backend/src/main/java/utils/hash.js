let bcrypt = require('bcrypt');

const hashPassword = async (plainPassword) => {
  let saltRounds = 10;
  return await bcrypt.hash(plainPassword, saltRounds);
};

module.exports = {
  hashPassword,
};
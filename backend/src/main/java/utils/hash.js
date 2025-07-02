let bcrypt = require('bcrypt');

// Hashear contraseña
const hashPassword = async (plainPassword) => {
  let saltRounds = 10;
  return await bcrypt.hash(plainPassword, saltRounds);
};


// Comparar una contraseña con un hash para comprobar si es la misma contraseña
const comparePasswords = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

module.exports = {
  hashPassword,
  comparePasswords
};
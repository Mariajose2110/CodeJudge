let { comparePasswords } = require('../utils/hash.js');
let { generateToken } = require('../utils/jwt');
let User = require('../model/user.js');



//--------------------------------Login Usuario-----------------------------------------------------------------------------------
exports.login = async ({ username, password }) => {

    console.log(username)
    console.log(password)
  let user = await User.findOne({username});

  if (!user) throw new Error('Usuario no encontrado');

  let isMatch = await comparePasswords(password, user.password);
  if (!isMatch) throw new Error('Contraseña incorrecta');

  // Generar token con userId y username
  let token = generateToken({ userId: user._id, username: user.username });

  return { token, user };
};
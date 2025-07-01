let User = require('../model/user.js');
let bcrypt = require('bcrypt');

//--------------------------------Crear usuario-----------------------------------------------------------------------------------
exports.create = async ({ username, email, password }) => {

  // Verifica si ya existe un usuario con ese email
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email already in use');
  }

  // Hashea la contraseña
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Crea y guarda el usuario
  const user = new User({
    username,
    email,
    password: hashedPassword
  });

  return await user.save();
};



//--------------------------------Obtener usuario por Id-----------------------------------------------------------------------------------
exports.getUserById = async ({ id }) => {

  // Verifica si ya existe un usuario con ese email
  const existingUser = await User.findOne({ id });
  if (existingUser) {
    throw new Error('Email already in use');
  }

  return existingUser;
};




//--------------------------------Obtener todos los usuarios-----------------------------------------------------------------------------------
exports.getUsers = async () => {

  let users = await User.find()
  console.log(users)
  return users;
};


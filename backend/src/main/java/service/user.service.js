let User = require('../model/user.js');
let mongoose = require('mongoose');
let { hashPassword } = require('../utils/hash.js');

//--------------------------------Crear usuario-----------------------------------------------------------------------------------
exports.create = async ({ username, email, password }) => {

  // Verifica si ya existe un usuario con ese email
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email already in use');
  }

  // Hashea la contraseña
    let hashedPassword = await hashPassword(password);

  // Crea y guarda el usuario
  const user = new User({
    username,
    email,
    password: hashedPassword
  });

  return await user.save();
};



//--------------------------------Obtener usuario por Id-----------------------------------------------------------------------------------
exports.getUserById = async (id) => {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('ID inválido');
  }
  // Verifica si ya existe un usuario con id
  let existingUser = await User.findById(id);

  if (!existingUser) {
    throw new Error('No existe usuario con ese id');
  }

  return existingUser;
};




//--------------------------------Obtener todos los usuarios-----------------------------------------------------------------------------------
exports.getUsers = async () => {

  let users = await User.find();
  return users;
};


//--------------------------------Modificar usuario-----------------------------------------------------------------------------------
exports.updateUser = async (id, dataToUpdate) => {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('ID inválido');
  }

  // Elimina campos vacíos
  Object.keys(dataToUpdate).forEach((key) => {
    if (dataToUpdate[key] === "") {
      delete dataToUpdate[key];
    }
  });

  // Si hay password, hashearla
  if (dataToUpdate.password) {
    dataToUpdate.password = await hashPassword(dataToUpdate.password);
  }

  const updatedUser = await User.findByIdAndUpdate(
    id,
    { $set: dataToUpdate },
    { new: true, runValidators: true }
  );

  if (!updatedUser) {
    throw new Error('No existe usuario con ese id');
  }

  return updatedUser;
};

//--------------------------------Eliminar Usuario-----------------------------------------------------------------------------------
exports.deleteUser = async (id, dataToUpdate) => {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('ID inválido');
  }

  let updatedUser = await User.findByIdAndDelete(id);

  if (!updatedUser) {
    throw new Error('No existe usuario con ese id');
  }

  return updatedUser;
};



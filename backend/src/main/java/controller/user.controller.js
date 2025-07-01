let userService = require('../service/user.service');



//--------------------------------Crear nuevo usuario-----------------------------------------------------------------------------------
exports.createUser = async (req, res) => {

  try {
    const { username, email, password } = req.body;

    // Validación básica
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Llama al servicio para crear el usuario
    const user = await userService.create({ username, email, password });

    // Retorna el usuario sin la contraseña
    const { password: _, ...safeUser } = user.toObject();
    res.status(201).json(safeUser);

  } catch (err) {
  console.log(err)
    res.status(500).json({ error: err.message });
  }
};


//--------------------------------Obtener todos los usuarios-----------------------------------------------------------------------------------
exports.getUsers = async (req, res) => {
  try {
    // Llama al servicio para obtener los usuarios
    let users =  await userService.getUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


//--------------------------------Obtener usuario por Id-----------------------------------------------------------------------------------
exports.getUserById = async (req, res) => {
  try {
     let { id } = req.params;

    // Validación básica
    if (!id) {
      return res.status(400).json({error: 'User ID is required'});
    }

    // Llama al servicio para obtener el usuario por Id
    let user = await userService.getUserById(id);
    if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


//--------------------------------Modificar Usuario-----------------------------------------------------------------------------------
exports.updateUser = async (req, res) => {
  try {
     let { id } = req.params;
     const { username, email, password } = req.body;

    // Validación básica
    if (!id) {
      return res.status(400).json({error: 'User ID is required'});
    }

    // Pasa los campos a actualizar al servicio
    let updatedUser = await userService.updateUser(id, { username, email, password });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Quitar la contraseña de la respuesta
    const { password: _, ...safeUser } = updatedUser.toObject();
    res.status(200).json(safeUser);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


//--------------------------------Eliminar Usuario-----------------------------------------------------------------------------------
exports.deleteUser = async (req, res) => {
  try {
    let { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    let deleted = await userService.deleteUser(id);

    if (!deleted) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


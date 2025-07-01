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
    const { id } = req.body;

    // Validación básica
    if (!id) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Llama al servicio para obtener el usuario por Id
    //const user = await userService.getUserById(id});

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
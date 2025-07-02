let authService = require('../service/auth.service');
let nextResponse = require ('next/server')


//--------------------------------Crear nuevo usuario-----------------------------------------------------------------------------------
exports.signup = async (req, res) => {

    let {email, password} = req.json();



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

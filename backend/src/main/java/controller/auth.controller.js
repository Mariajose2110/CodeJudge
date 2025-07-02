let authService = require('../service/auth.service');

//--------------------------------Login Usuario-----------------------------------------------------------------------------------
exports.loginUser = async (req, res) => {
  try {
    let { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ error: 'Todos los campos son requeridos' });

    let { token, user } = await authService.login({ username, password });

    res.status(200).json({
      message: 'Login exitoso',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
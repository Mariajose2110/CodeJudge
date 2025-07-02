let jwt = require('jsonwebtoken');

let JWT_SECRET = process.env.JWT_SECRET; // Clave secreta JWT
let JWT_EXPIRES_IN = '1h'; // Duración del token

// Crear token con el payload
const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

// Verificar token recibido
const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = { generateToken, verifyToken };
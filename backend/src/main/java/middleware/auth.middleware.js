let { verifyToken } = require('../utils/jwt');

let authMiddleware = (req, res, next) => {
  let authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token no enviado' });
  }

  let token = authHeader.split(' ')[1];

  try {
    let decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido o expirado' });
  }
};

module.exports = authMiddleware;
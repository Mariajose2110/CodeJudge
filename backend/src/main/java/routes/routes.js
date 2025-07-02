let express = require('express');
let router = express.Router();
let userController = require('../controller/user.controller');
let auth = require('../middleware/auth.middleware');
let login = require ('../controller/auth.controller')


// Rutas protegidas con token
router.get('/users/get', auth, userController.getUsers);
router.get('/user/getbyId/:id', auth, userController.getUserById);
router.put('/user/update/:id', auth, userController.updateUser);
router.delete('/user/delete/:id', auth, userController.deleteUser);

// Ruta pública para crear usuario
router.post('/user/add', userController.createUser);

// Ruta pública para hacer login
router.post('/user/login', login.loginUser);



module.exports = router;
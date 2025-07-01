let express = require('express');
let router = express.Router();
let userController = require('../controller/user.controller');

// CRUD
router.post('/user/add', userController.createUser);         // POST /api/users
router.get('/user/get', userController.getUsers);            // GET /api/users
//router.get('/user/get:id', userController.getUserById);      // GET /api/users/:id
//router.put('user/update:id', userController.updateUser);       // PUT /api/users/:id
//router.delete('/user/delete:id', userController.deleteUser);    // DELETE /api/users/:id

module.exports = router;
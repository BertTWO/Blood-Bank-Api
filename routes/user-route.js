const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/donors', userController.getDonors);
router.get('/recipients', userController.getRecipients);
router.get('/:id', userController.getUserById);
router.get('/', userController.getAllUsers);

router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


router.post('/login', userController.loginUser);
module.exports = router;

const { Router } = require('express');
const userController = require('../controllers/userController');
const authentication = require('../middlewares/authentication');
const validateUser = require('../middlewares/validateUser');

const router = new Router();

router.post('/', validateUser, userController.create);

router.get('/', authentication, userController.getAll);

router.get('/:id', authentication, userController.getById);

module.exports = router;
const { Router } = require('express');
const userController = require('../controllers/userController');
const authentication = require('../middlewares/authentication');
const validateUser = require('../middlewares/validateUser');

const router = new Router();

router.get('/', authentication, userController.getAll);

router.post('/', validateUser, userController.create);

module.exports = router;
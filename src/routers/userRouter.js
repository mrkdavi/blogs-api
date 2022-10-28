const { Router } = require('express');
const userController = require('../controllers/userController');
const authentication = require('../middlewares/authentication');
const { errorResolve } = require('../middlewares/errorHandler');
const validateUser = require('../middlewares/validateUser');

const router = new Router();

router.post('/', validateUser, errorResolve(userController.create));
router.get('/', authentication, errorResolve(userController.getAll));
router.get('/:id', authentication, errorResolve(userController.getById));
router.delete('/me', authentication, errorResolve(userController.deleteMe));

module.exports = router;
const { Router } = require('express');
const authController = require('../controllers/authController');
const { errorResolve } = require('../middlewares/errorHandler');
const validateLogin = require('../middlewares/validateLogin');

const router = new Router();

router.post('/login', validateLogin, errorResolve(authController.login));

module.exports = router;
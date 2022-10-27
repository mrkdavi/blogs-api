const { Router } = require('express');
const userController = require('../controllers/userController');
const validateUser = require('../middlewares/validateUser');

const router = new Router();

router.post('/', validateUser, userController.create);

module.exports = router;
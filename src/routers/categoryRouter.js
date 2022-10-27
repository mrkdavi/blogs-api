const { Router } = require('express');
const categoryController = require('../controllers/categoryController');
const authentication = require('../middlewares/authentication');
const { errorResolve } = require('../middlewares/errorHandler');
const validadeCategory = require('../middlewares/validadeCategory');

const router = new Router();

router.post('/', authentication, validadeCategory, errorResolve(categoryController.create));
router.get('/', authentication, errorResolve(categoryController.getAll));

module.exports = router;
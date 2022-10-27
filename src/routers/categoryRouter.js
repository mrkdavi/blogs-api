const { Router } = require('express');
const categoryController = require('../controllers/categoryController');
const authentication = require('../middlewares/authentication');
const validadeCategory = require('../middlewares/validadeCategory');

const router = new Router();

router.post('/', authentication, validadeCategory, categoryController.create);
router.get('/', authentication, categoryController.getAll);

module.exports = router;
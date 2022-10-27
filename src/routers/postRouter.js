const { Router } = require('express');
const postController = require('../controllers/postController');
const authentication = require('../middlewares/authentication');
const validatePost = require('../middlewares/validatePost');

const router = new Router();

router.post('/', authentication, validatePost, postController.create);

module.exports = router;
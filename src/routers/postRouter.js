const { Router } = require('express');
const postController = require('../controllers/postController');
const authentication = require('../middlewares/authentication');
const { errorResolve } = require('../middlewares/errorHandler');
const validatePost = require('../middlewares/validatePost');

const router = new Router();

router.post('/', authentication, validatePost, errorResolve(postController.create));
router.get('/', authentication, errorResolve(postController.getAllByUserId));
router.get('/:id', authentication, errorResolve(postController.getAllById));
router.put('/:id', authentication, validatePost, errorResolve(postController.update));

module.exports = router;
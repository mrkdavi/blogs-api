const { Router } = require('express');
const postController = require('../controllers/postController');
const authentication = require('../middlewares/authentication');
const { errorResolve } = require('../middlewares/errorHandler');
const validatePost = require('../middlewares/validatePost');

const router = new Router();

router.get('/search', authentication, errorResolve(postController.getAllByTerm));
router.get('/', authentication, errorResolve(postController.getAllByUserId));
router.post('/', authentication, validatePost, errorResolve(postController.create));
router.get('/:id', authentication, errorResolve(postController.getAllById));
router.put('/:id', authentication, validatePost, errorResolve(postController.updateById));
router.delete('/:id', authentication, errorResolve(postController.deleteById));

module.exports = router;
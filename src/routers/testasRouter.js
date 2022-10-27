const { Router } = require('express');
const { errorResolve } = require('../middlewares/errorHandler');
const { UnprocessableEntity } = require('../@types/errors');

const router = new Router();

const testas = (_req, _res) => {
  throw new UnprocessableEntity();
  // res.status(200).json({
  //   oi: 'oi',
  // });
};

router.get('/', errorResolve(testas));

module.exports = router;
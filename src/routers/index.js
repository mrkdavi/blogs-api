const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');

const createRouters = (app) => {
  app.use('/', authRouter);
  app.use('/user', userRouter);
  app.use('/categories', categoryRouter);
};

module.exports = createRouters;
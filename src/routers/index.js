const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');
const categoryRouter = require('./categoryRouter');

const createRouters = (app) => {
  app.use('/', authRouter);
  app.use('/user', userRouter);
  app.use('/categories', categoryRouter);
  app.use('/post', postRouter);
};

module.exports = createRouters;
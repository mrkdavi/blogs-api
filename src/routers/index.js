const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');
const categoryRouter = require('./categoryRouter');

const testasRouter = require('./testasRouter');

const createRouters = (app) => {
  app.use('/', authRouter);
  app.use('/user', userRouter);
  app.use('/categories', categoryRouter);
  app.use('/post', postRouter);
  app.use('/testas', testasRouter);
};

module.exports = createRouters;
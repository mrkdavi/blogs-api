const authRouter = require('./authRouter');
const userRouter = require('./userRouter');

const createRouters = (app) => {
  app.use('/', authRouter);
  app.use('/user', userRouter);
};

module.exports = createRouters;
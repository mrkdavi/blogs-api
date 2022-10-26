const authRouter = require('./authRouter');

const createRouters = (app) => {
  app.use('/', authRouter);
};

module.exports = createRouters;
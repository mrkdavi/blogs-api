const errorResolve = (handlerFn) => (
  (req, res, next) => (
    Promise.resolve(handlerFn(req, res))
      .catch((e) => next(e))
  )
);

const errorHandler = (error, _req, res, next) => {
  if (error && error.statusCode) {
    res.status(error.statusCode).json({
      message: error.message,
    });
  } else {
    console.error(`[${error.statusCode || 'no code'}] ${error.message}`);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
  next();
};

module.exports = {
  errorResolve,
  errorHandler,
};
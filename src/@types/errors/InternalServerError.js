class InternalServerError extends Error {
  constructor(msg = 'Internal Server Error') {
    super(msg);
    this.statusCode = 500; 
  }
}

module.exports = InternalServerError;
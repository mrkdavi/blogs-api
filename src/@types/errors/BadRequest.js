class BadRequest extends Error {
  constructor(msg = 'Bad Request') {
    super(msg);
    this.statusCode = 400; 
  }
}

module.exports = BadRequest;
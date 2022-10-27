class NotFound extends Error {
  constructor(msg = 'Not Found') {
    super(msg);
    this.statusCode = 404; 
  }
}

module.exports = NotFound;
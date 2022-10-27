class Unauthorized extends Error {
  constructor(msg = 'Unauthorized') {
    super(msg);
    this.statusCode = 401; 
  }
}

module.exports = Unauthorized;
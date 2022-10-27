class Forbidden extends Error {
  constructor(msg = 'Forbidden') {
    super(msg);
    this.statusCode = 403; 
  }
}

module.exports = Forbidden;
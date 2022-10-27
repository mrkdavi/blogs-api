class Conflict extends Error {
  constructor(msg = 'Conflict') {
    super(msg);
    this.statusCode = 409; 
  }
}

module.exports = Conflict;
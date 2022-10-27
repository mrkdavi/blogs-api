class UnprocessableEntity extends Error {
  constructor(msg = 'Unprocessable Entity') {
    super(msg);
    this.statusCode = 422; 
  }
}

module.exports = UnprocessableEntity;
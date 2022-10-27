const BadRequest = require('./BadRequest');
const Conflict = require('./Conflict');
const Forbidden = require('./Forbidden');
const InternalServerError = require('./InternalServerError');
const NotFound = require('./NotFound');
const Unauthorized = require('./Unauthorized');
const UnprocessableEntity = require('./UnprocessableEntity');

module.exports = {
  BadRequest,
  Conflict,
  Forbidden,
  InternalServerError,
  NotFound,
  Unauthorized,
  UnprocessableEntity,
};
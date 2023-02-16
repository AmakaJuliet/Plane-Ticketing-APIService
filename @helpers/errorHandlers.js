class NotFoundException extends Error{
   constructor(message, statusCode) {
      super(message);
      this.name = this.constructor.name;
      this.statusCode = statusCode;
    }
}

class ValidationException extends NotFoundException {};
class AuthForbiddenException extends NotFoundException {};
class InvalidOeExpiredAuthToken extends NotFoundException {};

module.exports = {
  ValidationException,
  NotFoundException,
  AuthForbiddenException,
  InvalidOeExpiredAuthToken
}
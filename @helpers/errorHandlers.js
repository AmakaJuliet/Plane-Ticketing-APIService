class NotFoundException extends Error{
   constructor(message, statusCode) {
      super(message);
      this.name = this.constructor.name;
      this.statusCode = statusCode;
    }
}

class ValidationException extends NotFoundException {};

module.exports = {
  ValidationException,
  NotFoundException
}
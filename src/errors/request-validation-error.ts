import { ValidationError } from 'express-validator';
import { CustomError } from "./custom-error";

class RequestValidationError extends CustomError {

  statusCode = 400;

  constructor(private reasons: ValidationError[]) {
    super();

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeError() {
    return this.reasons.map((error) => ({ message: error.msg }));
  }
}

export { RequestValidationError };

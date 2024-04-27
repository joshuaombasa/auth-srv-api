import { CustomError } from './custom-error';

class NotFoundError extends CustomError {
  reason = 'unknown enpoint';

  statusCode = 404;

  constructor() {
    super();

    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeError() {
    return [{ message: this.reason }];
  }
}

export { NotFoundError };

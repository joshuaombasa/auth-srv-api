import { CustomError } from "./custom-error";

class DatabaseConnectionError extends CustomError {
  reason = 'Error saving to the database';

  statusCode = 500;

  constructor() {
    super();

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeError() {
    return [{ message: this.reason }];
  }
}

export { DatabaseConnectionError };

import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log(error);

  if (error instanceof CustomError) {
    return response.status(error.statusCode).json({errors: error.serializeError()});
  }

  
  next(error);
};

export { errorHandler };

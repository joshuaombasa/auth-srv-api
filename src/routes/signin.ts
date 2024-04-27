import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';

const signInRouter = express.Router();

signInRouter.post(
  '/api/users/signin',
  (request: Request, response: Response) => {
    response.json({});
  }
);

export { signInRouter };

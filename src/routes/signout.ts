import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';

const signOutRouter = express.Router();

signOutRouter.post(
  '/api/users/signout',
  (request: Request, response: Response) => {
    response.json({});
  }
);

export { signOutRouter };

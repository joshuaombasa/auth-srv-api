import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';

const currentUserRouter = express.Router();

currentUserRouter.post(
  '/api/users/currentuser',
  (request: Request, response: Response) => {
    response.json({});
  }
);

export { currentUserRouter };

import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';

const signupRouter = express.Router();

signupRouter.post(
  '/api/user/signup',
  [
    body('email').isEmail().withMessage('Not a valid e-mail address'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage(
        'Password should have a minimum length of 4 and a maximum length of 20'
      ),
  ],
  (request: Request, response: Response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }
    const { email, password } = request.body;

    throw new DatabaseConnectionError();
  }
);

export { signupRouter };

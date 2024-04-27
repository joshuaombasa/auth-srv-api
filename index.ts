import express from 'express';
import 'express-async-errors'
import { errorHandler } from './src/middlewares/error-handler';

const PORT = 4000;
const app = express();

app.use(express.json());

import { signupRouter } from './src/routes/signup';
import { signInRouter } from './src/routes/signin';
import { signOutRouter } from './src/routes/signout';
import { currentUserRouter } from './src/routes/current-user';
import { NotFoundError } from './src/errors/not-found-error';

app.use(signupRouter);
app.use(signInRouter)
app.use(signOutRouter)
app.use(currentUserRouter)

app.all('*', () => {
  console.log('something is wrong')
  throw new NotFoundError()
})

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

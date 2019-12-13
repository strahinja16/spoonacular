import App from './app';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

require('dotenv').config();

import { createModels } from '../db/models';
createModels();

import RecipesRouter from './routes/recipes';
import UsersRouter from './routes/users';
import AuthRouter from './routes/auth';

const app = new App({
  port: 5000,
  routes: [
    RecipesRouter,
    UsersRouter,
    AuthRouter,
  ],
  middlewares: [
    cors(),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
  ]
});

app.listen();

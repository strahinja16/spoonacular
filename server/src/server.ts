import App from './app';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

require('dotenv').config();

import RecipesRouter from './routes/recipes';

const app = new App({
  port: 5000,
  routes: [
    RecipesRouter,
  ],
  middlewares: [
    cors(),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
  ]
});

app.listen();

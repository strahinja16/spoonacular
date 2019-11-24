import App from './app'

import * as bodyParser from 'body-parser'

import RedisRouter from './routes/redis';

const app = new App({
  port: 5000,
  routes: [
    RedisRouter,
  ],
  middlewares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
  ]
});

app.listen();

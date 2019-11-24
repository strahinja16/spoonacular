import { Router, Request, Response } from 'express';
import redisClient from '../../services/redis';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  redisClient.get('cached-recipes', (err, data) => {
    if (err) {
      return res.status(400).send( { error: err.toString() });
    }

    return res.send({ data: JSON.parse(data) });
  });
});

export default {
  routes: router,
  path: '/redis'
};

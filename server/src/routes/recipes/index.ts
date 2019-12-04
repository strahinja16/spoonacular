import { Router, Request, Response } from 'express';
import redisClient from '../../services/redis';
import fetch from '../../services/fetch';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  redisClient.get('cached-recipes', (err, data) => {
      if (err) {
        return res.status(400).send( { error: err.message });
      }

      const cachedRecipes = JSON.parse(data);
      if (cachedRecipes.recipes) {
        return res.send({ data: cachedRecipes.recipes });
      }

      const query = '?ids=426,987,316,413,521,155';
      fetch('/recipes/informationBulk', query)
        .then(res => res.json())
        .then((recipes) => {
          redisClient.set('cached-recipes', JSON.stringify({ recipes }));
          return res.send({ data: recipes });
        })
        .catch((err) => {
          return res.status(400).send({ message: err.message });
        });
  });
});

export default {
  routes: router,
  path: '/recipes'
};

import { Router, Request, Response } from 'express';
import middleware from '../../middleware';
import { createModels } from '../../../db/models';
const db = createModels();

const router = Router();

router.get('/:id/recipes', middleware('auth'), async (req: Request, res: Response) => {
  const user = await db.User.findById(req.params.id);
  if (!user) return res.status(404).send({ message: 'User not found.'});

  const recipes = await db.Recipe.findAll({
    where: {
      UserId: user.id
    }
  });
  if (!recipes) return res.status(404).send({ message: 'Recipes not found.'});

  return res.send({ data: recipes });
});

router.post('/:id/recipes', middleware('auth'), async (req: Request, res: Response) => {

  const user = await db.User.findById(req.params.id);
  if (!user) return res.status(404).send({ message: 'User not found.'});

  const recipe = await db.Recipe.create({ ...req.body });
  if (!recipe) return res.status(400).send({ message: 'Error creating recipe'});

  await user.addRecipe(recipe);

  return res.send();
});

export default {
  routes: router,
  path: '/users'
};

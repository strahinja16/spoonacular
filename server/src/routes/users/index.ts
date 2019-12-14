import { Router, Request, Response } from 'express';
import middleware from '../../middleware';
import { createModels } from '../../../db/models';
import userRepository from '../../repositories/user';
const db = createModels();

const router = Router();

router.get('/:id/recipes', middleware('auth'), async (req: Request, res: Response) => {
  const user = await db.User.findById(req.params.id);
  if (!user) return res.status(404).send({ message: 'User not found.'});

  const recipes = await userRepository.getRecipes(user);

  if (!recipes) return res.status(404).send({ message: 'Recipes not found.'});

  return res.send({ data: recipes });
});

router.post('/:id/recipes', middleware('auth'), async (req: Request, res: Response) => {

  const user = await db.User.findById(req.params.id);
  if (!user) return res.status(404).send({ message: 'User not found.'});

  const existingRecipe = await db.Recipe.findOne({
    where: {
      externalId: req.body.externalId
    }
  });

  if (existingRecipe) {
    const existingRelationship = await db.UsersRecipes.findOne({
      where: {
        UserId: req.params.id,
        RecipeId: existingRecipe.id
      }
    });

    if (existingRelationship) {
      return res.send({ recipe: existingRecipe });
    }

    const usersRecipes = await db.UsersRecipes.create();
    await usersRecipes.setUser(user);
    await usersRecipes.setRecipe(existingRecipe);

    return res.send({ recipe: existingRecipe });

  } else {
    const recipe = await db.Recipe.create({ ...req.body });
    if (!recipe) return res.status(400).send({ message: 'Error creating recipe'});
    const createdRecipe = await db.Recipe.findById(recipe.id);

    const usersRecipes = await db.UsersRecipes.create();
    await usersRecipes.setUser(user);
    await usersRecipes.setRecipe(createdRecipe);

    return res.send({ recipe });
  }
});

router.delete('/:userId/recipes/:recipeId', middleware('auth'), async (req: Request, res: Response) => {
  const existingRelationship = await db.UsersRecipes.findOne({
    where: {
      UserId: req.params.userId,
      RecipeId: req.params.recipeId
    }
  });

  if (!existingRelationship) return res.status(400).send({ message: 'Bad request'});

  await db.UsersRecipes.destroy({
    where: {
      UserId: req.params.userId,
      RecipeId: req.params.recipeId
    }
  });

  const recipe = await db.Recipe.findById(req.params.recipeId);

  return res.send({ recipe });
});

export default {
  routes: router,
  path: '/users'
};

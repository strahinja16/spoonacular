import { UserInstance } from '../../db/models/user';
import { createModels } from '../../db/models';
const db = createModels();

const getRecipes = async (user: UserInstance) => {
  return db.UsersRecipes.findAll({
    where: {
      UserId: user.id
    },
    include: [{
      model: db.Recipe,
      as: 'Recipe'
    }],
    raw: true,
  }).map((ur:any) => {
    return {
      id: ur['Recipe.id'],
      title: ur['Recipe.title'],
      image: ur['Recipe.image'],
      externalId: ur['Recipe.externalId'],
    }
  });
};

export default {
  getRecipes,
}

import * as Sequelize from 'sequelize';
import { RecipeAttributes, RecipeInstance } from '../../../db/models/recipe';
import { UserAttributes, UserInstance } from '../../../db/models/user';
import { UsersRecipesAttributes, UsersRecipesInstance } from '../../../db/models/users-recipes';

export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  User: Sequelize.Model<UserInstance, UserAttributes>;
  Recipe: Sequelize.Model<RecipeInstance, RecipeAttributes>;
  UsersRecipes: Sequelize.Model<UsersRecipesInstance, UsersRecipesAttributes>;
}

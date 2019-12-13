import * as Sequelize from 'sequelize';
import { RecipeAttributes, RecipeInstance } from '../../../db/models/recipe';
import { UserAttributes, UserInstance } from '../../../db/models/user';

export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  User: Sequelize.Model<UserInstance, UserAttributes>;
  Recipe: Sequelize.Model<RecipeInstance, RecipeAttributes>;
}

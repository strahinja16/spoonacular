import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../../src/types';
import { RecipeAttributes, RecipeInstance } from './recipe';
import { UserAttributes, UserInstance } from './user';

export interface UsersRecipesAttributes {
  id?: string;
  recipe?: RecipeAttributes | RecipeAttributes['id']
  user?: UserAttributes | UserAttributes['id'];
}

export interface UsersRecipesInstance extends Sequelize.Instance<UsersRecipesAttributes>, UsersRecipesAttributes {
  getUser: Sequelize.BelongsToGetAssociationMixin<UserInstance>;
  setUser: Sequelize.BelongsToSetAssociationMixin<UserInstance, UserInstance['id']>;
  setRecipe: Sequelize.BelongsToSetAssociationMixin<RecipeInstance, RecipeInstance['id']>;
}

export const UsersRecipesFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): Sequelize.Model<UsersRecipesInstance, UsersRecipesAttributes> => {
  const attributes: SequelizeAttributes<UsersRecipesAttributes> = {
    id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
  };

  const UsersRecipes = sequelize.define<UsersRecipesInstance, UsersRecipesAttributes>('UsersRecipes', attributes, {
    freezeTableName: true,
    tableName: 'UsersRecipes'
  });

  UsersRecipes.associate = models => {
    UsersRecipes.belongsTo(models.Recipe, { as: 'Recipe', foreignKey: 'RecipeId' });
    UsersRecipes.belongsTo(models.User, { as: 'User', foreignKey: 'UserId' });
  };

  return UsersRecipes;
};

import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../../src/types';
import { UserAttributes, UserInstance } from './user';

export interface RecipeAttributes {
  id?: string;
  externalId: string;
  title: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
  user?: UserAttributes | UserAttributes['id'];
}

export interface RecipeInstance extends Sequelize.Instance<RecipeAttributes>, RecipeAttributes {
}

export const RecipeFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): Sequelize.Model<RecipeInstance, RecipeAttributes> => {
  const attributes: SequelizeAttributes<RecipeAttributes> = {
    id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
    externalId: { type: Sequelize.STRING, allowNull: false },
    title: { type: Sequelize.STRING, allowNull: false },
    image: { type: Sequelize.STRING, allowNull: false },
  };

  const Recipe = sequelize.define<RecipeInstance, RecipeAttributes>('Recipe', attributes, {
    freezeTableName: true,
    tableName: 'Recipes'
  });

  Recipe.associate = models => {
    Recipe.hasMany(models.UsersRecipes);
  };

  return Recipe;
};

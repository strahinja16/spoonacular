import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../../src/types';
import { RecipeAttributes, RecipeInstance } from './recipe';

export interface UserAttributes {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
  recipes?: RecipeAttributes[] | RecipeAttributes['id'][];
}

export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes {
  getRecipes: Sequelize.HasManyGetAssociationsMixin<RecipeInstance>;
  setRecipes: Sequelize.HasManySetAssociationsMixin<RecipeInstance, RecipeInstance['id']>;
  addRecipes: Sequelize.HasManyAddAssociationsMixin<RecipeInstance, RecipeInstance['id']>;
  addRecipe: Sequelize.HasManyAddAssociationMixin<RecipeInstance, RecipeInstance['id']>;
  createRecipe: Sequelize.HasManyCreateAssociationMixin<RecipeAttributes, RecipeInstance>;
  removeRecipe: Sequelize.HasManyRemoveAssociationMixin<RecipeInstance, RecipeInstance['id']>;
  removeRecipes: Sequelize.HasManyRemoveAssociationsMixin<RecipeInstance, RecipeInstance['id']>;
  hasRecipe: Sequelize.HasManyHasAssociationMixin<RecipeInstance, RecipeInstance['id']>;
  hasRecipes: Sequelize.HasManyHasAssociationsMixin<RecipeInstance, RecipeInstance['id']>;
  countRecipes: Sequelize.HasManyCountAssociationsMixin;
}

export const UserFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): Sequelize.Model<UserInstance, UserAttributes> => {
  const attributes: SequelizeAttributes<UserAttributes> = {
    id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
  };

  const User = sequelize.define<UserInstance, UserAttributes>('User', attributes);

  User.associate = models => {
    User.hasMany(models.Recipe);
  };

  return User;
};

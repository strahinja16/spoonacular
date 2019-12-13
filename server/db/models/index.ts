// src/models/index.ts
import Sequelize from 'sequelize';
import { DbInterface } from '../../src/services/sequelize';
import { UserFactory } from './user';
import { RecipeFactory } from './recipe';

const host = process.env.HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DATABASE;

export const createModels = (): DbInterface => {
  const sequelize = new Sequelize(`postgresql://${user}:${password}@${host}/${database}`);

  const db: DbInterface = {
    sequelize,
    Sequelize,
    Recipe: RecipeFactory(sequelize, Sequelize),
    User: UserFactory(sequelize, Sequelize)
  };

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  return db;
};

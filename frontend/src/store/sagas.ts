import { all, fork } from 'redux-saga/effects';
import { watchAuth } from './auth/sagas';
import { watchDetailedRecipe } from './detailedRecipe/sagas';
import { watchFeaturedRecipes } from './featuredRecipes/sagas';
import { watchProfile } from './profile/sagas';
import { watchQueryRecipes } from './queryRecipes/sagas';

const sagas = [
  watchFeaturedRecipes,
  watchDetailedRecipe,
  watchQueryRecipes,
  watchProfile,
  watchAuth,
];

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;

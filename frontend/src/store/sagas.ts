import { all, fork } from 'redux-saga/effects';
import { watchDetailedRecipe } from './detailedRecipe/sagas';
import { watchFeaturedRecipes } from './featuredRecipes/sagas';

const sagas = [watchFeaturedRecipes, watchDetailedRecipe];

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;

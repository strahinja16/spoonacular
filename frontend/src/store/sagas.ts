import { all, fork } from 'redux-saga/effects';
import { watchFeaturedRecipes } from './featuredRecipes/sagas';

const sagas = [watchFeaturedRecipes];

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;

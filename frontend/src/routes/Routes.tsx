import React, { FC } from 'react';
// @ts-ignore
import Loadable from 'react-loadable';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppLayout from '../components/AppLayout/AppLayout';
import Loading from '../components/Loading/Loading';
import Dashboard from '../pages/Dashboard/Dashboard';

const dynamicImport = (loader: any) =>
  Loadable({
    loader,
    loading: () => <Loading />,
  });

const RouteList: FC = () => (
  <Switch>
    <Route
      exact={true}
      path="/recipe/:id"
      component={dynamicImport(() => import('../pages/DetailedRecipe/DetailedRecipe'))}
    />
    <Route
      exact={true}
      path="/featured"
      component={dynamicImport(() => import('../pages/Featured/Featured'))}
    />
    <Route
      exact={true}
      path="/search"
      component={dynamicImport(() => import('../pages/SearchRecipes/SearchRecipes'))}
    />
    <Route
      exact={true}
      path="/queried-recipes"
      component={dynamicImport(() => import('../pages/QueriedRecipes/QueriedRecipes'))}
    />
    <Route exact={true} path="/" component={Dashboard} />
    <Redirect to="/" />
  </Switch>
);

const Routes: FC = () => (
  <AppLayout>
    <RouteList />
  </AppLayout>
);

export default Routes;

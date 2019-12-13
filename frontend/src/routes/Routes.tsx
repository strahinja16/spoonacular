import React, { FC } from 'react';
// @ts-ignore
import Loadable from 'react-loadable';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppLayout from '../components/AppLayout/AppLayout';
import Loading from '../components/Loading/Loading';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import { AppState } from '../store/reducer';

const dynamicImport = (loader: any) =>
  Loadable({
    loader,
    loading: () => <Loading />,
  });

const LoggedInRouteList: FC = () => (
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
    <Route
      exact={true}
      path="/profile"
      component={dynamicImport(() => import('../pages/Profile/Profile'))}
    />
    <Route
      exact={true}
      path="/logout"
      component={dynamicImport(() => import('../pages/Logout/Logout'))}
    />
    <Route exact={true} path="/" component={Dashboard} />
    <Redirect to="/" />
  </Switch>
);

const LoggedOutRouteList: FC = () => (
  <Switch>
    <Route
      exact={true}
      path="/featured"
      component={dynamicImport(() => import('../pages/Featured/Featured'))}
    />
    <Route exact={true} path="/login" component={Login} />
    <Route exact={true} path="/sign-up" component={SignUp} />
    <Route exact={true} path="/" component={Dashboard} />
    <Redirect to="/" />
  </Switch>
);

const Routes: FC = () => {
  const userLoggedIn = !!useSelector((state: AppState) => state.auth.token);

  return <AppLayout>{userLoggedIn ? <LoggedInRouteList /> : <LoggedOutRouteList />}</AppLayout>;
};

export default Routes;

import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppLayout from '../components/AppLayout/AppLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Featured from '../pages/Featured/Featured';
import DetailedRecipe from '../pages/DetailedRecipe/DetailedRecipe';

const RouteList: FC = () => (
  <Switch>
    <Route exact={true} path="/recipe/:id" component={DetailedRecipe} />
    <Route exact={true} path="/featured" component={Featured} />
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

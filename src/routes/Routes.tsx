import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppLayout from '../components/AppLayout/AppLayout';
import Dashboard from '../pages/Dashboard/Dashboard';

const RouteList: FC = () => (
  <Switch>
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

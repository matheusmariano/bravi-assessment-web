import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeScreen from '../Home/';
import NotFoundScreen from '../NotFound/';

export default function Routes() {
  return (
    <Switch>
      <Route
        component={HomeScreen}
        exact
        path="/"
      />
      <Route
        component={NotFoundScreen}
        path="*"
      />
    </Switch>
  );
}

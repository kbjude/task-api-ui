import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './containers/App';

const Routes = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;

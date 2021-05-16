import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './containers/App';
import Items from './containers/ItemsContainer';

const Routes = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/items" exact component={Items} />
        <Route path="/" exact component={App} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;

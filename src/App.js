import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { HeaderPage } from './components/index';
import { Main, Words } from './pages';

export const App = () => {
  return (
    <Route>
      <div className="app">
        <HeaderPage />
        <main>
          <Switch>
            <Route path="/main" component={Main} />
            <Route path="/words" component={Words} />
            <Route exact path="/">
              <Redirect to="/main" />
            </Route>
          </Switch>
        </main>
      </div>
    </Route>
  );
};

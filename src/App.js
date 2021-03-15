import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Header } from './components/index';
import {Main} from './pages/Main/Main';
import {Words} from './pages/Words/Words';

export const App = () => {
  return (
    <Route>
      <div className="app">
        <Header />
        <main>
          <Switch>
            <Route exact path="/main" component={Main} />
            <Route path="/words" component={Words} />
            <Route>
              <Redirect to="/main" />
            </Route>
          </Switch>
        </main>
      </div>
    </Route>
  )
};

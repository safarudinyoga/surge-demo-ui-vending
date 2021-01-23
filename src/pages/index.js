import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'src/components/Home';
import About from 'src/components/About';

const App = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={Home}
    />
    <Route
      exact
      path="/about-us"
      component={About}
    />
  </Switch>
);

export default App;

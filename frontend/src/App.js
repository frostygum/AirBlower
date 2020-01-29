import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// ! import pages
import PageIndex from './pages/index/Index';
import PageCalculator from './pages/calculator/Calculator';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageIndex} />
        <Route path="/calculator" component={PageCalculator} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

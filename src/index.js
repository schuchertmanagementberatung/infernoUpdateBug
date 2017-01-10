import Entry from './Entry';
import Pure from './Pure';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

setTimeout(() => {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="" component={Entry}>
        <Route path="/" component={Pure}/>
      </Route>
    </Router>
    , document.getElementById('inferno')
  );
}, 100);
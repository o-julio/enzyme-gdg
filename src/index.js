import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

import * as serviceWorker from './serviceWorker';

import { Route, Router, browserHistory } from 'react-router';

import Home from './screens/Home';
import React from 'react';
import ReactDOM from 'react-dom';
import User from './screens/User';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/:username" component={User} />
  </Router>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

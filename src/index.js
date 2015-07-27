import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import EntryContainer from './components/EntryContainer';
import NamingForm from './components/NamingForm';

import App from './components/App'

ReactDOM.render(
  (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="entry/:code" component={EntryContainer} />
        <Route path="new-name" component={NamingForm} />
      </Route>
    </Router>
  ),document.getElementById("react")
);

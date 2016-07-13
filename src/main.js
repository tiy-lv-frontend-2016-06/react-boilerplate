import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';

// Layout
import ExampleLayout from 'layout/example';

// UI
import ExampleComponent from 'ui/example';

const Site = (
  <Router history={hashHistory}>
    <Route component={ExampleLayout}>
      <Route path="/" component={ExampleComponent} />
    </Route>
  </Router>
);

render(Site, document.getElementById('app'));
import React from 'react';
import { Switch, Route } from 'react-router';

/**
 * Import all page components here
 */
import App from './containers/App/index';
//  import MainPage from './containers/MainPage';
// import SomePage from './components/SomePage';
// import SomeOtherPage from './components/SomeOtherPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 *
 */
export function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  );
}

export default Routes;

import React from 'react';
import { Switch, Route } from 'react-router';

/**
 * Import all page components here
 */
//import App from './containers/App/index';
import MainPage from './containers/MainPage/index';
import Contacts from './containers/Contacts/index';
// import SomePage from './components/SomePage';
// import SomeOtherPage from './components/SomeOtherPage';
import styled from 'styled-components';
/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 *
 */
const AppWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export function Routes() {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </AppWrapper>
  );
}

export default Routes;

import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from '../containers/App';
import Computers from '../containers/Computers';
export default (
  <Route path='/' component={App}>
  	<Route path ='computers' component={Computers}/>
  </Route>
);

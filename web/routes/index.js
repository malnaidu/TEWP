import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from '../containers/App';
import Computers from '../containers/Computers';
import Software from '../containers/Software';
import Accessories from '../containers/Accessories';
import Mobile from '../containers/Mobile';
import OtherPage from '../containers/OtherPage';
import CartPage from '../containers/CartPage';
import UserPage from '../containers/UserPage';

export default (
  <Route path='/'>
  	<IndexRoute component={App}/>
  	<Route path='app' component={App}/>
  	<Route path='computers' component={Computers}/>
  	<Route path='software' component={Software}/>
  	<Route path='accessories' component={Accessories}/>
  	<Route path='mobile' component={Mobile}/>
  	<Route path='other' component={OtherPage}/>
  	<Route path="cart" component={CartPage}/>
    <Route path="user" component={UserPage}/>

  </Route>
);

import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from '../containers/App';
import Computers from '../containers/Computers';
import Software from '../containers/Software';
import Accessories from '../containers/Accessories';
import Mobile from '../containers/Mobile';
import Wishlist from '../containers/Wishlist';
//import UserPage from '../../containers/UserPage';
//import InCart from '../../containers/InCart';

export default (
  <Route path='/'>
  	<IndexRoute component={App}/>
  	<Route path='app' component={App}/>
  	<Route path='computers' component={Computers}/>
  	<Route path='software' component={Software}/>
  	<Route path='accessories' component={Accessories}/>
  	<Route path='mobile' component={Mobile}/>
  	<Route path='wishlist' component={Wishlist}/>
  </Route>
);

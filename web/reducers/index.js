import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import {tile } from './tile'

	const rootReducer = combineReducers({
  		routing, tile
	});

export default rootReducer

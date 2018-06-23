import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { reducer as chess } from './chess/redux';

const rootReducer = combineReducers({
  chess,
  routing: routerReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';

import league from './league';
import team from './team';
import { stack, drawer } from './navigation';

export default combineReducers({
  league,
  team,
  stack,
  drawer,
});

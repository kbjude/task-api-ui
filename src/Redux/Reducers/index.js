import { combineReducers } from 'redux';
import users from './user';
import { itemReducer } from './item';
import itemDetailReducer from './itemDetails';

const rootReducer = combineReducers({
  users,
  itemReducer,
  item: itemDetailReducer,
});

export default rootReducer;

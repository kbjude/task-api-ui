import { combineReducers } from 'redux';
import users from './user';
import { itemReducer, itemDetailReducer } from './item';
import itemDetail from './itemDetails';

const rootReducer = combineReducers({
  users,
  itemReducer,
  itemDetail,
  item: itemDetailReducer,
});

export default rootReducer;

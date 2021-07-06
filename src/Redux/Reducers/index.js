import { combineReducers } from 'redux';
import users from './user';
import { itemReducer, createItemsReducer } from './item';
import itemDetailReducer from './itemDetails';
import message from './message';
import auth from './auth';

const rootReducer = combineReducers({
  users,
  itemReducer,
  itemDetailReducer,
  auth,
  message,
  createItemsReducer,
});

export default rootReducer;

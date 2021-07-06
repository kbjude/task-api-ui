import { all } from 'redux-saga/effects';
import { watchGetItemDetails } from './itemDetailsSaga';
import { watchCreateUser, watchUsers } from './userSaga';
import { watchSetItems } from './itemSaga';

function* rootSaga() {
  yield all([
    watchUsers(),
    watchCreateUser(),
    watchGetItemDetails(),
    watchSetItems(),
    // watchUpdateItem(),
  ]);
}

export default rootSaga;

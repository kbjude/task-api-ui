import { all } from 'redux-saga/effects';
import { watchSetItemDetails } from './itemDetailsSaga';
import { watchCreateUser, watchUsers } from './userSaga';
import { watchSetItems } from './itemSaga';

function* rootSaga() {
  yield all([
    watchUsers(),
    watchCreateUser(),
    watchSetItemDetails(),
    watchSetItems(),
    // watchUpdateItem(),
  ]);
}

export default rootSaga;

import { all } from 'redux-saga/effects';
import { watchItemdetails, watchCreateItemdetail, watchUpdateItemdetail } from './itemDetailsSaga';
import { watchCreateUser, watchUsers } from './userSaga';
import { watchSetItems } from './itemSaga';

function* rootSaga() {
  yield all([
    watchUsers(),
    watchCreateUser(),
    // watchUpdateUser(),
    watchItemdetails(),
    watchCreateItemdetail(),
    watchUpdateItemdetail(),
    watchSetItems(),
    // watchUpdateItem(),
  ]);
}

export default rootSaga;

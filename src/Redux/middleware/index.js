import { all } from 'redux-saga/effects';
import { watchItemdetails, watchCreateItemdetail, watchUpdateItemdetail } from './itemDetailsSaga';
import { watchCreateUser, watchUsers } from './userSaga';
import { watchItems, watchCreateItem, watchUpdateItem } from './itemSaga';

function* rootSaga() {
  yield all([
    watchUsers(),
    watchCreateUser(),
    // watchUpdateUser(),
    watchItemdetails(),
    watchCreateItemdetail(),
    watchUpdateItemdetail(),
    watchItems(),
    watchCreateItem(),
    watchUpdateItem(),
  ]);
}

export default rootSaga;

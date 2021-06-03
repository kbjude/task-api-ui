import { put, takeLatest, call } from 'redux-saga/effects';
import { SET_ITEMS } from '../actions/constants';
import { getItems } from '../../Api/itemApi';
import { setItems } from '../Reducers/actions22/items';

export function* handleGetItems(action) {
  try {
    const response = yield call(getItems);
    const { data } = response;
    yield put(setItems(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchSetItems() {
  yield takeLatest(SET_ITEMS, handleGetItems);
}

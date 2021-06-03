import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_ITEMS } from '../actions/constants';
import getItems from '../../Api/itemApi';
import { setItems } from '../actions/items';

export function* handleGetItems() {
  try {
    const response = yield call(getItems);
    const { data } = response;
    yield put(setItems(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchSetItems() {
  yield takeLatest(GET_ITEMS, handleGetItems);
}

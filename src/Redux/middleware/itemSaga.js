import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_ITEMS } from '../actions/constants';
import createItems from '../../Api/creatItemApi';
import { createItem } from '../actions/items';

export function* handleGetItems() {
  try {
    const response = yield call(createItems);
    const { data } = response;
    yield put(createItem(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function* handlePostItems() {
  try {
    const response = yield call(getItems);
    const { data } = response;
    yield put(setItems(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function* watchSetItems() {
  yield takeLatest(GET_ITEMS, handleGetItems);
}

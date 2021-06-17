import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_ITEMS, CREATE_ITEMS } from '../actions/constants';
import getItems from '../../Api/itemApi';
import { setItems } from '../actions/items';
import createItems from '../../Api/creatItemApi';
import { createItem } from '../actions/items';

export function* handleGetItems() {
  try {
    const response = yield call(getItems);
    const { data } = response;
    yield put(setItems(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function* handleCreateItems() {
  try {
    const response = yield call(createItem);
    const { data } = response;
    yield put(createItems(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function* watchSetItems() {
  yield takeLatest(GET_ITEMS, handleGetItems);
}

export function* watchCreateItems() {
  yield takeLatest(CREATE_ITEMS, handleGetItems);
}

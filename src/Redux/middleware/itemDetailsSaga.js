import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_ITEMS } from '../actions/constants';
import getItemDetails from '../../Api/itemDetailsApi';
import { setItemDetails } from '../actions/itemdetails';

export function* handleGetItemDetails() {
  try {
    const response = yield call(getItemDetails);
    const { data } = response;
    yield put(setItemDetails(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchSetItemDetails() {
  yield takeLatest(GET_ITEMS, handleGetItemDetails);
}

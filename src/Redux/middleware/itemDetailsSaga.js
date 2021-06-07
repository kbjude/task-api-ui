import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_ITEMDETAILS } from '../actions/constants';
import getItemDetails from '../../Api/itemDetailsApi';
import { setItemDetails } from '../actions/itemdetails';

export function* handleGetItemDetails(action) {
  try {
    const response = yield call(getItemDetails, action.id);
    const { data } = response;
    console.log(data);
    yield put(setItemDetails(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetItemDetails() {
  yield takeLatest(GET_ITEMDETAILS, handleGetItemDetails);
}

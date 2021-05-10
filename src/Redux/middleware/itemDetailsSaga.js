import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_ITEMDETAILS, CREATE_ITEMDETAIL, UPDATE_ITEMDETAIL } from '../actions/constants';
import ItemDetailsAPI from '../../Api';
import {
  fetchItemDetailsSuccess,
  fetchItemDetailsFailure,
  createItemDetailSuccess,
  createItemDetailFailure,
  updateItemDetailSuccess,
  updateItemDetailFailure,
} from '../actions/itemdetails';
import apiErrorHandler from '../../Api/apiErrorHandler';

export function* fetchItemDetailsAsync(action) {
  try {
    const response = yield call(ItemDetailsAPI.fetch, action.searchParams);
    yield put(fetchItemDetailsSuccess(response.data));
  } catch (error) {
    const errorMessage = apiErrorHandler(error);
    yield put(fetchItemDetailsFailure(errorMessage));
  }
}

export function* createItemDetailAsync(action) {
  try {
    const response = yield call(ItemDetailsAPI.createItemDetail, action.itemdetail);
    yield put(createItemDetailSuccess(response.data));
  } catch (error) {
    console.log(error);
    const errorMessage = apiErrorHandler(error);
    yield put(createItemDetailFailure(errorMessage));
  }
}

export function* updateItemDetailAsync(action) {
  try {
    const response = yield call(ItemDetailsAPI.updateItemDetail, action.itemdetail);
    yield put(updateItemDetailSuccess(response.data));
  } catch (error) {
    console.log(error);
    const errorMessage = apiErrorHandler(error);
    yield put(updateItemDetailFailure(errorMessage));
  }
}

export function* watchItemdetails() {
  yield takeLatest(GET_ITEMDETAILS, fetchItemdetailsAsync);
}

export function* watchCreateItemdetail() {
  yield takeLatest(CREATE_ITEMDETAIL, createItemdetailAsync);
}

export function* watchUpdateItemdetail() {
  yield takeLatest(UPDATE_ITEMDETAIL, updateItemDetailAsync);
}

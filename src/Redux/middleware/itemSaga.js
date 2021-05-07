import { browserHistory } from 'react-router';
import { put, takeLatest, call } from "redux-saga/effects";
import { GET_ITEMS, CREATE_ITEM, GET_ITEMDETAILS, UPDATE_ITEM } from "../actions/constants";
import ItemApi from "../../Api";
import {
  fetchItemsSuccess,
  fetchItemsFailure
  
} from "../actions/items";
import apiErrorHandler from "../../Api/apiErrorHandler";

export function* fetchItemsAsync(action) {
  try {
    const response = yield call(ItemAPI.fetch, action.searchParams);
    yield put(fetchItemsSuccess(response.data));
  } catch (error) {
    const errorMessage = apiErrorHandler(error);
    yield put(fetchItemsFailure(errorMessage));
  }
}

export function* createItemAsync(action) {
  try {
    const response = yield call(ItemAPI.createItem, action.item);
    yield put(createItemSuccess(response.data));
  } catch (error) {
    console.log(error);
    const errorMessage = apiErrorHandler(error);
    yield put(createItemFailure(errorMessage));
  }
}

export function* updateItemAsync(action) {
  try {
    const response = yield call(ItemAPI.updateItem, action.item);
    yield put(updateItemSuccess(response.data));
  } catch (error) {
    console.log(error);
    const errorMessage = apiErrorHandler(error);
    yield put(updateJobFailure(errorMessage));
  }
}

export function* watchItems() {
  yield takeLatest(GET_ITEMS, fetchItemsAsync);
}

export function* watchCreateItem() {
  yield takeLatest(CREATE_ITEM, createItemAsync);
}

export function* watchUpdateItem() {
  yield takeLatest(UPDATE_ITEM, updateItemAsync);
}

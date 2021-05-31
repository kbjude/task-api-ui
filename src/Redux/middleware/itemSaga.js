import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_ITEMS, CREATE_ITEM } from '../actions/constants';
import { getItems } from '../../Api/itemApi';

export function* getItems(action) {
  try {
    const response = yield call(getItems);
  } catch (error) {
    console.log(error)
  }
}
import { browserHistory } from 'react-router';
import { put, takeLatest, call } from "redux-saga/effects";
import { GET_USERS, CREATE_USER, UPDATE_USER } from "../actions/constants";
import UserApi from "../../Api";
import {
  fetchUsersSuccess,
  fetchUsersFailure
  
} from "../actions/item";
import apiErrorHandler from "../../Api/apiErrorHandler";

export function* fetchUsersAsync(action) {
  try {
    const response = yield call(UsersAPI.fetch, action.searchParams);
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    const errorMessage = apiErrorHandler(error);
    yield put(fetchUsersFailure(errorMessage));
  }
}

export function* createUserAsync(action) {
  try {
    const response = yield call(UserAPI.createUser, action.user);
    yield put(createUserSuccess(response.data));
  } catch (error) {
    console.log(error);
    const errorMessage = apiErrorHandler(error);
    yield put(createUserFailure(errorMessage));
  }
}

export function* updateUserAsync(action) {
  try {
    const response = yield call(UserAPI.updateUser, action.user);
    yield put(updateUserSuccess(response.data));
  } catch (error) {
    console.log(error);
    const errorMessage = apiErrorHandler(error);
    yield put(updateUserFailure(errorMessage));
  }
}

export function* watchUsers() {
  yield takeLatest(GET_USERS, fetchUsersAsync);
}

export function* watchCreateUser() {
  yield takeLatest(CREATE_USER, createUserAsync);
}

export function* watchUpdateUser() {
  yield takeLatest(UPDATE_USER, updateUserAsync);
}

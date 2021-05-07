import { browserHistory } from 'react-router';
import { put, takeLatest, call } from "redux-saga/effects";
import { GET_ITEMS, CREATE_ITEM, GET_ITEMDETAILS, UPDATE_ITEM } from "../actions/constants";
import ItemApi from "../../Api";
import {
  fetchItemsSuccess,
  fetchItemsFailure
  
} from "../actions/items";
import apiErrorHandler from "../../services/apiErrorHandler";

export function* fetchJobsAsync(action) {
  try {
    const response = yield call(JobAPI.fetch, action.searchParams);
    yield put(fetchJobsSuccess(response.data));
  } catch (error) {
    const errorMessage = apiErrorHandler(error);
    yield put(fetchJobsFailure(errorMessage));
  }
}

export function* fetchJobDetailsAsync(action) {
  try {
    const response = yield call(JobAPI.fetchJob, action.jobId);
    yield put(fetchJobDetailsSuccess(response.data));
  } catch (error) {
    console.log(error);
    const errorMessage = apiErrorHandler(error);
    yield put(fetchJobDetailsFailure(errorMessage));
  }
}

export function* createJobAsync(action) {
  try {
    const response = yield call(JobAPI.createJob, action.job);
    yield put(createJobSuccess(response.data));
  } catch (error) {
    console.log(error);
    const errorMessage = apiErrorHandler(error);
    yield put(createJobFailure(errorMessage));
  }
}

export function* updateJobAsync(action) {
  try {
    const response = yield call(JobAPI.editJob, action.job);
    yield put(updateJobSuccess(response.data));
  } catch (error) {
    console.log(error);
    const errorMessage = apiErrorHandler(error);
    yield put(updateJobFailure(errorMessage));
  }
}

export function* watchJobs() {
  yield takeLatest(GET_JOBS, fetchJobsAsync);
}

export function* watchJobDetails() {
  yield takeLatest(GET_JOBS_DETAILS, fetchJobDetailsAsync);
}

export function* watchCreateJob() {
  yield takeLatest(CREATE_JOB, createJobAsync);
}

export function* watchUpdateJob() {
  yield takeLatest(UPDATE_JOB, updateJobAsync);
}

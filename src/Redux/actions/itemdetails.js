import * as types from './constants';

export function fetchItemDetails(id) {
  console.log('Doing the test');
  return {
    type: types.GET_ITEMDETAILS,
    id,
  };
}

export function validationError(error) {
  return { type: types.ERROR, error };
}

export const fetchItemDetailsSuccess = (itemdetail) => ({
  type: types.GET_ITEMDETAILS_SUCCESS,
  payload: itemdetail,
});

export const fetchItemDetailsFailure = (error) => ({
  type: types.GET_ITEMDETAILS_ERROR,
  error,
});

export const selectedDetailAction = (itemdetail) => ({
  type: types.SELECTED_ITEMDETAIL,
  payload: itemdetail,
});

export const setItemDetails = (itemdetail) => ({
  type: types.SET_ITEMDETAILS,
  payload: itemdetail,
});

export const setItemDetailsSuccess = (response) => ({
  type: types.SET_ITEMDETAILS_SUCCESS,
  items: response,
});

export const setItemDetailsFailure = (error) => ({
  type: types.SET_ITEMDETAILS_ERROR,
  error,
});

export function createItemDetails(itemdetail) {
  return { type: types.CREATE_ITEMDETAIL, itemdetail };
}

export const createItemDetailSuccess = (response) => ({
  type: types.CREATE_ITEMDETAIL_SUCCESS,
  response,
});

export const createItemDetailFailure = (error) => ({
  type: types.CREATE_ITEMDETAIL_ERROR,
  error,
});

export function updateItemDetail(itemdetail) {
  return { type: types.UPDATE_ITEMDETAIL, itemdetail };
}

export const updateItemDetailSuccess = (response) => ({
  type: types.UPDATE_ITEMDETAIL_SUCCESS,
  response,
});

export const updateItemDetailFailure = (error) => ({
  type: types.UPDATE_ITEMDETAIL_ERROR,
  error,
});

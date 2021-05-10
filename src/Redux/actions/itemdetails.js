import * as types from './constants';

export function fetchItemDetails() {
  return { type: types.GET_ITEMS };
}

export function validationError(error) {
  return { type: types.ERROR, error };
}

export const fetchItemDetailsSuccess = (response) => ({
  type: types.GET_ITEMDETAILS_SUCCESS,
  items: response,
});

export const fetchItemDetailsFailure = (error) => ({
  type: types.GET_ITEMDETAILS_ERROR,
  error,
});

export function createItemDetail(itemdetail) {
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

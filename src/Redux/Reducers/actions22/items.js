import * as types from './constants';

export function fetchItems() {
  return { type: types.GET_ITEMS };
}

export function validationError(error) {
  return { type: types.ERROR, error };
}

export const fetchItemsSuccess = (response) => ({
  type: types.GET_ITEMS_SUCCESS,
  items: response,
});

export const fetchItemsFailure = (error) => ({
  type: types.GET_ITEMS_ERROR,
  error,
});

export const setItems = (item) => ({ type: types.SET_ITEMS, item });
export const setItemSuccess = (response) => ({
  type: types.SET_ITEMS_SUCCESS,
  items: response,
});

export const setItemsFailure = (error) => ({
  type: types.SET_ITEMS_ERROR,
  error,
});

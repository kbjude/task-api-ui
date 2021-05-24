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

export function createItem(item) {
  return { type: types.CREATE_ITEM, item };
}

export const createItemSuccess = (response) => ({
  type: types.CREATE_ITEM_SUCCESS,
  response,
});

export const createItemFailure = (error) => ({
  type: types.CREATE_ITEMS_ERROR,
  error,
});

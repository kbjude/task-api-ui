import * as types from './constants';

export function fetchItems(response) {
  return {
    type: types.GET_ITEMS,
    payload: response,
  };
}

// export const selectedDetailAction = (item) => ({
//   type: types.SELECTED_ITEM,
//   payload: item,
// });

export const setItems = (item) => ({
  type: types.SET_ITEMS,
  payload: item,
});

export const setItemsSuccess = (response) => ({
  type: types.SET_ITEMS_SUCCESS,
  items: response,
});

export const setItemsFailure = (error) => ({
  type: types.SET_ITEMS_ERROR,
  error,
});

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

export function createItem(items) {
  return { type: types.CREATE_ITEM, items };
}

export const createItemSuccess = (response) => ({
  type: types.CREATE_ITEM_SUCCESS,
  response,
});

export const createItemFailure = (error) => ({
  type: types.CREATE_ITEM_ERROR,
  error,
});

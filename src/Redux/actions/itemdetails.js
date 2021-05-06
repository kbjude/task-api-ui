import * as types from "./constants";

export function fetchItemDetails() {
    return { type: types.GET_ITEMS };
  }
  
  export function validationError(error) {
    return { type: types.ERROR, error };
  }
  
  export const fetchItemDetailsSuccess = response => ({
    type: types.GET_ITEMDETAILS_SUCCESS,
    items: response
  });
  
  export const fetchItemDetailsFailure = error => ({
    type: types.GET_ITEMDETAILS_ERROR,
    error
  });
  
  export function createItemDetails(itemdetails) {
    return { type: types.CREATE_ITEMDETAILS, itemdetails };
  }
  
  export const createItemDetailsSuccess = response => ({
    type: types.CREATE_ITEMDETAILS_SUCCESS,
    response: response
  });
  
  export const createItemDetailsFailure = error => ({
    type: types.CREATE_ITEMDETAILS_ERROR,
    error
  });
  
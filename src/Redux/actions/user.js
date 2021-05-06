import * as types from "./constants";

export function fetchUsers() {
    return { type: types.GET_USERS };
  }
  
  export function validationError(error) {
    return { type: types.ERROR, error };
  }
  
  export const fetchUsersSuccess = response => ({
    type: types.GET_USERS_SUCCESS,
    items: response
  });
  
  export const fetchUsersFailure = error => ({
    type: types.GET_USERS_ERROR,
    error
  });
  
  export function createUser(user) {
    return { type: types.CREATE_USER, user };
  }
  
  export const createItemDetailSuccess = response => ({
    type: types.CREATE_USER_SUCCESS,
    response: response
  });
  
  export const createUserFailure = error => ({
    type: types.CREATE_USER_ERROR,
    error
  });
  
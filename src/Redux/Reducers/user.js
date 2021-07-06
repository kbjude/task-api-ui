import * as types from '../actions/constants';

const initialState = {
  isLoading: true,
  error: '',
  name: '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USERS:
      return { ...state, isLoading: true };
    case types.GET_USERS_ERROR:
      return { ...state, error: action.error, isLoading: false };
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        isLoading: false,
      };
    case types.CREATE_USER:
      return { ...state, isLoading: true };
    case types.CREATE_USERS_ERROR:
      return { ...state, error: action.error, isLoading: false };
    case types.CREATE_USERS_SUCCESS:
      return {
        ...state,
        response: action.response,
        isLoading: false,
        showModal: false,
        error: '',
      };
    default:
      return state;
  }
}

import * as types from '../actions/actionTypes';

const initialState = {
  isLoading: true,
  error: '',
  hoursspent: '',
  minutes: '',
  description: '',
  item_id: '',
};

export default function itemDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ITEMDETAILS:
      return { ...state, isLoading: true };
    case types.GET_ITEMDETAILS_ERROR:
      return { ...state, error: action.error, isLoading: false };
    case types.GET_ITEMDETAILS_SUCCESS:
      return {
        ...state,
        itemdetails: action.itemdetails,
        isLoading: false,
      };
    case types.CREATE_ITEMDETAIL:
      return { ...state, isLoading: true };
    case types.CREATE_ITEMDETAILS_ERROR:
      return { ...state, error: action.error, isLoading: false };
    case types.CREATE_ITEMDETAILS_SUCCESS:
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

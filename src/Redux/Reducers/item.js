import * as types from '../actions/constants';

const initialState = {
  isLoading: true,
  error: '',
  name: '',
  description: '',
  created_at: '',
  updated_at: '',
};

export const itemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_ITEMS:
      return { ...state, items: payload };
    default:
      return state;
  }
};

export const itemDetailReducer1 = (state = {}, { type, payload }) => {
  switch (type) {
    case types.SELECTED_ITEM:
      return { ...state, ...payload };
    default:
      return state;
  }
};

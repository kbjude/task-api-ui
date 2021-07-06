import * as types from '../actions/constants';

const initialState = {
  isLoading: true,
  error: '',
  id: '',
  name: '',
  description: '',
  created_at: '',
  updated_at: '',
};

const itemDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_ITEMDETAILS:
      console.log(state.items);
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default itemDetailReducer;

import * as types from '../actions/constants';

const initialState = {
  isLoading: true,
  error: '',
  name: 'Fernando',
  description: '',
  created_at: '',
  updated_at: '',
};

// export default function itemReducer(state = initialState, action) {
//   switch (action.type) {
//     case types.GET_ITEMS:
//       return { ...state, isLoading: true };
//     case types.GET_ITEMS_ERROR:
//       return { ...state, error: action.error, isLoading: false };
//     case types.GET_ITEMS_SUCCESS:
//       return {
//         ...state,
//         items: action.items,
//         isLoading: false,
//       };
//     case types.CREATE_ITEM:
//       return { ...state, isLoading: true };
//     case types.CREATE_ITEMS_ERROR:
//       return { ...state, error: action.error, isLoading: false };
//     case types.CREATE_ITEM_SUCCESS:
//       return {
//         ...state,
//         response: action.response,
//         isLoading: false,
//         showModal: false,
//         error: '',
//       };
//     default:
//       return state;
//   }
// }

const itemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_ITEMS:
      return { ...state, items: payload };
    default:
      return state;
  }
};
export default itemReducer;

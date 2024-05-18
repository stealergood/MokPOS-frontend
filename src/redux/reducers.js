import { combineReducers } from 'redux';
import { LOGIN, SIGNUP, PLACE_ORDER } from './actions';

const initialState = {
  user: null,
  orders: []
};

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.payload };
    case SIGNUP:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const orderReducer = (state = initialState.orders, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  orders: orderReducer
});

export default rootReducer;

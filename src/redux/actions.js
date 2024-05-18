export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const PLACE_ORDER = 'PLACE_ORDER';

export const login = (email, password) => ({
  type: LOGIN,
  payload: { email, password }
});

export const signUp = (storeName, email, phoneNumber, password) => ({
  type: SIGNUP,
  payload: { storeName, email, phoneNumber, password }
});

export const placeOrder = (orderDetails) => ({
  type: PLACE_ORDER,
  payload: orderDetails
});
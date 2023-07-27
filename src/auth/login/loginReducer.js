import { createStore } from 'redux';

const initialState = {
  isLoggedIn: false,
  username: '',
  password: '',
  error: '',
};
// Reducer
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isLoggedIn: true, error: '' };
    case 'LOGIN_FAILURE':
      return { ...state, error: 'Invalid username or password' };
    case 'LOGOUT':
      return { ...initialState };
    case 'UPDATE_USERNAME':
      return { ...state, username: action.payload };
    case 'UPDATE_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

//Tạo Store

export default loginReducer;
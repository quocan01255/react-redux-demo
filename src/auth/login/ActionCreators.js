export const loginSuccess = () => ({
    type: 'LOGIN_SUCCESS',
  });
  
  export const loginFailure = () => ({
    type: 'LOGIN_FAILURE',
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  
  export const updateUsername = (username) => ({
    type: 'UPDATE_USERNAME',
    payload: username,
  });
  
  export const updatePassword = (password) => ({
    type: 'UPDATE_PASSWORD',
    payload: password,
  });
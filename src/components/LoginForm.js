import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure, updateUsername, updatePassword } from '../auth/login/ActionCreators.js';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { username, password, error } = useSelector((state) => state.loginReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'ad' && password === 'ad123') {
      dispatch(loginSuccess());
    } else {
      dispatch(loginFailure());
    }
  };

  const handleUsernameChange = (e) => {
    dispatch(updateUsername(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(updatePassword(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <div className="login">
                <div className="login__field">

                  <label>Username: </label>
                  <input
                    className="login__input" placeholder="User name"
                    type="text" id="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                  <label>Password: </label>
                  <input
                    className="login__input" placeholder="Password"
                    type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                  <button className="login__submit"
                    type="submit">Login</button>
                </div>
                {error && <p className='error'>{error}</p>}
                
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>		
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
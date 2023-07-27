import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import './assets/css/Login.css'

const App = () => {
  const isLoggedIn = useSelector((state) => state.loginReducer.isLoggedIn);

  return (
    <div>
      {isLoggedIn ? <HomePage /> : <LoginForm />}
    </div>
  );
};

export default App;
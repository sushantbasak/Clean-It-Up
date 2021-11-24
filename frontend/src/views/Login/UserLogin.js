import React from 'react';
import './UserLogin.css';

import LoginForm from '../../components/Auth/LoginForm';
import Navbar from '../../components/Navbar/Navbar';

const UserLogin = (props) => {
  return (
    <>
      <Navbar />
      <LoginForm title="User Login" to="http://localhost:8001/api/v1/user/login" setToken={props.setToken} />
    </>
  );
};

export default UserLogin;

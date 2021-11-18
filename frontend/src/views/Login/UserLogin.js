import React from 'react';
import './UserLogin.css';

import LoginForm from '../../components/Auth/LoginForm';
import Navbar from '../../components/Navbar/Navbar';

const UserLogin = () => {
  return (
    <>
      <Navbar />
      <LoginForm />
    </>
  );
};

export default UserLogin;

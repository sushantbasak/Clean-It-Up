import React from 'react';
import './AdminLogin.css';

import LoginForm from '../../components/Auth/LoginForm';
import Navbar from '../../components/Navbar/Navbar';

const AdminLogin = () => {
  return (
    <>
      <Navbar />
      <LoginForm title="AdminLogin" to="#" />
    </>
  );
};

export default AdminLogin;

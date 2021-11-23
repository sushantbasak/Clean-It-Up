import React from 'react';
import './UserRegister.css';

import RegisterForm from '../../components/Auth/RegisterForm';
import Navbar from '../../components/Navbar/Navbar';

const UserRegister = () => {
  return (
    <>
      <Navbar />
      <RegisterForm role="0" title="User Registration" to="http://localhost:8001/api/v1/user/register" />
    </>
  );
};

export default UserRegister;

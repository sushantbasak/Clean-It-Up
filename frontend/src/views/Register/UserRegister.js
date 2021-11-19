import React from 'react';
import './UserRegister.css';

import RegisterForm from '../../components/Auth/RegisterForm';
import Navbar from '../../components/Navbar/Navbar';

const UserRegister = () => {
  return (
    <>
      <Navbar />
      <RegisterForm title="User Registration" />
    </>
  );
};

export default UserRegister;

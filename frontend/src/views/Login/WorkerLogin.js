import React from 'react';
import './WorkerLogin.css';

import LoginForm from '../../components/Auth/LoginForm';
import Navbar from '../../components/Navbar/Navbar';

const WorkerLogin = () => {
  return (
    <>
      <Navbar />
      <LoginForm title="Worker Login" to="#" />
    </>
  );
};

export default WorkerLogin;

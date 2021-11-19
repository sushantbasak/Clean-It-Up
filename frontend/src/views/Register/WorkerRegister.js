import React from 'react';
import './WorkerRegister.css';

import RegisterForm from '../../components/Auth/RegisterForm';
import Navbar from '../../components/Navbar/Navbar';

const WorkerRegister = () => {
  return (
    <>
      <Navbar />
      <RegisterForm title="Worker Registration" to="#" />
    </>
  );
};

export default WorkerRegister;

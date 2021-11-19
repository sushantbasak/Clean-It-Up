import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './views/Home/Home';
import About from './views/About/About';
import UserDashboard from './views/UserDashboard/UserDashboard';
import WorkerDashboard from './views/WorkerDashboard/WorkerDashboard';
import AdminDashboard from './views/AdminDashboard/AdminDashboard';
import UserLogin from './views/Login/UserLogin';
import UserRegister from './views/Register/UserRegister';
import WorkerLogin from './views/Login/WorkerLogin';
import WorkerRegister from './views/Register/WorkerRegister';
import AdminLogin from './views/Login/AdminLogin';
import EditProfile from './views/Profile/EditProfile';

const App = () => {
  const user = {
    username: 'User 1',
    address: 'New Delhi',
    email: 'user@mail.com',
    password: '@#$$%#$^@@',
  };

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/UserDashboard" element={<UserDashboard />} />
        <Route exact path="/WorkerDashboard" element={<WorkerDashboard />} />
        <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        <Route exact path="/UserLogin" element={<UserLogin />} />
        <Route exact path="/UserRegister" element={<UserRegister />} />
        <Route exact path="/WorkerLogin" element={<WorkerLogin />} />
        <Route exact path="/WorkerRegister" element={<WorkerRegister />} />
        <Route exact path="/AdminLogin" element={<AdminLogin />} />
        <Route exact path="/EditProfile" element={<EditProfile user={user} />} />
      </Routes>
    </div>
  );
};

export default App;

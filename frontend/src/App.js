import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Home from './views/Home/Home';
import UserDashboard from './views/UserDashboard/UserDashboard';
import WorkerDashboard from './views/WorkerDashboard/WorkerDashboard';
import AdminDashboard from './views/AdminDashboard/AdminDashboard';
import UserLogin from './views/Login/UserLogin';
import UserRegister from './views/Register/UserRegister';
import WorkerLogin from './views/Login/WorkerLogin';
import WorkerRegister from './views/Register/WorkerRegister';
import AdminLogin from './views/Login/AdminLogin';
import Profile from './views/Profile/Profile';
import EditProfile from './views/Profile/EditProfile';

const App = () => {
  const user = {
    username: 'User 1',
    address: 'New Delhi',
    email: 'user@mail.com',
    password: '@#$$%#$^@@',
  };

  const [token, setToken] = useState('');

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/UserDashboard" element={<UserDashboard />} />
        <Route exact path="/WorkerDashboard" element={<WorkerDashboard />} />
        <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        <Route exact path="/UserLogin" element={<UserLogin setToken={setToken} />} />
        <Route exact path="/UserRegister" element={<UserRegister />} />
        <Route exact path="/WorkerLogin" element={<WorkerLogin />} />
        <Route exact path="/WorkerRegister" element={<WorkerRegister />} />
        <Route exact path="/AdminLogin" element={<AdminLogin />} />
        <Route exact path="/Profile" element={<Profile user={user} token={token} />} />
        <Route exact path="/EditProfile" element={<EditProfile user={user} />} />
      </Routes>
    </div>
  );
};

export default App;

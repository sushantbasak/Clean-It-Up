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

const App = () => {
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
      </Routes>
    </div>
  );
};

export default App;

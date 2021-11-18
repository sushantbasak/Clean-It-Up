import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './views/Home/Home';
import About from './views/About/About';
import UserDashboard from './views/UserDashboard/UserDashboard';
import WorkerDashboard from './views/WorkerDashboard/WorkerDashboard';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/UserDashboard" element={<UserDashboard />} />
        <Route exact path="/WorkerDashboard" element={<WorkerDashboard />} />
      </Routes>
    </div>
  );
};

export default App;

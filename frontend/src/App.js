import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './views/Home/Home';
import About from './views/About/About';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;

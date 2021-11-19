import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <h1>Home Page</h1>
      <p>This is the home Page</p>
      <div className="main">
        <div className="block">
          <Link to="/UserDashboard">User Dashboard</Link>
          <br />
          <Link to="/UserLogin">User Login</Link>
          <br />
          <Link to="/UserRegister">User Register</Link>
          <br />
        </div>
        <div className="block">
          <Link to="/WorkerDashboard">Worker Dashboard</Link>
          <br />
          <Link to="/WorkerLogin">Worker Login</Link>
          <br />
          <Link to="/WorkerRegister">Worker Register</Link>
          <br />
        </div>
        <div className="block">
          <Link to="/AdminDashboard">Admin Dashboard</Link>
          <br />
          <Link to="/AdminLogin">Admin Login</Link>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;

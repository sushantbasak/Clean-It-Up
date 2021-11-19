import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="main">
        <div className="block">
          <h2 className="block-heading">User</h2>
          <img src="user.png" alt="img" className="image-dash" />
          <div className="links">
            <Link to="/UserLogin">User Login</Link>
            <br />
            <Link to="/UserRegister">User Register</Link>
            <br />
          </div>
        </div>
        <div className="block">
          <h2 className="block-heading">Worker</h2>
          <img src="user.png" alt="img" className="image-dash" />
          <div className="links">
            <Link to="/WorkerLogin">Worker Login</Link>
            <br />
            <Link to="/WorkerRegister">Worker Register</Link>
            <br />
          </div>
        </div>
        <div className="block">
          <h2 className="block-heading">Admin</h2>
          <img src="user.png" alt="img" className="image-dash" />
          <div className="admin-links">
            <Link to="/AdminLogin">Admin Login</Link>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

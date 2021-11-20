import React from 'react';
import './Home.css';

import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="main">
        <div className="block user-block">
          <h2 className="block-heading">User</h2>
          <img src="user.png" alt="img" className="image-dash" />
          <div className="links">
            <Link to="/UserLogin">
              <button className="login-btn">User Login</button>
            </Link>
            <br />
            <Link to="/UserRegister">
              <button className="register-btn">User Register</button>
            </Link>
            <br />
          </div>
        </div>
        <div className="block worker-block">
          <h2 className="block-heading">Worker</h2>
          <img src="worker.png" alt="img" className="image-dash" />
          <div className="links">
            <Link to="/WorkerLogin">
              <button>Worker Login</button>
            </Link>
            <br />
            <Link to="/WorkerRegister">
              <button>Worker Register</button>
            </Link>
            <br />
          </div>
        </div>
        <div className="block admin-block">
          <h2 className="block-heading">Admin</h2>
          <img src="admin.png" alt="img" className="image-dash" />
          <div className="admin-links">
            <Link to="/AdminLogin">
              <button>Admin Login</button>
            </Link>
            <br />
          </div>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Home;

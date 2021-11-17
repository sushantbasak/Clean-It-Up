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
      <Link to="/UserDashboard">User Dashboard</Link>
      <br />
      <Link to="/WorkerDashboard">Worker Dashboard</Link>
      <br />
      <Link to="/AdminDashboard">Admin Dashboard</Link>
    </div>
  );
};

export default Home;

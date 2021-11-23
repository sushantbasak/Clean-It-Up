import React, { useEffect } from 'react';
import './Profile.css';

import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profile = (props) => {
  useEffect(() => {
    console.log('hello');
    axios
      .get('http://localhost:8001/api/v1/user/profile', {
        headers: {
          Authorization: `Bearer ${props.token}`,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.token]);

  return (
    <div className="profile">
      <Navbar />
      <div className="profile-body">
        <h2 className="profile-heading">Your Profile {props.token}</h2>
        <img src="pp.png" alt="profile" className="pp" />
        <div className="data-line">
          <p>
            <b>Username: </b> {props.user.username}
          </p>
        </div>
        <div className="data-line">
          <p>
            <b>Email: </b> {props.user.email}
          </p>
        </div>
        <div className="data-line">
          <p>
            <b>Address: </b> {props.user.address}
          </p>
        </div>
        <button className="accept">
          <Link to="/EditProfile">Edit Profile</Link>
        </button>
      </div>
    </div>
  );
};

export default Profile;

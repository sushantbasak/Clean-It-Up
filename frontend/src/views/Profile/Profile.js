import React from 'react';
import './Profile.css';

import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  return (
    <div className="profile">
      <Navbar />
      <div className="profile-body">
        <h2 className="profile-heading">Your Profile</h2>
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

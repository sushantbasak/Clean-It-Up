import React from 'react';
import './Profile.css';

import Navbar from '../../components/Navbar/Navbar';

const Profile = (props) => {
  return (
    <div className="profile">
      <Navbar />
      <div className="profile-body">
        <img src="garbage.jpg" alt="profile" />
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
      </div>
    </div>
  );
};

export default Profile;

import React from 'react';
import './EditProfile.css';
import { Link } from 'react-router-dom';

const EditProfile = (props) => {
  return (
    <>
      <div className="login-form">
        <h2 className="heading"> Edit Profile </h2>
        <form method="POST">
          <div className="form-inputs">
            <div className="form-input">
              <label>Username: </label>
              <input type="text" name="username" required value={props.user.username} />
            </div>
            <div className="form-input">
              <label>Address: </label>
              <input type="text" name="address" required value={props.user.address} />
            </div>
          </div>
          <div className="form-submit">
            <button className="back">
              <Link to="/">Back</Link>
            </button>
            <button type="submit" className="submit-btn">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;

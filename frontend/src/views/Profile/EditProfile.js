import React, { useState } from 'react';
import './EditProfile.css';
import { Link } from 'react-router-dom';

const EditProfile = (props) => {
  const [username, setUsername] = useState(props.user.username);
  const [address, setAddress] = useState(props.user.address);

  return (
    <>
      <div className="login-form">
        <h2 className="heading"> Edit Profile </h2>
        <form method="POST">
          <div className="form-inputs">
            <div className="form-input">
              <label>Username: </label>
              <input
                type="text"
                name="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Address: </label>
              <input type="text" name="address" required value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div>
          <div className="form-submit">
            <Link to="/Profile">
              <button className="back">Back</button>
            </Link>

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

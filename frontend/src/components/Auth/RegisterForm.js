import React from 'react';
import './RegisterForm.css';
import { Link } from 'react-router-dom';

const RegisterForm = (props) => {
  return (
    <div className="register-form">
      <h2 className="heading"> {props.title} </h2>
      <form method="POST" action={props.to}>
        <div className="form-inputs">
          <div className="form-input">
            <label>Username: </label>
            <input type="text" name="username" required />
          </div>
          <div className="form-input">
            <label>Email: </label>
            <input type="email" name="email" required />
          </div>
          <div className="form-input">
            <label>Address: </label>
            <input type="address" name="address" required />
          </div>
          <div className="form-input">
            <label>Password: </label>
            <input type="password" name="password" required />
          </div>
        </div>
        <div className="form-submit">
          <Link to="/">
            <button className="back">Back</button>
          </Link>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

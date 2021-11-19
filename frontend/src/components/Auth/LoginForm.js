import React from 'react';
import './LoginForm.css';

const LoginForm = (props) => {
  return (
    <div className="login-form">
      <h2 className="heading"> {props.title} </h2>
      <form method="POST" action={props.to}>
        <div className="form-inputs">
          <div className="form-input">
            <label>Email: </label>
            <input type="email" name="email" required />
          </div>
          <div className="form-input">
            <label>Password: </label>
            <input type="password" name="password" required />
          </div>
        </div>
        <div className="form-submit">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

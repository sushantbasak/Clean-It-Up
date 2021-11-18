import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h2 className="heading">User Login </h2>
      <form>
        <div className="form-inputs">
          <div className="form-input">
            <label>Email: </label>
            <input type="text" name="title" required />
          </div>
          <div className="form-input">
            <label>Password: </label>
            <input type="password" name="address" required />
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

import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      {' '}
      <form>
        <div className="form-inputs">
          <div className="form-input">
            <label>Title: </label>
            <input type="text" name="title" required />
          </div>
          <div className="form-input">
            <label>Address: </label>
            <input type="text" name="address" required />
          </div>
          <div className="form-input">
            <label>Description: </label>
            <textarea rows="5" name="description" required />
          </div>
          <div className="form-input">
            <label>Image:</label>
            <input type="file" id="myFile" name="image" />
          </div>
        </div>
        <div className="form-submit">
          <button type="submit">Post Job</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

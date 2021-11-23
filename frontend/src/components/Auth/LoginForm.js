import React, { useState } from 'react';
import './LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    const path = props.to + '/?email=' + email + '&password=' + password;
    axios.get(path).then((res) => {
      console.log(res);
      if (res.data.success === true) {
        navigate('/Profile');
        props.setToken(res.data.data.token);
      }
    });
  };

  return (
    <div className="login-form">
      <h2 className="heading"> {props.title} </h2>
      <form onSubmit={submitHandler}>
        <div className="form-inputs">
          <div className="form-input">
            <label>Email: </label>
            <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-input">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="form-submit">
          <Link to="/">
            <button className="back">Back</button>
          </Link>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

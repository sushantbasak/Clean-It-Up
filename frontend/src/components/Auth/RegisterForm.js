import React, { useState } from 'react';
import './RegisterForm.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    axios({
      method: 'post',
      url: props.to,
      data: user,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.success === true) {
          navigate('/userLogin');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register-form">
      <h2 className="heading"> {props.title} </h2>
      <form onSubmit={submitHandler}>
        <div className="form-inputs">
          <div className="form-input">
            <label className="register-label">First Name: </label>
            <input
              type="text"
              name="firstName"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label className="register-label">Last Name: </label>
            <input
              type="text"
              name="lastName"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label className="register-label">Email: </label>
            <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          {props.role !== '0' && (
            <div className="form-input">
              <label className="register-label">Address: </label>
              <input
                type="address"
                name="address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          )}
          <div className="form-input">
            <label className="register-label">Password: </label>
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label className="register-label">Confirm Password: </label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
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

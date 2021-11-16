import React from 'react';
import './JobItem.css';

const JobItem = (props) => {
  return (
    <div className="job-item">
      <h6>Cleaning Job 1</h6>
      <img src="logo192.png" alt="garbage" />
      <p>Please clean the garbage</p>
      <p>
        <i>At Chandani Chowk, Delhi</i>
      </p>
      {(props.role === '3' || props.role === '1') && (
        <div className="forms">
          <form class="rating">
            <label>
              <input type="radio" name="stars" value="1" />
              <span class="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="2" />
              <span class="icon">★</span>
              <span class="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="3" />
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="4" />
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="5" />
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
            </label>
          </form>
          <form>
            <button className="delete">Delete</button>
          </form>
        </div>
      )}
      {props.role == '2' && (
        <div className="forms">
          <form>
            <button className="accept">Accept Job</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default JobItem;

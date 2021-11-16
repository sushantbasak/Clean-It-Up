import React from 'react';
import './JobItem.css';

const JobItem = (props) => {
  return (
    <div className="job-item">
      <h6> {props.title} </h6>
      <img src="garbage.jpg" alt="garbage" />
      <p> {props.description} </p>
      <p>
        <i> {props.address} </i>
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
      {props.role === '2' && (
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
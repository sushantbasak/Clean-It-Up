import React, {useState} from 'react';
import './JobItem.css';

const JobItem = (props) => {
  const [status, setStatus] = useState(props.status);
  const btnHandler = (e) => {
    e.preventDefault();
    if(status === 1)
    {
      setStatus(2);
    }
    else if(status === 2)
    {
      setStatus(1);
    }
  }

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
          <form className="rating">
            <label>
              <input type="radio" name="stars" value="1" />
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="2" />
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="3" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="4" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="5" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
          </form>
          <form>
            <button
              className="delete"
              onClick={(e) => {
                e.preventDefault();
                props.deleteHandler(props.id);
              }}
            >
              Delete
            </button>
          </form>
        </div>
      )}
      {props.role === '2' && (
        <div className="forms">
          <form>
            {status===0 && <button className="closed" onClick={(e) => e.preventDefault()}>Job Closed</button>}
            {status===1 && <button className="accept" onClick={btnHandler}>Accept Job</button>}
            {status===2 && <button className="accepted" onClick={btnHandler}>Job Accepted</button>}
          </form>
        </div>
      )}
    </div>
  );
};

export default JobItem;

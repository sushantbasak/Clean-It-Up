import React, { useState } from 'react';
import './NewJob.css';

const NewJob = () => {
  const [open, setOpen] = useState(false);

  const closeHandler = (event) => {
    event.preventDefault();
    setOpen(false);
  };
  const openHandler = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  return (
    <div className="job-form">
      {open && (
        <form>
          <div className="form-inputs">
            <div className="form-control">
              <label>Title: </label>
              <input type="text" name="title" required />
            </div>
            <div className="form-control">
              <label>Address: </label>
              <input type="text" name="address" required />
            </div>
            <div className="form-control">
              <label>Description: </label>
              <textarea rows="5" name="description" required />
            </div>
            <div className="form-control upload">
              <label>Image:</label>
              <input type="file" id="myFile" name="image" />
            </div>
          </div>
          <div className="form-submit">
            <button className="close-btn" onClick={closeHandler}>
              Close
            </button>
            <button>Post Job</button>
          </div>
        </form>
      )}
      {!open && (
        <div className="form-submit">
          <button className="open-btn" onClick={openHandler}>
            Create New Post
          </button>
        </div>
      )}
    </div>
  );
};

export default NewJob;

import React, { useState } from 'react';
import './NewJob.css';

const NewJob = (props) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');

  const closeHandler = (event) => {
    event.preventDefault();
    setOpen(false);
  };
  const openHandler = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const job = {
      id: new Date().toISOString(),
      title: title,
      description: description,
      address: address,
      image: image,
    };

    props.addPost(job);
  };

  return (
    <div className="job-form">
      {open && (
        <form onSubmit={submitHandler}>
          <div className="form-inputs">
            <div className="form-control">
              <label>Title: </label>
              <input type="text" value={title} name="title" required onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-control">
              <label>Address: </label>
              <input type="text" value={address} name="address" required onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="form-control">
              <label>Description: </label>
              <textarea
                rows="5"
                name="description"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-control upload">
              <label>Image:</label>
              <input type="file" id="myFile" name="image" onChange={(e) => setImage(e.target.value)} />
            </div>
          </div>
          <div className="form-submit">
            <button className="close-btn" onClick={closeHandler}>
              Close
            </button>
            <button type="submit">Post Job</button>
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

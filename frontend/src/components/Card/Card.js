import React from 'react';
import './Card.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const InfoCard = () => {
  return (
    <Carousel className="crousel" variant="dark">
      <Carousel.Item interval={3000} className="card-item">
        <img src="garbage.jpg" alt="garbage" />
        <h3>Our Aim</h3>
        <p>Our aim is to make the India the cleanest country in the world.</p>
      </Carousel.Item>
      <Carousel.Item interval={3000} className="card-item">
        <img src="garbage.jpg" alt="garbage" />
        <h3>Our motivation</h3>
        <p>Our motivation is cleanliness will eleminate all diseases.</p>
      </Carousel.Item>
      <Carousel.Item interval={3000} className="card-item">
        <img src="garbage.jpg" alt="garbage" />
        <h3>Our Ethics</h3>
        <p>Our ethics are to complete a registered job in time.</p>
      </Carousel.Item>
    </Carousel>
  );
};

export default InfoCard;

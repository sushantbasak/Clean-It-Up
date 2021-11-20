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
        <p>Our aim is to make the world clean and free of diseases</p>
      </Carousel.Item>
      <Carousel.Item interval={3000} className="card-item">
        <img src="garbage.jpg" alt="garbage" />
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Item>
      <Carousel.Item interval={3000} className="card-item">
        <img src="garbage.jpg" alt="garbage" />
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Item>
    </Carousel>
  );
};

export default InfoCard;

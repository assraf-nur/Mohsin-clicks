import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner3.jpg'
import banner3 from '../../../images/banner5.jpg'

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Travel Photography</h3>
          <p>We Capture the best travel Photo in cheaper rate</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Documentary Photography</h3>
          <p>For any kinds of research and documentary photographs</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Festival Photography</h3>
          <p>
            We care about all kinds of festival events with our massive lense
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "./images/slide1.png";
import img2 from "./images/slide2.png";
import img3 from "./images/slide3.png";

const Slider = () => {
  return (
 <div className="p-10">


      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>Jewellery</h3>
        
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 h-100" src={img2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Luxury </h3>
        
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 h-100" src={img3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Diamons</h3>
        
          </Carousel.Caption>
        </Carousel.Item>  
      </Carousel>
      </div>
  );
};

export default Slider;

import React from "react";
import { Carousel as Car } from "react-bootstrap";
import { sliderItems } from "../../utils/carousel-items";

const Carousel = () => {
  return (
    <Car>
      {sliderItems &&
        sliderItems.map((item) => (
          <Car.Item key={item.id}>
            <img className="d-block w-100" src={item.imgSrc} alt={item.title} />
            <Car.Caption>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Car.Caption>
          </Car.Item>
        ))}
    </Car>
  );
};

export default Carousel;

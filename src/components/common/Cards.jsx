import React from "react";
import Card from "react-bootstrap/Card";
import Button from "./Button";
import { CardItems } from "../../utils/card-items";

const Cards = () => {
  return (
    <div className="row m-5">
      {CardItems &&
        CardItems.map((item) => {
          return (
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src={item.imgSrc} />
                <Card.Body>
                  <Card.Title>{item.cardTitle}</Card.Title>
                  <Card.Text>{item.cardText}</Card.Text>
                  <Button text="Click me" variant="warning" />
                </Card.Body>
              </Card>
            </div>
          );
        })}
      console.log("hello")
    </div>
  );
};

export default Cards;

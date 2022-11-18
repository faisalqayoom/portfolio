import React from "react";
import Card from "react-bootstrap/Card";
import Button from "./Button";
import { CardItems } from "../../utils/card-items";
import "./cards.scss";

const Cards = () => {
  return (
    <div className="row m-5">
      {CardItems &&
        CardItems.map((item, i) => {
          return (
            <div key={i} className="col-3 cards">
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
    </div>
  );
};

export default Cards;

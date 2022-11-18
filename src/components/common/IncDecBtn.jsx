import { useState } from "react";
import Button from "./Button";

const Card = () => {
  const [value, setValue] = useState(0);

  const IncrementHandler = (e) => {
    e.preventDefault();
    setValue((prev) => value + 1);
  };

  const decrementHandler = (e) => {
    e.preventDefault();
    setValue((prev) => value && value - 1);
  };
  return (
    <>
      <Button
        handleClick={IncrementHandler}
        text="Increment"
        varient="warning"
      />
      <h4>{value}</h4>
      <Button
        handleClick={decrementHandler}
        text="Decrement"
        varient="danger"
      />
    </>
  );
};

export default Card;

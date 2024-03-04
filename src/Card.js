import React from "react";
import Card from "react-bootstrap/Card";

const CardComponent = () => {
  return (
    <div className="d-flex">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card 1</Card.Title>
          <Card.Text>This is the content of Card 1.</Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card 2</Card.Title>
          <Card.Text>This is the content of Card 2.</Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card 3</Card.Title>
          <Card.Text>This is the content of Card 3.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;

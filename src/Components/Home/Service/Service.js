import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
  const { id, price, img, title, details } = service;

  return (
    <Card className="border rounded shadow" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Card.Text className=" font-bold text-xl">
          Booking Price: {price}$
        </Card.Text>
        <Button className="w-100 p-2" variant="primary">Check Out for Booking</Button>
      </Card.Body>
    </Card>
  );
};

export default Service;

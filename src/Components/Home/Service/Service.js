import React from "react";
import { Button, Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, price, img, title, details } = service;

  const navigate = useNavigate();

  const navigateToServiceDetail = id =>{
    navigate(`/service/${id}`)
  }

  return (
    <Card className="border rounded shadow" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-justify">
          {details}
        </Card.Text>
        <Card.Text className=" font-bold text-xl">
          Booking Price: {price}$
        </Card.Text>
        <Button onClick={() =>navigateToServiceDetail(id)} className="w-100 p-2" variant="primary">Check Out for Booking</Button>
      </Card.Body>
    </Card>
  );
};

export default Service;

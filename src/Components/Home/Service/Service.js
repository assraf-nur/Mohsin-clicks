import React from "react";
import './Service.css'
import { Card, CardGroup } from "react-bootstrap";
import service1 from "../../../images/service1.jpg";
import service2 from "../../../images/service2.jpg";
import service3 from "../../../images/service3.jpg";

const Service = () => {
  return (
    <div className="text-center mt-4">
      <h2 className="">Services</h2>

      <CardGroup className="gap-10 mt-4">
        <Card className="border rounded shadow">
          <Card.Img variant="top" src={service1} />
          <Card.Body>
            <Card.Title>Portrait Clicking</Card.Title>
            <Card.Text>
              You can hire me as your portrait clicker. Package is bigger than others. You will be satisfied.
            </Card.Text>
            <h2>Booking price: 100$</h2>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="border rounded shadow">
          <Card.Img variant="top" src={service2} />
          <Card.Body>
            <Card.Title>Events Clicking</Card.Title>
            <Card.Text>
              Me and my team believe every moment is important. Our clicking team will capture every single moments you have.
            </Card.Text>
            <h2>Booking price: 269$</h2>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="border rounded shadow">
          <Card.Img variant="top" src={service3} />
          <Card.Body>
            <Card.Title>Weeding Clicking</Card.Title>
            <Card.Text>
              You will marry I will click. Your family will be amazed to know how much I can click in one weeding event.
            </Card.Text>
            <h2>Booking price: 399$</h2>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Service;

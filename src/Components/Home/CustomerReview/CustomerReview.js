import React from "react";
import './CustomerReview.css'
import { Card, CardGroup } from "react-bootstrap";
import user1 from '../../../images/user1.jpg'
import user2 from '../../../images/user2.jpg'
import user3 from '../../../images/user3.jpg'
import user4 from '../../../images/user4.jpg'

const CustomerReview = () => {
  return (
    <div className="mt-4">
        <h3 className="text-center">Customer Review</h3>
      <CardGroup className="gap-3 mt-4">
        <Card className="rounded shadow" style={{ width: "18rem" }}>
          <Card.Img className="user-image" variant="top" src={user1} />
          <Card.Body>
            <Card.Text>⭐⭐⭐⭐⭐</Card.Text>
            <Card.Title>Assraf Nur</Card.Title>
            <Card.Text>
              Best Photographer in the town. If you are searching for a good photographer ! have a look ...
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="rounded shadow border" style={{ width: "18rem" }}>
          <Card.Img className="user-image" variant="top" src={user2} />
          <Card.Body>
          <Card.Text>⭐⭐⭐⭐⭐</Card.Text>
            <Card.Title>Mariya Alam</Card.Title>
            <Card.Text>
              In my weeding mohsin took some best photo ever. I recommend this guy.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="rounded shadow border" style={{ width: "18rem" }}>
          <Card.Img className="user-image" variant="top" src={user3} />
          <Card.Body>
          <Card.Text>⭐⭐⭐⭐⭐</Card.Text>
            <Card.Title>Sohel Mondal</Card.Title>
            <Card.Text>
              I live in Saudi Arab. I went to Bangladesh for a vacation and i met with this guy. He is best photo clicker.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="rounded shadow border" style={{ width: "18rem" }}>
          <Card.Img className="user-image" variant="top" src={user4} />
          <Card.Body>
          <Card.Text>⭐⭐⭐⭐⭐</Card.Text>
            <Card.Title>Nasir Hossain</Card.Title>
            <Card.Text>
              I was looking for a great photographer for my corporate event. Mohsin gave me the best service.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default CustomerReview;

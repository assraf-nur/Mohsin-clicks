import React from "react";
import { Card } from "react-bootstrap";
import blogImg from "../../../images/vs.png";

const Blogs = () => {
  return (
    <div className="container mt-3">
      <Card border="primary" style={{ width: "70rem" }}>
        <Card.Body>
          <Card.Title className="text-center">Authorization VS Authentication</Card.Title>
          <Card.Text className="text-justify">
           <span className="font-bold">Authentication:</span> <br />
            Authentication verify the user. It's work through password, OTP and other info which provided by user.
            Authentication is visible to and partially changeable by the user. It is the first step of a good identity and access management process.
            <br /><hr />
            <span className="font-bold mt-2">Authorization:</span> <br />
            Authorization make sure what user can access.Authorization always takes place after authentication. It works through settings that are implemented and maintained by the organization or admin.
            Authorization isn't visible to or changeable by the user.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card border="primary" style={{ width: "70rem" }}>
        <Card.Body>
          <Card.Title className="text-center">Authorization VS Authentication</Card.Title>
          <Card.Text className="text-justify">
           <span className="font-bold">Why i am using firebase ?</span> <br />
            Here i am using for authentication and authorization purpose. Google firebase gives a ready made system which is easy to use and implement.
            <br /><hr />
            <span className="font-bold mt-2">Authorization:</span> <br />
            Authorization make sure what user can access.Authorization always takes place after authentication. It works through settings that are implemented and maintained by the organization or admin.
            Authorization isn't visible to or changeable by the user.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;

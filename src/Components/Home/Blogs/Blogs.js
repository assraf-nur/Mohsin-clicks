import React from "react";
import { Card } from "react-bootstrap";
import Footer from "../../Footer/Footer";

const Blogs = () => {
  return (
    <div className="container mt-3">
      <Card border="primary" style={{ width: "70rem" }}>
        <Card.Body>
          <Card.Title className="text-center">
            Authorization VS Authentication
          </Card.Title>
          <Card.Text className="text-justify">
            <span className="font-bold">Authentication:</span> <br />
            Authentication verify the user. It's work through password, OTP and
            other info which provided by user. Authentication is visible to and
            partially changeable by the user. It is the first step of a good
            identity and access management process.
            <br />
            <hr />
            <span className="font-bold mt-2">Authorization:</span> <br />
            Authorization make sure what user can access.Authorization always
            takes place after authentication. It works through settings that are
            implemented and maintained by the organization or admin.
            Authorization isn't visible to or changeable by the user.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card border="primary" style={{ width: "70rem" }}>
        <Card.Body>
          <Card.Title className="text-center">Firebase🔥</Card.Title>
          <Card.Text className="text-justify">
            <span className="font-bold">Why i am using firebase ?</span> <br />
            Here i am using for authentication and authorization purpose. Google
            firebase gives a ready made system which is easy to use and
            implement. Fire provides a lots of sign-in method which is free.
            <br />
            <hr />
            <span className="font-bold mt-2">
              {" "}
              What other options we have, to implement authentication?
            </span>{" "}
            <br />
            Firebase have some great features but it has some downside too. Some
            of them are: It has vendor lock-in. Slow queries. Not all its services
            are free to start. It runs entirely on Google. Cloud Only offers NoSQL
            databases. No options for Enterprise support or dedicated servers.
            Doesn't offer GraphQL. APIs as part of the standard setup. It's a
            subdomain from Google so it doesn't work in many countries. It's not
            open source so it lacks flexibility and customization to adapt its
            code.
            <br />
            So we can implement other option like : Back4App, AWS Amplify, Kuzzle, Couchbasem, NativeScript, RxBD, Flutter.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card border="primary" style={{ width: "70rem" }}>
        <Card.Body>
          <Card.Title className="text-center">
            Firebase🔥
          </Card.Title>
          <Card.Text className="text-justify">
            <span className="font-bold"> What other services does firebase provide other than authentication ?</span> <br />
            Firebase other services are: Cloud Firestore, Realtime Database, Remote Config, Firebase Ml, Cloud Functions, Authentication, Cloud Messaging, Hosting, Cloud Storage.
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="position-absolute bottom-00 w-100 start-50 translate-middle-x">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Blogs;

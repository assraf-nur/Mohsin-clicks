import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Registration.css'

const Registration = () => {

    const navigate = useNavigate();

    const navigateLogin = e =>{
        navigate('/login');
    }

    const handleRegister = e =>{
        e.preventDefault();
    }

  return (
    <div className="container w-50 mt-5 rounded border p-5 shadow">
        <h2 className="text-center">Registration</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required/>
          <Form.Text className="text-muted">
            We'll never share your password with anyone else.
          </Form.Text>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p>Already have an account ! <span className="text-danger reg" onClick={navigateLogin}>Login</span></p>
      </Form>
    </div>
  );
};

export default Registration;

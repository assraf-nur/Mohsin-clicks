import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Login.css";
import google from "../../../images/google.png";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  if (user1) {
    navigate(from, { replace: true });
  }

  const navigateRegister = (e) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Email");
    }
    else{
      toast('Please enter your email address')
    }
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className="w-50 mx-auto mt-3 border shadow p-5 rounded"
      >
        <h2 className="text-center">Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {loading && (
          <p className="text-primary font-bold text-center">Loading....😌</p>
        )}
        {error && (
          <p className="text-danger font-bold text-center">User Not Found😥</p>
        )}
        <Button className="px-5 mb-3 mt-3" variant="primary" type="submit">
          Login
        </Button>
        <p>
          New to our site ?{" "}
          <span className="text-danger reg" onClick={navigateRegister}>
            Please Register
          </span>{" "}
        </p>
        <p>
          forget Password !!{" "}
          <span className="text-danger">
            {" "}
            <button onClick={resetPassword}>Reset Password</button>
          </span>
        </p>
        <hr />
        <button
          onClick={() => signInWithGoogle()}
          className="bg-dark p-3 rounded text-white w-100"
        >
          <img
            className="mx-auto"
            style={{ width: "30px" }}
            src={google}
            alt=""
          />
          <span>Google Sign In</span>
        </button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Login;

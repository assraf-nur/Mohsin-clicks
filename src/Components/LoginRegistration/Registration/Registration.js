import React from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate} from "react-router-dom";
import './Registration.css'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import google from '../../../images/google.png'

const Registration = () => {
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth, {useSendEmailVerification: true});

    const [updateProfile, updating, error2] = useUpdateProfile(auth);

    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const navigateLogin = e =>{
        navigate('/login');
    }
    
    const handleRegister = async e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name});
          alert('Updated profile');
    }
    const location = useLocation();

    let from = location?.state?.from?.pathname || "/";


    if(user || user1){
      navigate(from, { replace: true });
    }
    
  return (
    <div className="container w-50 mt-2 rounded border p-5 shadow">
        <h2 className="text-center">Registration</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Name" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required/>
          <Form.Text className="text-muted">
            We'll never share your password with anyone else.
          </Form.Text>
        </Form.Group>
        {
          loading && <p className="text-primary font-bold text-center">Loading....😌</p>
        }
        {
          error && <p className="text-danger font-bold text-center">Email Already in Used 😥</p>
        }
        <Button className="px-5 mb-3 mt-3" variant="primary" type="submit">
          Register
        </Button>
        <p>Already have an account ! <span className="text-danger reg" onClick={navigateLogin}>Login</span></p>
        <hr />
        <button onClick={()=> signInWithGoogle()} className="bg-dark p-3 rounded text-white w-100">
          <img className="mx-auto" style={{width: '30px'}} src={google} alt="" />
          <span>Google Sign In</span>
        </button>
      </Form>
    </div>
  );
};

export default Registration;

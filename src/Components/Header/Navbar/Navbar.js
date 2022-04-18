import { signOut } from "firebase/auth";
import React from "react";
import { Button, Nav } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = () => {
const [user] = useAuthState(auth);

const handleSignOut = () =>{
  signOut(auth);
}
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-slate-300">
        <div className="container-fluid">
          <h4>Mohsin-Clicks 📸</h4>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto font-bold">
             <Nav.Link as={Link} to='/home'>Home</Nav.Link>
             <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
             {
               user?
               <Button onClick={handleSignOut}>Sign Out</Button>
               :
               <Nav.Link as={Link} to='/login'>Login</Nav.Link>
             }
             <Nav.Link as={Link} to='/about'>About</Nav.Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

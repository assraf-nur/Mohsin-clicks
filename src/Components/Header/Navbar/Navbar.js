import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h4>Mohsin-Clicks 📸</h4>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto font-bold">
             <Nav.Link as={Link} to='/home'>Home</Nav.Link>
             <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
             <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css"; // Import custom CSS

const NavbarComponent = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="navbar-custom">
      <Navbar.Brand as={Link} to="/" className="navbar-brand-custom ml-4">
        - ||  Project Dashboard || -
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navbar-nav">
          <Nav.Link as={Link} to="/" className="nav-link-custom">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/projects" className="nav-link-custom">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/projects/add" className="nav-link-custom">
            Add Project
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

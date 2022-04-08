import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import {Link} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <div className="navbar-class">
        <Navbar bg="light" expand="lg">
        <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
          
        
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        </div>
    );
};

export default Header;
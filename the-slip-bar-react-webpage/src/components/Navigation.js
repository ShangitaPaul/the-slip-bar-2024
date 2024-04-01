import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "../styles/Navigation.css";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" bg="light" className="navbar-with-border" expanded={expanded}>
      <Container>
        <Nav.Link as={Link} to="/" className="instagram-icon"><i className="fab fa-instagram"></i></Nav.Link> {/* Instagram icon */}
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img src="/img/thesliplogo1.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title="Locations" id="locations-dropdown" className="custom-dropdown justify-content-center">
              <NavDropdown.Item as={Link} to="/redondo-beach">Redondo Beach</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lomita">Lomita</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Events" id="events-dropdown" className="custom-dropdown justify-content-center">
              <NavDropdown.Item as={Link} to="/redondo-beach#events">Redondo Beach Events</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lomita#events">Lomita Events</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/merch">Merch</Nav.Link>
            <Nav.Link as={Link} to="/jobs">Jobs</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

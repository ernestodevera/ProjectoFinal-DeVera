// Navbar2.jsx
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbar2 = ({ cartQuantity }) => {
  const navLinkStyle = {
    color: 'red',
    textDecoration: 'none',
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ color: 'red' }}>Music Center</Link>
        </Navbar.Brand>

        <Nav>
          <Nav.Link>
            <NavLink to="/category/guitarras" style={navLinkStyle}>Guitars</NavLink>
          </Nav.Link>
          <Nav.Link className="nav-items">
            <NavLink to="/category/consolas" style={navLinkStyle}>Mixers</NavLink>
          </Nav.Link>
          <Nav.Link className="nav-items">
            <NavLink to="/category/microfonos" style={navLinkStyle}>Microphones</NavLink>
          </Nav.Link>
        </Nav>

        <Link to="/cart">
          <CartWidget quantity={cartQuantity} />
        </Link>
      </Container>
    </Navbar>
  );
};

export default Navbar2;

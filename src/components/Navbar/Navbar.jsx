import React from 'react';
import CartWidget from '../CartWidget/CartWidget'; // Asume que tienes un componente CartWidget
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navbar2 = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {/* Brand */}
        <Navbar.Brand>
          <Link to="/">Music Center</Link>
        </Navbar.Brand>

        {/* Links */}
        <Nav>
          <Nav.Link>
            <NavLink to="/category/guitarras">Guitars</NavLink>
          </Nav.Link>
          <Nav.Link className="nav-items">
            <NavLink to="/category/consolas">Mixers</NavLink>
          </Nav.Link>
          <Nav.Link className="nav-items">
            <NavLink to="/category/microfonos">Microphones</NavLink>
          </Nav.Link>
        </Nav>

        {/* CartWidget como un enlace */}
        <Link to="/cart">
          <CartWidget />
        </Link>
      </Container>
    </Navbar>
  );
};

export default Navbar2;
